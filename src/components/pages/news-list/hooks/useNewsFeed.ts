import { useInfiniteResource } from "@/hooks/useInfiniteResource";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Article } from "@/types/article";
import { useMemo } from "react";

type NewsFilters = {
  category?: string;
  search?: string;
  dateFilter?: string;
  sort?: string;
  tags?: string[];
};

export function useNewsFeed(filters?: NewsFilters) {
  const {
    category = "همه",
    search = "",
    dateFilter = "all",
    sort = "latest",
    tags = [],
  } = filters || {};

  const queryParams = useMemo(
    () => ({
      category: category === "همه" ? undefined : category,
      search,
      sort,
      dateFilter,
      tags: tags.length ? tags.join(",") : undefined,
    }),
    [category, search, sort, dateFilter, tags]
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
