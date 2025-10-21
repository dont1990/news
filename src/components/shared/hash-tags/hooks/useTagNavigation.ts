"use client";

import { useMutation } from "@tanstack/react-query";
import { useQueryParams } from "@/hooks/useQueryParams";

export function useTagNavigation() {
  const { getParam, updateParams } = useQueryParams();

  const currentTags = (getParam("tags") || "").split(",").filter(Boolean);

  const toggleTag = (tag: string) =>
    currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag];

  const getTagState = (tag: string, highlighted = false) => {
    const isSelected = currentTags.includes(tag);
    return { isSelected, isActive: isSelected || highlighted };
  };

  const navigateWithTags = (tags: string[]) => {
    updateParams(
      { tags: tags.length ? tags.join(",") : null },
      { replace: true }
    );
  };

  const recordTagClick = useMutation({
    mutationFn: async (tag: string) => {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tags/${encodeURIComponent(
          tag
        )}/click`,
        { method: "POST" }
      );
    },
  });

  return {
    currentTags,
    toggleTag,
    navigateWithTags,
    recordTagClick,
    getTagState,
  };
}
