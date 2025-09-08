import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api/api-client";
import { Article } from "@/app/types/types";

export function useNewsById(id?: string) {
  return useQuery({
    queryKey: ["news", id],
    queryFn: () => apiClient<Article>(`news/${id}`),
    enabled: !!id, // don’t run until id is available
    staleTime: 60_000, // fresh for 1 min
  });
}
