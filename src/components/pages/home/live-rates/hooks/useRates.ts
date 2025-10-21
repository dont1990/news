"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";

export interface RatesData {
  dollar: { value: string; change: string };
  tsetmc: { value: string; change: string };
  gold: { value: string; change: string };
  coin: { value: string; change: string };
  updatedAt: string;
}

export function useRates() {
  return useQuery<RatesData, Error>({
    queryKey: ["rates"],
    queryFn: () => apiClient<RatesData>("rates"),
    refetchInterval: 60 * 1000, // auto refresh every 1 minute
  });
}
