import { useQuery } from "@tanstack/react-query";
import { Article } from "@/app/types/types";
import { apiClient } from "@/app/lib/api/api-client";

interface UseLimitedNews {
  category?: string;
  limit?: number; // number of articles to fetch
  sort?: "asc" | "desc";
}

export function useLimitedNews({ category, limit = 6, sort = "desc" }: UseLimitedNews) {
  return useQuery<Article[], Error>({
    queryKey: ["newsByCategory", category, limit, sort],
    queryFn: () =>
      apiClient<{ data: Article[] }>("news", {
        category,
        limit,
        sort,
      }).then((res) => res.data),
  });
}
