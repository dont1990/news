import { useMemo } from "react";
import { useInfinite } from "@/hooks/useInfinite";
import { Article } from "@/types/article";

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

  // ✅ Use the new unified infinite hook
  const {
    items: articles,
    total,
    ref,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    loading,
    fetching,
  } = useInfinite<Article>("news", queryParams);

  return {
    articles,
    total,
    ref,                   // attach this to bottom div for infinite scroll
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    loading,
    fetching,
  };
}
