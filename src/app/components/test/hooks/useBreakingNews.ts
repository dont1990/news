import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api/api-client";
import { Article } from "@/app/types/types";

export function useBreakingNews(limit: number = 5) {
  return useQuery({
    queryKey: ["breakingNews", limit],
    queryFn: () => apiClient<Article[]>("news/breaking", { limit }),
    staleTime: 10_000, // refresh quickly
    refetchInterval: 15_000, // auto-refresh every 15s
  });
}
