"use client";

import { BreakingNewsTicker } from "./breaking-news-ticker";
import { useBreakingNews } from "./hooks/useBreakingNews";


export function BreakingNews() {
  const { data: breakingNews, isLoading, error } = useBreakingNews(10);

  if (isLoading) return <p>در حال بارگذاری اخبار فوری...</p>;
  if (error) return <p>خطا در بارگذاری اخبار فوری: {error.message}</p>;
  if (!breakingNews || breakingNews.length === 0) return null;

  return <BreakingNewsTicker breakingNews={breakingNews} />;
}
