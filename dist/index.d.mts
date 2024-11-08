import * as React from 'react';

interface ExportComponentProps {
    apiKey: string;
    organizationId: string;
    internalWarehouse: string;
    tenancyColumn: string;
    tenancyId: string;
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
declare const ExportComponent: React.FC<ExportComponentProps>;

export { ExportComponent, type ExportComponentProps, WarehouseType };
