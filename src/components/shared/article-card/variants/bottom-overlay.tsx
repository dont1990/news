"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import CategoryBadge from "../../category-badge";
import ArticleCardTitle from "../title";
import ArticleDescription from "../description";
import ArticleImage from "../image";
import { highlightText } from "@/lib/highlight";
import { IArticleCardProps } from "../types/article-card";
import { routes } from "@/routes/routes";

export const BottomOverlayCard = ({
  article,
  highlightQuery,
}: IArticleCardProps) => {
  const { title, description, category, id } = article;

  return (
    <Card className="news-card group relative cursor-pointer hover:shadow-2xs p-0">
      <Link
        href={routes.news.detail.getHref(id)}
        className="relative w-full aspect-video overflow-hidden rounded-2xl"
      >
        <ArticleImage
          article={article}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <CardContent className="min-h-36 h-45 absolute top-[85%] left-1/2 -translate-x-1/2 z-10 w-[85%] bg-card backdrop-blur-md p-4 rounded-2xl shadow-lg flex flex-col gap-2 text-center">
        <CategoryBadge title={category} className="mb-1 mx-auto" />
        <ArticleCardTitle
          id={id}
          title={highlightQuery ? highlightText(title, highlightQuery) : title}
          className="line-clamp-2"
        />
        <ArticleDescription
          description={
            highlightQuery
              ? highlightText(description, highlightQuery)
              : description
          }
          className="text-muted-foreground"
        />
      </CardContent>
    </Card>
  );
};
