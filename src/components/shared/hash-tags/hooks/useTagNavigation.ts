"use client";

import { useMutation } from "@tanstack/react-query";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useRouter, usePathname } from "next/navigation";

export function useTagNavigation() {
  const { getParam, updateParams } = useQueryParams();
  const router = useRouter();
  const pathname = usePathname();

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
    const isSearchOrNews =
      pathname.startsWith("/search") || pathname.startsWith("/news");

    const query = tags.length ? `?tags=${encodeURIComponent(tags.join(","))}` : "";

    if (isSearchOrNews) {
      // stay on current page — just update params (existing behavior)
      updateParams({ tags: tags.length ? tags.join(",") : null }, { replace: true });
    } else {
      // go to search (or news) page
      router.push(`/search${query}`);
    }
  };

  const recordTagClick = useMutation({
    mutationFn: async (tag: string) => {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tags/${encodeURIComponent(tag)}/click`,
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
