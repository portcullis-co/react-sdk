const PORTCULLIS_NEXT_URL = process.env.NEXT_PUBLIC_PORTCULLIS_URL || 'localhost:3000';
const isDevelopment = process.env.NODE_ENV === 'development' || PORTCULLIS_NEXT_URL.includes('localhost');

interface ExportPayload {
  organization: string;
  internal_warehouse: string;
  destination_type: string;
  destination_name: string;
  credentials: Record<string, string>;
  scheduled_at?: string;
}

export async function createExport(apiKey: string, payload: ExportPayload) {
  const protocol = isDevelopment ? 'http' : 'https';
  const response = await fetch(`${protocol}://${PORTCULLIS_NEXT_URL}/api/v1/exports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Failed to create export');
  }

  return data;
}
