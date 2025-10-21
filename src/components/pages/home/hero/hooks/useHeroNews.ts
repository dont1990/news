import { useQuery } from "@tanstack/react-query";
import { Article } from "@/types/types";
import { apiClient } from "@/lib/api/api-client";

export function useHeroNews() {
  return useQuery<Article[], Error>({
    queryKey: ["heroNews"],
    queryFn: () =>
      apiClient<{ data: Article[] }>("news/hero").then((res) => res.data),
  });
}
