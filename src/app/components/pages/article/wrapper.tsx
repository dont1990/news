"use client";

import ArticlePageContent from "./content/index";
import { useNewsById } from "./hooks/useNewsById";
import NotFound from "./not-found";
import ArticleDetailSkeleton from "./skeleton";

export default function ArticlePageWrapper({ id }: { id: string }) {
  const { data: article, isLoading, error } = useNewsById(id);

  if (isLoading) {
    return <ArticleDetailSkeleton />;
  }

  if (error) return <div>مشکلی رخ داده است.</div>;

  if (error || !article) {
    return <NotFound />;
  }

  return <ArticlePageContent article={article} />;
}
