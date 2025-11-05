import { useMemo } from "react";
import { useInfinite } from "@/hooks/useInfinite";
import { categories as staticCategories, Category } from "@/data/categories/categories";
import HashTagIcon from "@/assets/shared-icons/hash";

function mergeCategories(apiCats: string[]): Category[] {
  const mappedApiCats: Category[] = apiCats.map((title) => {
    const found = staticCategories.find((c) => c.title === title);
    return found || { title, icon: HashTagIcon, description: "" };
  });

  const unique = new Map<string, Category>();
  [...staticCategories, ...mappedApiCats].forEach((cat) => unique.set(cat.title, cat));
  return Array.from(unique.values());
}

type CategoryFilters = {
  search?: string;
  sort?: string;
};

export function useInfiniteCategories(filters?: CategoryFilters, limit: number = 10) {
  const { items, ref, fetchNextPage, hasNextPage, isFetchingNextPage, loading } =
    useInfinite<string>("categories", filters, limit);

  const categories = useMemo(() => mergeCategories(items), [items]);

  return { categories, ref, fetchNextPage, hasNextPage, isFetchingNextPage, loading };
}
