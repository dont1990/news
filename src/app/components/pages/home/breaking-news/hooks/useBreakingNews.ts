import { useQuery } from "@tanstack/react-query";
import { Article } from "@/app/types/types";
import { apiClient } from "@/app/lib/api/api-client";

export function useBreakingNews(limit: number = 10) {
  return useQuery<Article[], Error>({
    queryKey: ["breakingNews", limit],
    queryFn: () => apiClient<{ data: Article[] }>("news/breaking", { limit }).then(res => res.data),
  });
}
