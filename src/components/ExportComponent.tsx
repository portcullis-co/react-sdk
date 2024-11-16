import * as React from "react"
import type { JSX } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useToast } from "../hooks/use-toast"
import { createExport } from "../utils/api"
import * as z from "zod";
import { Skeleton } from "./ui/skeleton"
import { useEffect, useRef, useState } from "react"
import { createClient } from '@clickhouse/client-web';
import { PortcullisTag } from "./PortcullisTag";
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { Spinner } from "../components/ui/spinner";
import { Textarea } from "./ui/text-area"
// Change the interface declaration to export
export interface ExportComponentProps {
  apiKey: string;
  organizationId: string;
  internalWarehouse: string;
  tenancyColumn?: string;
  tenancyIdentifier?: string;
  tableName: string;
  theme?: 'light' | 'dark';
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  className?: string;
}

type Step = 'destination' | 'credentials' | 'schedule' | 'success';

interface TableMetadata {
  name: string;
  engine: string;
  total_rows: number;
}

export enum WarehouseType {
  Clickhouse = 'clickhouse',
  Snowflake = 'snowflake',
  Databricks = 'databricks',
  BigQuery = 'bigquery',
  Redshift = 'redshift',
  Kafka = 'kafka',
  Postgres = 'postgres'
}

export enum WarehouseCredentials {
  Clickhouse = 'clickhouse',
  Snowflake = 'snowflake'
}

// Add this type definition after the enums
type WarehouseCredentialFields = {
  [WarehouseType.Clickhouse]: ['host', 'port', 'username', 'password', 'database'];
  [WarehouseType.Snowflake]: ['account', 'username', 'password', 'warehouse', 'database', 'schema'];
  [WarehouseType.Databricks]: ['host', 'http_path', 'access_token', 'catalog', 'schema'];
  [WarehouseType.BigQuery]: ['project_id', 'private_key', 'client_email', 'dataset'];
  [WarehouseType.Redshift]: ['host', 'port', 'database', 'username', 'password', 'schema'];
  [WarehouseType.Kafka]: ['bootstrap_servers', 'topic', 'security_protocol', 'sasl_username', 'sasl_password'];
  [WarehouseType.Postgres]: ['host', 'port', 'database', 'username', 'password', 'schema'];
}

// Replace the credentialFieldsMap usage with this
const credentialFields = {
  [WarehouseType.Clickhouse]: ['host', 'port', 'username', 'password', 'database'],
  [WarehouseType.Snowflake]: ['account', 'username', 'password', 'warehouse', 'database', 'schema'],
  [WarehouseType.Databricks]: ['host', 'http_path', 'access_token', 'catalog', 'schema'],
  [WarehouseType.BigQuery]: ['project_id', 'private_key', 'client_email', 'dataset'],
  [WarehouseType.Redshift]: ['host', 'port', 'database', 'username', 'password', 'schema'],
  [WarehouseType.Kafka]: ['bootstrap_servers', 'topic', 'security_protocol', 'sasl_username', 'sasl_password'],
  [WarehouseType.Postgres]: ['host', 'port', 'database', 'username', 'password', 'schema']
} as const;

const bigQueryServiceAccountSchema = z.object({
  project_id: z.string(),
  private_key: z.string(),
  client_email: z.string(),
}).strict();

// Update the schema to handle ISO8601 with timezone
const dateTimeSchema = z.string().datetime();
// Add after the enums
const warehouseIcons = {
  [WarehouseType.Clickhouse]: <img src="https://cdn.brandfetch.io/idnezyZEJm/theme/dark/symbol.svg" alt="Clickhouse" className="mr-2 h-4 w-4" />,
  [WarehouseType.Snowflake]: <img src="https://cdn.brandfetch.io/idJz-fGD_q/theme/dark/symbol.svg" alt="Snowflake" className="mr-2 h-4 w-4" />,
  [WarehouseType.Databricks]: <img src="https://cdn.brandfetch.io/idSUrLOWbH/theme/dark/symbol.svg?k=bfHSJFAPEG" alt="Databricks" className="mr-2 h-4 w-4" />,
  [WarehouseType.BigQuery]: <img src="https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg" alt="BigQuery" className="mr-2 h-4 w-4" />,
  [WarehouseType.Redshift]: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon-Redshift-Logo.svg/218px-Amazon-Redshift-Logo.svg.png" alt="Redshift" className="mr-2 h-4 w-4" />,
  [WarehouseType.Kafka]: <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg" alt="Kafka" className="mr-2 h-4 w-4" />,
  [WarehouseType.Postgres]: <img src="https://cdn.brandfetch.io/idjSeCeMle/theme/dark/logo.svg?k=bfHSJFAPEG" alt="Postgres" className="mr-2 h-4 w-4" />
} as const;

