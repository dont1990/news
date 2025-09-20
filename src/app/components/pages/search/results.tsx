"use client";

import { ArticleCard } from "@/app/components/shared/article-card";
import { Article } from "@/app/types/types";

type Props = {
  articles: Article[];
  query: string;
};

export function SearchPageResults({ articles, query }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          highlightQuery={query}
        />
      ))}
    </div>
  );
}
