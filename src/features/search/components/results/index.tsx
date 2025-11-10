"use client";

import { ArticleCard } from "@/components/shared/article-card";
import { InfiniteLoader } from "@/components/shared/infinite-loader";
import { IArticle } from "@/types/article";

type Props = {
  articles: IArticle[];
  query: string;
  infiniteScrollRef?: React.Ref<HTMLDivElement>;
  isFetchingNextPage: boolean;
};

export function SearchPageResults({
  articles,
  query,
  isFetchingNextPage,
  infiniteScrollRef,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          highlightQuery={query}
        />
      ))}
      <div ref={infiniteScrollRef} aria-hidden="true" />
      {isFetchingNextPage && (
        <InfiniteLoader className="my-6" message="در حال بارگذاری ..." />
      )}
    </div>
  );
}
