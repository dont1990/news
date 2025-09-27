"use client";

import { useEffect, useRef } from "react";
import ArticlePageContent from "./content/index";
import { useNewsById } from "./hooks/useNewsById";
import { useIncrementArticleView } from "./hooks/useIncrementArticleView";
import NotFound from "./not-found";
import ArticleDetailSkeleton from "./skeleton";

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
  if (error) return <div>مشکلی رخ داده است.</div>;
  if (!article) return <NotFound />;

  return <ArticlePageContent article={article} />;
}
