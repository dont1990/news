import { apiClient } from "@/app/lib/api/api-client";
import { Article } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";

export function useTrendingNews(limit: number = 5) {
  return useQuery({
    queryKey: ["trendingNews", limit],
    queryFn: () => apiClient<Article[]>("news/trending", { limit }),
    staleTime: 60_000, // fresh for 1 min
  });
}
