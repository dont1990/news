import { useInfiniteResource } from "@/app/hooks/useInfiniteResource";
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll";
import { Article } from "@/app/types/types";
import { useMemo } from "react";

export function useCategoryArticles(
  categorySlug: string,
  filters?: { search?: string; dateFilter?: string; sort?: string }
) {
  const { search = "", dateFilter = "all", sort = "latest" } = filters || {};

  const queryParams = useMemo(
    () => ({
      category: categorySlug === "all" ? undefined : categorySlug,
      search,
      sort,
      dateFilter,
    }),
    [categorySlug, search, sort, dateFilter]
  );

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteResource<Article>("news", queryParams);

  const { ref } = useInfiniteScroll({ hasNextPage, fetchNextPage });

  // Flatten pages into a single array
  const articles: Article[] = data?.pages.flatMap((p) => p.data) || [];

  const total = data?.pages[0]?.total ?? 0;

  return {
    articles,
    total,
    loading: isLoading, // only true on first load
    fetching: isFetching,
    ref,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
