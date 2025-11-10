import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { IArticle } from "@/types/article";

export function useNewsById(id?: string) {
  return useQuery({
    queryKey: ["news", id],
    queryFn: () => apiClient<IArticle>(`news/${id}`),
    enabled: !!id, // don’t run until id is available
  });
}
