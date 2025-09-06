// src/lib/api-client.ts
export async function apiClient<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean | undefined>
): Promise<T> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    }
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`API Error: ${res.status} ${res.statusText}`);

  return res.json() as Promise<T>;
}
