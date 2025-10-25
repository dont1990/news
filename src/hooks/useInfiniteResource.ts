import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { Params } from "../types";
import { PAGE_LIMIT } from "../constants/global";

type PaginatedResponse<T> = {
  data: T[];
  page: number;
  hasMore: boolean;
  total: number;
};

export function useInfiniteResource<T>(
  endpoint: string,
  params?: Params,
  limit: number = PAGE_LIMIT
) {
  return useInfiniteQuery<PaginatedResponse<T>, Error>({
    queryKey: [endpoint, params],
    queryFn: ({ pageParam }: QueryFunctionContext) =>
      apiClient<PaginatedResponse<T>>(endpoint, {
        ...params,
        page: typeof pageParam === "number" ? pageParam : 1, // <-- safe cast
        limit,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });
}
