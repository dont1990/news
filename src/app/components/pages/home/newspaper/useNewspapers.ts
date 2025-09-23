// hooks/useNewspapers.ts
import { PAGE_LIMIT } from "@/app/constants/global";
import { apiClient } from "@/app/lib/api/api-client";
import { Newspaper } from "@/app/types/types";
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
