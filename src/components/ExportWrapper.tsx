import * as React from "react"
import type { JSX } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { DateTimePicker } from "./ui/datetime-picker"
import { useToast } from "../hooks/use-toast"
import { createExport } from "../utils/api"

// Change the interface declaration to export
export interface ExportWrapperProps {
  apiKey: string;
  organizationId: string;
  internalWarehouse: string;
  theme?: 'light' | 'dark';
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

type Step = 'destination' | 'credentials' | 'schedule';


export enum WarehouseType {
  Clickhouse = 'clickhouse',
  Snowflake = 'snowflake'
}

export enum WarehouseCredentials {
  Clickhouse = 'clickhouse',
  Snowflake = 'snowflake'
}

// Add this type definition after the enums
type WarehouseCredentialFields = {
  [WarehouseType.Clickhouse]: ['host', 'port', 'username', 'password', 'database'];
  [WarehouseType.Snowflake]: ['account', 'username', 'password', 'warehouse', 'database', 'schema'];
}

// Replace the credentialFieldsMap usage with this
const credentialFields = {
  [WarehouseType.Clickhouse]: ['host', 'port', 'username', 'password', 'database'],
  [WarehouseType.Snowflake]: ['account', 'username', 'password', 'warehouse', 'database', 'schema']
} as const;

export const ExportWrapper: React.FC<ExportWrapperProps> = ({
  apiKey,
  organizationId,
  internalWarehouse,
  theme = 'light',
  onSuccess,
  onError,
}) => {
  const [currentStep, setCurrentStep] = React.useState<Step>('destination');
  const [destinationType, setDestinationType] = React.useState<WarehouseType>(WarehouseType.Clickhouse);
  const [destinationName, setDestinationName] = React.useState('');
  const [credentials, setCredentials] = React.useState<Record<string, string>>({});
  const [scheduledAt, setScheduledAt] = React.useState<Date | undefined>();
  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      const data = await createExport(apiKey, {
        organization: organizationId,
        internal_warehouse: internalWarehouse,
        destination_type: destinationType,
        destination_name: destinationName,
        credentials: credentials,
        scheduled_at: scheduledAt?.toISOString()
      });

      toast({
        title: "Export Created",
        description: "Your export has been successfully configured.",
      });

      onSuccess?.(data);
    } catch (error) {
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
            value={destinationType}
            onValueChange={(value: WarehouseType) => setDestinationType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select destination type" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(WarehouseType).map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Destination Name</Label>
          <Input
            value={destinationName}
            onChange={(e) => setDestinationName(e.target.value)}
            placeholder="Enter destination name"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setCurrentStep('credentials')}
          disabled={!destinationType || !destinationName}
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
        {credentialFields[destinationType].map((field) => (
          <div key={field} className="space-y-2">
            <Label className="capitalize">{field.replace('_', ' ')}</Label>
            <Input
              type={field.includes('password') ? 'password' : 'text'}
              value={credentials[field] || ''}
              onChange={(e) => setCredentials(prev => ({
                ...prev,
                [field]: e.target.value
              }))}
              placeholder={`Enter ${field.replace('_', ' ')}`}
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
          <Label>Schedule (Optional)</Label>
          <DateTimePicker
           value={scheduledAt}
           onChange={setScheduledAt} locale={undefined} weekStartsOn={undefined} showWeekNumber={undefined} showOutsideDays={undefined}          />
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
    schedule: renderScheduleStep,
  };

  return (
    <Card className="w-[600px]" data-theme={theme}>
      {stepComponents[currentStep]()}
    </Card>
  );
};