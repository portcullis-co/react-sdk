const PORTCULLIS_NEXT_URL = process.env.NEXT_PUBLIC_PORTCULLIS_URL || 'https://app.portcullis.com';

interface ExportPayload {
  organization: string;
  internal_warehouse: string;
  destination_type: string;
  destination_name: string;
  credentials: Record<string, string>;
  scheduled_at?: string;
}

export async function createExport(apiKey: string, payload: ExportPayload) {
  const response = await fetch(`https://${PORTCULLIS_NEXT_URL}/api/exports`, {
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
