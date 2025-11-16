import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { INewspaper } from "@/types/newspaper";
import { PAGE_LIMIT } from "@/constants/global";

export function useTopNewspapers(limit = PAGE_LIMIT) {
  return useQuery<{
    data: INewspaper[];
  }>({
    queryKey: ["top-newspapers", limit],
    queryFn: () =>
      apiClient<{ data: INewspaper[] }>("newspapers", {
        limit,
        sort: "az",
        page: 1,
      }),
    refetchOnWindowFocus: false,
  });
}
