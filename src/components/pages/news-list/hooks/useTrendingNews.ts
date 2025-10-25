import { apiClient } from "@/lib/api/api-client";
import { Article } from "@/types/article";
import { useQuery } from "@tanstack/react-query";

export function useTrendingNews(limit: number = 5) {
  return useQuery({
    queryKey: ["trendingNews", limit],
    queryFn: () => apiClient<Article[]>("news/trending", { limit }),
  });
}
