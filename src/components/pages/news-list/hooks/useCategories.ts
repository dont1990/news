import { useMemo } from "react";
import { useInfiniteResource } from "@/hooks/useInfiniteResource";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import {
  categories as staticCategories,
  Category,
} from "@/data/categories/categories";
import { PAGE_LIMIT } from "@/constants/global";
import HashTagIcon from "@/assets/shared-icons/hash";

function mergeCategories(apiCats: string[]): Category[] {
  const mappedApiCats: Category[] = apiCats.map((title) => {
    const found = staticCategories.find((c) => c.title === title);
    return (
      found || {
        title,
        icon: HashTagIcon,
        description: "",
      }
    );
  });

  // Deduplicate by title
  const unique = new Map<string, Category>();
  [...staticCategories, ...mappedApiCats].forEach((cat) =>
    unique.set(cat.title, cat)
  );

  return Array.from(unique.values());
}

type CategoryFilters = {
  search?: string;
  sort?: string;
};

export function useInfiniteCategories(
  filters?: CategoryFilters,
  limit: number = PAGE_LIMIT
) {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteResource<string>("categories", filters, limit); // Change generic type to string

  const { ref } = useInfiniteScroll({ hasNextPage, fetchNextPage });

  const categoriesList: Category[] = useMemo(() => {
    // Now access p.data instead of p.categories
    const apiCats = data?.pages.flatMap((p) => p.data ?? []) || [];
    return mergeCategories(apiCats);
  }, [data?.pages]);

  return {
    categories: categoriesList,
    ref,
    fetchNextPage,
    hasNextPage,
    loading: isLoading,
    isFetchingNextPage,
  };
}
