"use client";

import { useMutation } from "@tanstack/react-query";

export function useIncrementArticleView(id?: string) {
  return useMutation({
    mutationKey: ["articleView", id],
    mutationFn: async () => {
      if (!id) throw new Error("Article ID is required");

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${id}/view`, {
        method: "POST",
      });

      if (!res.ok) throw new Error("Failed to increment article view");

      return res.json() as Promise<{ views: number }>;
    },
  });
}