export const ExportComponent: React.FC<ExportComponentProps> = ({
  apiKey,
  organizationId,
  internalWarehouse,
  tenancyColumn,
  tenancyIdentifier,
  tableName,
  theme = 'light',
  onSuccess,
  onError,
}) => {
  const [currentStep, setCurrentStep] = React.useState<Step>('destination');
  const [destination_type, setdestination_type] = React.useState<WarehouseType>(WarehouseType.Clickhouse);
  const [destination_name, setdestination_name] = React.useState('');
  const [credentials, setCredentials] = React.useState<Record<string, string>>({});
  const [scheduledAt, setScheduledAt] = React.useState<string | undefined>(undefined);
  const [dateTimeError, setDateTimeError] = React.useState<string>('');
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [selectedTable, setSelectedTable] = useState<string>('');
  const [isLoadingTables, setIsLoadingTables] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const PORTCULLIS_NEXT_URL = process.env.NEXT_PUBLIC_PORTCULLIS_URL || 'https://portcullis-app.fly.dev';

  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setContainerWidth(entry.contentRect.width)
        }
      }
    })

    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const supabase = createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

  const [credentialError, setCredentialError] = useState<string>('');


  const CheckmarkAnimation = () => (
    <div className="flex items-center justify-center p-8">
      <svg 
        className="checkmark w-16 h-16" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 52 52"
      >
        <circle 
          className="checkmark__circle" 
          cx="26" cy="26" r="25" 
          fill="none"
        />
        <path 
          className="checkmark__check" 
          fill="none" 
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const { data: warehouseData, error } = await supabase
        .from('warehouses')
        .select('internal_credentials, id')
        .eq('id', internalWarehouse)
        .single();

      if (error) throw error;
      if (!warehouseData?.internal_credentials) throw new Error('No credentials found');

      let processedCredentials = { ...credentials };

      // Process BigQuery credentials
      if (destination_type === WarehouseType.BigQuery) {
        try {
          // Handle both cases: when service_account_key is a string or when individual fields are provided
          if (credentials.service_account_key) {
            const serviceAccountKey = JSON.parse(credentials.service_account_key);
            processedCredentials = {
              project_id: serviceAccountKey.project_id,
              private_key: serviceAccountKey.private_key,
              client_email: serviceAccountKey.client_email,
              dataset: credentials.dataset // Preserve dataset field
            };
          } else {
            // Validate required fields
            if (!credentials.project_id || !credentials.private_key || !credentials.client_email) {
              throw new Error('Missing required BigQuery credentials');
            }
            processedCredentials = {
              project_id: credentials.project_id,
              private_key: credentials.private_key,
              client_email: credentials.client_email,
              dataset: credentials.dataset
            };
          }
        } catch (e) {
          setCredentialError(e instanceof Error ? e.message : 'Invalid credentials format');
          setIsSubmitting(false);
          return;
        }
      }

      const data = await createExport(apiKey, {
        organization: organizationId,
        internal_warehouse: warehouseData.id,
        internal_credentials: warehouseData.internal_credentials,
        destination_type: destination_type,
        tenancy_column: tenancyColumn,
        tenancy_id: tenancyIdentifier,
        destination_name: destination_name,
        table: tableName,
        credentials: processedCredentials,
        scheduled_at: scheduledAt || undefined
      });

      toast({
        title: "Export Created",
        description: "Your export has been configured successfully.",
      });

      setCurrentStep('success');
      onSuccess?.(data);
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create export",
        variant: "destructive",
      });
      onError?.(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderDestinationStep = () => (
    <>
      <CardHeader>
        <CardTitle>Configure Destination</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Destination Type</Label>
          <Select
            value={destination_type}
            onValueChange={(value: WarehouseType) => setdestination_type(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                {destination_type && (
                  <div className="flex items-center gap-2">
                    {warehouseIcons[destination_type]}
                    <span>{destination_type.charAt(0).toUpperCase() + destination_type.slice(1)}</span>
                  </div>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.values(WarehouseType).map((type) => (
                <SelectItem 
                  key={type} 
                  value={type}
                >
                  <div className="flex items-center gap-2 w-full min-w-[200px]">
                    {warehouseIcons[type]}
                    <span className="truncate">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Warehouse Name</Label>
          <Input
            value={destination_name}
            onChange={(e) => setdestination_name(e.target.value)}
            placeholder="Enter a name for this warehouse"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setCurrentStep('credentials')}
          disabled={!destination_type || !destination_name}
        >
          Continue
        </Button>
      </CardFooter>
    </>
  );


  const renderCredentialsStep = () => (
    <>
      <CardHeader>
        <CardTitle>Configure Credentials</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {destination_type === WarehouseType.BigQuery ? (
          <>
            <div className="space-y-2">
              <Label>Service Account Key (JSON)</Label>
              <Textarea
                className="font-mono"
                value={credentials.service_account_key || ''}
                onChange={(e) => {
                  setCredentialError('');
                  try {
                    // Validate JSON format when pasting
                    const parsed = JSON.parse(e.target.value);
                    const result = bigQueryServiceAccountSchema.safeParse(parsed);
                    if (!result.success) {
                      setCredentialError('Invalid service account key format');
                    }
                  } catch (error) {
                    // Only set error if there's content (allow empty field)
                    if (e.target.value.trim()) {
                      setCredentialError('Invalid JSON format');
                    }
                  }
                  setCredentials(prev => ({
                    ...prev,
                    service_account_key: e.target.value
                  }));
                }}
                placeholder="{
  &quot;project_id&quot;: &quot;your-project&quot;,
  &quot;private_key&quot;: &quot;-----BEGIN PRIVATE KEY-----...-----END PRIVATE KEY-----&quot;,
  &quot;client_email&quot;: &quot;service-account@project.iam.gserviceaccount.com&quot;
}"
                rows={10}
              />
              {credentialError && (
                <p className="text-sm text-red-500">{credentialError}</p>
              )}
              <p className="text-sm text-muted-foreground">
                Paste your Google Cloud service account key JSON here. You can download this from the Google Cloud Console.
              </p>
            </div>
            <div className="space-y-2">
              <Label>Dataset</Label>
              <Input
                value={credentials.dataset || ''}
                onChange={(e) => setCredentials(prev => ({
                  ...prev,
                  dataset: e.target.value
                }))}
                placeholder="Enter BigQuery dataset name"
                required
              />
            </div>
          </>
        ) : (
          credentialFields[destination_type].map((field) => (
            <div key={field} className="space-y-2">
              <Label className="capitalize">
                {field === 'host' ? 'Hostname' : 
                 field === 'port' ? 'Port Number' :
                 field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}
              </Label>
              <Input
                type={field.includes('password') ? 'password' : 'text'}
                value={credentials[field] || ''}
                onChange={(e) => setCredentials(prev => ({
                  ...prev,
                  [field]: e.target.value
                }))}
                placeholder={field === 'port' ? '8123' :
                            field === 'host' ? 'localhost' :
                            `Enter ${field.replace('_', ' ')}`}
              />
            </div>
          ))
        )}
        </CardContent>
        <CardFooter className="space-x-2">
          <Button onClick={() => setCurrentStep('destination')}>
            Back
          </Button>
          <Button
            onClick={() => setCurrentStep('schedule')}
            disabled={!Object.keys(credentials).length || !!credentialError}
          >
            Continue
          </Button>
        </CardFooter>
      </>
    );

  const renderLoadingSpinner = () => (
    <div className="flex items-center justify-center p-8">
      <Spinner />
      <p className="mt-4 text-lg">Processing your export...</p>
    </div>
  );

  const renderScheduleStep = () => (
    <>
      <CardHeader>
        <CardTitle>Schedule Export</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Schedule Time</Label>
          <Input
            value={scheduledAt || ''}
            onChange={(e) => setScheduledAt(e.target.value)}
            type="datetime-local"
            placeholder="2024-03-21T15:30:00+00:00"
            className={dateTimeError ? 'border-red-500' : ''}
          />
          {dateTimeError && (
            <p className="text-sm text-red-500">{dateTimeError}</p>
          )}
          <p className="text-sm text-muted-foreground">
            Enter schedule time in ISO 8601 format with timezone. Leave empty for immediate execution.
          </p>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button onClick={() => setCurrentStep('credentials')}>
          Back
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={!!dateTimeError || isSubmitting}
        >
          Create Export
        </Button>
      </CardFooter>
    </>
  );

  const renderSuccessStep = () => (
    <>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Export Created Successfully! 🎉
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full blur-xl opacity-70 animate-pulse" />
          <CheckmarkAnimation />
        </div>
        <div className="space-y-4 text-center">
          <p className="text-lg sm:text-xl text-muted-foreground">
            Your export has been configured and will begin processing shortly.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Processing in background
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={() => setCurrentStep('destination')}
          className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Create Another Export
        </Button>
        <Button 
          variant="outline"
          className="w-full sm:w-auto hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
          onClick={() => window.open('https://docs.runportcullis.co', '_blank')}
        >
          View Documentation
        </Button>
      </CardFooter>
    </>
  );

  const stepComponents = {
    destination: renderDestinationStep,
    credentials: renderCredentialsStep,
    schedule: renderScheduleStep,
    success: renderSuccessStep,
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-lg mx-auto">
      <Card className="relative">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <div className="space-y-2">
              <Skeleton className={`h-4 w-[${Math.min(250, containerWidth * 0.8)}px]`} />
              <Skeleton className="h-8 w-full" />
              <Skeleton className={`h-4 w-[${Math.min(200, containerWidth * 0.6)}px]`} />
              <Skeleton className="h-8 w-full" />
            </div>
            <Skeleton className={`h-10 w-[${Math.min(120, containerWidth * 0.3)}px]`} />
          </div>
        ) : (
          <>
            {isSubmitting && currentStep === 'schedule' ? (
              renderLoadingSpinner()
            ) : (
              stepComponents[currentStep]()
            )}
            <PortcullisTag />
          </>
        )}
      </Card>
    </div>
  );
};