import * as React from 'react';

interface ExportWrapperProps {
    apiKey: string;
    organizationId: string;
    internalWarehouse: string;
    tableName: string;
    theme?: 'light' | 'dark';
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
}
declare enum WarehouseType {
    Clickhouse = "clickhouse",
    Snowflake = "snowflake",
    Databricks = "databricks",
    BigQuery = "bigquery",
    Redshift = "redshift",
    Kafka = "kafka",
    Postgres = "postgres"
}
declare const ExportWrapper: React.FC<ExportWrapperProps>;

export { ExportWrapper, type ExportWrapperProps, WarehouseType };
