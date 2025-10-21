"use client";

import { useEffect, useRef } from "react";
import ArticlePageContent from "./content/index";
import { useNewsById } from "./hooks/useNewsById";
import { useIncrementArticleView } from "./hooks/useIncrementArticleView";
import NotFound from "./not-found";
import ArticleDetailSkeleton from "./skeleton";
import { ApiError } from "@/lib/api/types/api-error";

export default function ArticlePageWrapper({ id }: { id: string }) {
  const { data: article, isLoading, error } = useNewsById(id);
  const { mutate: incrementView } = useIncrementArticleView(id);
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (id && article && !hasIncremented.current) {
      incrementView();
      hasIncremented.current = true; // ✅ prevent double increment
    }
  }, [id, article, incrementView]);

  if (isLoading) return <ArticleDetailSkeleton />;
  if ((error instanceof ApiError && error.status === 404) || !article) {
    return <NotFound />;
  }
  if (error) return <div>مشکلی رخ داده است.</div>;

  return <ArticlePageContent article={article} />;
}
