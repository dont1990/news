import { useQuery } from "@tanstack/react-query";
import { IArticle } from "@/types/article";
import { apiClient } from "@/lib/api/api-client";

export function useBreakingNews(limit: number = 10) {
  return useQuery<IArticle[], Error>({
    queryKey: ["breakingNews", limit],
    queryFn: () =>
      apiClient<{ data: IArticle[] }>("news/breaking", { limit }).then(
        (res) => res.data
      ),
  });
}
