import { Params } from "@/types";
import { ApiError } from "./types/api-error";

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

  if (!res.ok) {
    throw new ApiError(
      `API Error: ${res.status} ${res.statusText}`,
      res.status
    );
  }

  return res.json() as Promise<T>;
}
