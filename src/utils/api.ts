const PORTCULLIS_NEXT_URL = process.env.NEXT_PUBLIC_PORTCULLIS_URL || 'https://portcullis-app.fly.dev';

interface ExportPayload {
  organization: string;
  internal_warehouse: string;
  destination_type: string;
  destination_name: string;
  credentials: Record<string, string>;
  scheduled_at?: string;
}

export async function createExport(apiKey: string, payload: ExportPayload) {
  const response = await fetch(`${PORTCULLIS_NEXT_URL}/api/v1/exports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'Origin': window.location.origin
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Failed to create export');
  }

  return data;
}
