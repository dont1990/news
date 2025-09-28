"use client";

import { useMutation } from "@tanstack/react-query";
import { useQueryParams } from "@/app/hooks/useQueryParams";
import { useRouter } from "next/navigation";

export function useTagNavigation() {
  const { getParam } = useQueryParams();
  const router = useRouter();

  const tagsQuery = getParam("tags") || "";
  const currentTags = tagsQuery.split(",").filter(Boolean);

  const toggleTag = (tag: string) => {
    const isSelected = currentTags.includes(tag);
    const newTags = isSelected
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag];

    return newTags;
  };

  const navigateWithTags = (tags: string[]) => {
    const query = tags.length ? `tags=${tags.join(",")}` : "";
    router.push(`/news?${query}`);
  };

  const useRecordTagClick = (tag: string) =>
    useMutation({
      mutationFn: async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags/${encodeURIComponent(tag)}/click`, {
          method: "POST",
        });
      },
    });

  return { currentTags, toggleTag, navigateWithTags, useRecordTagClick };
}
