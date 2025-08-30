"use client";

import { ArticleCard } from "@/app/components/shared/article-card";
import { TrendingUp } from "lucide-react";
import { getCategoryColors } from "@/app/lib/category-colors";
import { Article } from "@/app/types/types";
import { EmptyCategory } from "./empty";

interface CategoryContentProps {
  articles: Article[];
  slug: string;
  categoryName: string;
}

export function CategoryContent({
  articles,
  slug,
  categoryName,
}: CategoryContentProps) {
  const categoryColors = getCategoryColors(slug);

  if (articles.length === 0) {
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
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
