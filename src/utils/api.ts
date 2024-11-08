const PORTCULLIS_NEXT_URL = process.env.NEXT_PUBLIC_PORTCULLIS_URL || 'https://portcullis-app.fly.dev';

interface ExportPayload {
  organization: string;
  internal_warehouse: string;
  destination_type: string;
  destination_name: string;
  tenancy_column: string;
  internal_credentials: string;
  table: string;
  credentials: Record<string, string>;
  scheduled_at?: string;
}

export async function createExport(apiKey: string, payload: ExportPayload) {
  // Validate required fields before making the request
  if (!payload.internal_credentials) {
    throw new Error('Internal warehouse credentials are required');
  }

  if (!payload.destination_type || !payload.destination_name || !payload.table || !payload.credentials) {
    throw new Error('Missing required fields in payload');
  }

  const response = await fetch(`${PORTCULLIS_NEXT_URL}/api/exports`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'Origin': window.location.origin
    },
    body: JSON.stringify({
      internal_credentials: payload.internal_credentials,
      internal_warehouse: payload.internal_warehouse,
      destination_type: payload.destination_type,
      destination_name: payload.destination_name,
      table: payload.table,
      credentials: payload.credentials,
      scheduled_at: payload.scheduled_at,
      tenancy_column: payload.tenancy_column,
    })
  });

  const data = await response.json();
  
  if (!response.ok) {
    console.error('Export creation failed:', data);
    throw new Error(data.error || 'Failed to create export');
  }

  return data;
}
