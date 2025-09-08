import { Params } from "@/app/types/types";

export async function apiClient<T>(
  endpoint: string,
  params?: Params
): Promise<T> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    }
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`API Error: ${res.status} ${res.statusText}`);

  return res.json() as Promise<T>;
}
