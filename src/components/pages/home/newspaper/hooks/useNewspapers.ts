// hooks/useNewspapers.ts
import { PAGE_LIMIT } from "@/constants/global";
import { apiClient } from "@/lib/api/api-client";
import { Newspaper } from "@/types/newspaper";
import { useQuery } from "@tanstack/react-query";

type UseNewspapersParams = {
  limit?: number;
};

export function useNewspapers({
  limit = PAGE_LIMIT,
}: UseNewspapersParams = {}) {
  return useQuery<Newspaper[]>({
    queryKey: ["newspapers", limit],
    queryFn: () =>
      apiClient<Newspaper[]>("newspapers", {
        limit,
      }),
    refetchOnWindowFocus: false,
  });
}
