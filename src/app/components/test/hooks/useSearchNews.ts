import { Article } from "@/app/types/types";
import { useInfiniteResource } from "@/app/hooks/useInfiniteResource";

export function useSearchNews(query: string) {
  return useInfiniteResource<Article>("news", {
    search: query,
    sort: "latest",
  });
}
