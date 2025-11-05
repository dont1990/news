import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { Newspaper } from "@/types/newspaper";

export function useTopNewspapers(limit = 10) {
  return useQuery<{
    data: Newspaper[];
  }>({
    queryKey: ["top-newspapers", limit],
    queryFn: () =>
      apiClient<{ data: Newspaper[] }>("newspapers", {
        limit,
        sort: "az",
        page: 1,
      }),
    refetchOnWindowFocus: false,
  });
}
