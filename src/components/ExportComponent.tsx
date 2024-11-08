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
// Change the interface declaration to export
export interface ExportComponentProps {
  apiKey: string;
  organizationId: string;
  internalWarehouse: string;
  tenancyColumn: string;
  tableName: string;
  theme?: 'light' | 'dark';
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

type Step = 'destination' | 'credentials' | 'schedule';

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

  const handleSubmit = async () => {
    try {
      const { data: warehouseData, error } = await supabase
        .from('warehouses')
        .select('credentials, id')
        .eq('id', internalWarehouse)
        .single();

      if (error) throw error;
      if (!warehouseData?.credentials) throw new Error('No credentials found');

      const data = await createExport(apiKey, {
        organization: organizationId,
        internal_warehouse: warehouseData.id,
        internal_credentials: warehouseData.credentials,
        destination_type: destination_type,
        tenancy_column: tenancyColumn,
        destination_name: destination_name,
        table: tableName,
        credentials: credentials,
        scheduled_at: scheduledAt || undefined
      });

      toast({
        title: "Export Created",
        description: "Your export has been configured successfully.",
      });

      onSuccess?.(data);
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create export",
        variant: "destructive",
      });
      onError?.(error);
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
        {credentialFields[destination_type].map((field) => (
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
        ))}
      </CardContent>
      <CardFooter className="space-x-2">
        <Button onClick={() => setCurrentStep('destination')}>
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('schedule')}
          disabled={!Object.keys(credentials).length}
        >
          Continue
        </Button>
      </CardFooter>
    </>
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
          disabled={!!dateTimeError}
        >
          Create Export
        </Button>
      </CardFooter>
    </>
  );

  const stepComponents = {
    destination: renderDestinationStep,
    credentials: renderCredentialsStep,
    schedule: renderScheduleStep,
  };

  return (
    <div ref={containerRef} className="relative w-full">
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
            {stepComponents[currentStep]()}
            <PortcullisTag />
          </>
        )}
      </Card>
    </div>
  );
}