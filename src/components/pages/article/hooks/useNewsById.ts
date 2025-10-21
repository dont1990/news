import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { Article } from "@/types/types";

export function useNewsById(id?: string) {
  return useQuery({
    queryKey: ["news", id],
    queryFn: () => apiClient<Article>(`news/${id}`),
    enabled: !!id, // don’t run until id is available
  });
}
