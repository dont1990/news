"use client";

import { Card, CardContent } from "@/components/ui/card";
import CategoryBadge from "../../category-badge";
import ArticleCardTitle from "../title";
import ArticleDescription from "../description";
import ArticleImage from "../image";
import { highlightText } from "@/lib/highlight";
import { ArticleCardProps } from "../types/article-card-types";

export const OverlayCard = ({ article, highlightQuery }: ArticleCardProps) => {
  const { title, description, category } = article;

  return (
    <Card className="news-card group relative h-full overflow-hidden rounded-2xl hover:shadow-2xs pb-0 min-h-80">
      <div className="absolute inset-0">
        <ArticleImage
          article={article}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <CardContent className="relative z-10 p-4 flex flex-col justify-end text-right h-full">
        <CategoryBadge title={category} className="mb-3" />
        <ArticleCardTitle
          id={article.id}
          title={highlightQuery ? highlightText(title, highlightQuery) : title}
          className="text-white mb-2"
        />
        <ArticleDescription
          description={
            highlightQuery
              ? highlightText(description, highlightQuery)
              : description
          }
          className="mb-4 text-white"
        />
      </CardContent>
    </Card>
  );
};
