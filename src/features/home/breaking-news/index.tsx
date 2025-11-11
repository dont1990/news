"use client";

import { BreakingNewsTicker } from "./components/breaking-news-ticker";
import { useBreakingNews } from "./hooks/useBreakingNews";
import { BreakingNewsSkeleton } from "./skeleton";

export function BreakingNews() {
  const { data: breakingNews, isLoading, error } = useBreakingNews();

  if (isLoading) return <BreakingNewsSkeleton />;
  if (error) return <p>خطا در بارگذاری اخبار فوری: {error.message}</p>;
  if (!breakingNews || breakingNews.length === 0) return null;

  return <BreakingNewsTicker breakingNews={breakingNews} />;
}
