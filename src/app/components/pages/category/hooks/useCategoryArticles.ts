
import { useInfiniteResource } from "@/app/hooks/useInfiniteResource";
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll";
import { Article } from "@/app/types/types";

export function useCategoryArticles(
  categorySlug: string,
  filters?: { search?: string; dateFilter?: string; sort?: string }
) {
  const { search = "", dateFilter = "all", sort = "latest" } = filters || {};

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
  } = useInfiniteResource<Article>("news", {
    category: categorySlug === "all" ? undefined : categorySlug,
    search,
    sort,
    dateFilter,
  });

  const { ref } = useInfiniteScroll({ hasNextPage, fetchNextPage });

  // Flatten pages into a single array
  const articles: Article[] = data?.pages.flatMap((p) => p.data) || [];

  return { articles, loading: isLoading || isFetching, ref, fetchNextPage, hasNextPage };
}
