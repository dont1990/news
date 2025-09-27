import { useQuery } from "@tanstack/react-query";
import { Article } from "@/app/types/types";
import { apiClient } from "@/app/lib/api/api-client";

export function useHeroNews() {
  return useQuery<Article[], Error>({
    queryKey: ["heroNews"],
    queryFn: () => apiClient<{ data: Article[] }>("news/hero").then(res => res.data),
  });
}
