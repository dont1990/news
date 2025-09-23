import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api/api-client";

export function useSubscribeNewsletter() {
  return useMutation({
    mutationFn: (email: string) =>
      apiClient<{ success: boolean }>("newsletter/subscribe", {
        email,
      }),
  });
}
