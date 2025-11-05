import { useInfinite } from "@/hooks/useInfinite";
import { Newspaper } from "@/types/newspaper";

interface UseNewspapersParams {
  search?: string;
  sort?: "az" | "za";
}

export function useNewspapers({
  search = "",
  sort = "az",
}: UseNewspapersParams = {}) {
  const { items, total, ref, loading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinite<Newspaper>("newspapers", { search, sort });

  return {
    newspapers: items,          
    total,
    loading,
    ref,                        
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
