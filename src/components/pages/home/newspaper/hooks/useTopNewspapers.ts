import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { INewspaper } from "@/components/pages/newspaper/types/newspaper";

export function useTopNewspapers(limit = 10) {
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
