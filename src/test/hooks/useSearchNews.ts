import { Article } from "@/types/article";
import { useInfiniteResource } from "@/hooks/useInfiniteResource";

export function useSearchNews(query: string) {
  return useInfiniteResource<Article>("news", {
    search: query,
    sort: "latest",
  });
}
