import { useQuery } from "@tanstack/react-query";
import { IArticle } from "@/types/article";
import { apiClient } from "@/lib/api/api-client";

export function useHeroNews() {
  return useQuery<IArticle[], Error>({
    queryKey: ["heroNews"],
    queryFn: () =>
      apiClient<{ data: IArticle[] }>("news/hero").then((res) => res.data),
  });
}
