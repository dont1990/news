"use client";

import { ArticleCard } from "@/app/components/shared/article-card";
import { getCategoryColors } from "@/app/lib/category-colors";
import { Article } from "@/app/types/types";
import { EmptyCategory } from "./empty";

interface CategoryContentProps {
  articles: Article[];
  slug: string;
  categoryName: string;
  query: string;
}

export function CategoryContent({
  articles,
  slug,
  categoryName,
  query,
}: CategoryContentProps) {
  const categoryColors = getCategoryColors(slug);

  if (!articles || articles.length === 0) {
    return (
      <EmptyCategory
        categoryName={categoryName}
        categoryColors={categoryColors}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
