import { useInfiniteResource } from "@/app/hooks/useInfiniteResource";
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll";
import { Article } from "@/app/types/types";
import { useMemo } from "react";

type NewsFilters = {
  category?: string;      // optional now
  search?: string;
  dateFilter?: string;
  sort?: string;
};

export function useNewsFeed(filters?: NewsFilters) {
  const {
    category = "all",
    search = "",
    dateFilter = "all",
    sort = "latest",
  } = filters || {};

  const queryParams = useMemo(
    () => ({
      category: category === "all" ? undefined : category,
      search,
      sort,
      dateFilter,
    }),
    [category, search, sort, dateFilter]
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

  const articles: Article[] = data?.pages.flatMap((p) => p.data) || [];
  const total = data?.pages[0]?.total ?? 0;

  return {
    articles,
    total,
    loading: isLoading,
    fetching: isFetching,
    ref,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
