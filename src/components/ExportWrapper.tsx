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

// Change the interface declaration to export
export interface ExportWrapperProps {
  apiKey: string;
  organizationId: string;
  internal_warehouse: string;
  allowedTables?: string[];
  theme?: 'light' | 'dark';
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

type Step = 'destination' | 'credentials' | 'table' | 'schedule';

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

// Add this schema near the top of the file
const dateTimeSchema = z.string().refine((value) => {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/;
  return regex.test(value);
}, "Must be in ISO 8601 format (e.g., 2024-03-21T15:30:00Z)");

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

export const ExportWrapper: React.FC<ExportWrapperProps> = ({
  apiKey,
  organizationId,
  internal_warehouse,
  allowedTables = [],
  theme = 'light',
  onSuccess,
  onError,
}) => {
  const [currentStep, setCurrentStep] = React.useState<Step>('destination');
  const [destination_type, setdestination_type] = React.useState<WarehouseType>(WarehouseType.Clickhouse);
  const [destination_name, setdestination_name] = React.useState('');
  const [credentials, setCredentials] = React.useState<Record<string, string>>({});
  const [scheduledAt, setScheduledAt] = React.useState<string>('');
  const [dateTimeError, setDateTimeError] = React.useState<string>('');
  const [table, setTable] = React.useState<string>('');
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [availableTables, setAvailableTables] = useState<TableMetadata[]>([]);
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

  const handleSubmit = async () => {
    try {
      if (scheduledAt) {
        dateTimeSchema.parse(scheduledAt);
      }
      
      const data = await createExport(apiKey, {
        organization: organizationId,
        internal_warehouse: internal_warehouse,
        destination_type: destination_type,
        destination_name: destination_name,
        table: selectedTable,
        credentials: credentials,
        scheduled_at: scheduledAt || undefined
      });

      toast({
        title: "Export Created",
        description: "Your export has been successfully configured.",
      });

      onSuccess?.(data);
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        setDateTimeError(error.errors[0].message);
        return;
      }
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to create export",
          variant: "destructive",
        });
        onError?.(error);
      }
    }
  };

  const renderDestinationStep = () => (
    <>
      <CardHeader>
        <CardTitle>Configure Destination</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Warehouse Type</Label>
          <Select
            value={destination_type}
            onValueChange={(value: WarehouseType) => setdestination_type(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a warehouse type" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(WarehouseType).map((type) => (
                <SelectItem key={type} value={type} className="flex items-center">
                  {warehouseIcons[type]}
                  <span className="capitalize">{type}</span>
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
          onClick={() => setCurrentStep('table')}
          disabled={!Object.keys(credentials).length}
        >
          Continue
        </Button>
      </CardFooter>
    </>
  );

  const renderTableStep = () => (
    <>
      <CardHeader>
        <CardTitle>Select Table</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoadingTables ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
          <div className="space-y-2">
            <Label>Table</Label>
            <Select
              value={selectedTable}
              onValueChange={setSelectedTable}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a table" />
              </SelectTrigger>
              <SelectContent>
                {availableTables.map((table) => (
                  <SelectItem key={table.name} value={table.name}>
                    {table.name} ({table.total_rows.toLocaleString()} rows)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </CardContent>
      <CardFooter className="space-x-2">
        <Button onClick={() => setCurrentStep('credentials')}>
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('schedule')}
          disabled={!selectedTable}
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
          <Label>Schedule (Optional)</Label>
          <Input
            value={scheduledAt}
            onChange={(e) => {
              setScheduledAt(e.target.value);
              setDateTimeError('');
            }}
            placeholder="YYYY-MM-DDThh:mm:ssZ"
          />
          {dateTimeError && (
            <p className="text-sm text-red-500 mt-1">{dateTimeError}</p>
          )}
          <p className="text-sm text-muted-foreground">
            Example: 2024-03-21T15:30:00Z
          </p>
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button onClick={() => setCurrentStep('credentials')}>
          Back
        </Button>
        <Button onClick={handleSubmit}>
          Create Export
        </Button>
      </CardFooter>
    </>
  );

  const stepComponents = {
    destination: renderDestinationStep,
    credentials: renderCredentialsStep,
    table: renderTableStep,
    schedule: renderScheduleStep,
  };

  // Add this function to fetch tables
  const fetchAvailableTables = async () => {
    setIsLoadingTables(true);
    try {
      // Make a GET request to fetch tables using the API
      const response = await fetch(`${PORTCULLIS_NEXT_URL}/api/warehouses?id=${internal_warehouse}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tables');
      }

      const data = await response.json();
      setAvailableTables(data.tables);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch available tables",
        variant: "destructive",
      });
      onError?.(error);
    } finally {
      setIsLoadingTables(false);
    }
  };

  // Add effect to fetch tables when entering table step
  useEffect(() => {
    if (currentStep === 'table') {
      fetchAvailableTables();
    }
  }, [currentStep]);

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
          </>
        )}
      </Card>
      
      <div className="mt-2 flex items-center justify-end">
        <a 
          href="https://runportcullis.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
        >
          <img 
            src="/portcullis.svg"
            alt="Portcullis logo"
            className="w-3 h-3"
          />
          <span>Powered by Portcullis</span>
        </a>
      </div>
    </div>
  );
}