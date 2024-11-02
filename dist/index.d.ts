import * as React from 'react';

interface ExportWrapperProps {
    apiKey: string;
    organizationId: string;
    internal_warehouse: string;
    allowedTables?: string[];
    theme?: 'light' | 'dark';
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
}
declare enum WarehouseType {
    Clickhouse = "clickhouse",
    Snowflake = "snowflake"
}
declare const ExportWrapper: React.FC<ExportWrapperProps>;

export { ExportWrapper, type ExportWrapperProps, WarehouseType };
