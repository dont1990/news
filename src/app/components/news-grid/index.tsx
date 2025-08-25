"use client";

import { Article, ArticleCard } from "../article-card";
import SectionTitle from "../section-title";

interface NewsGridProps {
  articles: Article[];
}

export function NewsGrid({ articles }: NewsGridProps) {
  return (
    <section>
      <SectionTitle title={"Latest News"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
