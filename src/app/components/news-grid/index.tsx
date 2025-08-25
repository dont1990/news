"use client";

import { Article, ArticleCard } from "../article-card";

interface NewsGridProps {
  articles: Article[];
}

export function NewsGrid({ articles }: NewsGridProps) {
  return (
    <section>
      <h2 className="newspaper-heading text-2xl mb-6 border-b border-border pb-2">
        Latest News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
