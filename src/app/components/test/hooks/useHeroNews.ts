import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api/api-client";
import { Article } from "@/app/types/types";

export function useHeroNews() {
  return useQuery({
    queryKey: ["heroNews"],
    queryFn: () => apiClient<Article[]>("news", { sort: "latest", limit: 4 }),
    staleTime: 30_000, // fresh for 30s
  });
}
