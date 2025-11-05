"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import CategoryBadge from "../../category-badge";
import ArticleCardTitle from "../title";
import ArticleDescription from "../description";
import ArticleImage from "../image";
import ArticleHashTags from "../../hash-tags";
import ClockIcon from "@/assets/shared-icons/clock";
import TimeAgo from "../../time-ago";
import { highlightText } from "@/lib/highlight";
import { ArticleCardProps } from "../types/article-card-types";
import { routes } from "@/routes/routes";

export const DefaultCard = ({ article, highlightQuery }: ArticleCardProps) => {
  const {
    title,
    description,
    category,
    id,
    publishedAt,
    source,
    tags,
  } = article;

  return (
    <Card className="news-card group h-full xl:col-span-1 p-0 hover:shadow-2xs flex flex-col gap-0">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <Link href={routes.news.detail.getHref(id)}>
          <ArticleImage
            article={article}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>

      <CardContent className="p-4 flex flex-col flex-1 justify-between">
        <div className="flex flex-col grow">
          <CategoryBadge title={category} className="mb-3" />
          <ArticleCardTitle
            id={id}
            title={
              highlightQuery ? highlightText(title, highlightQuery) : title
            }
            className="mb-3"
          />
          <ArticleDescription
            description={
              highlightQuery
                ? highlightText(description, highlightQuery)
                : description
            }
            className="mb-4 text-muted-foreground"
          />
          <ArticleHashTags tags={tags || []} />
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border mt-auto">
          {/* <AnimatedLink
            href={sourceLink ?? routes.home.getHref()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            icon={LinkIcon}
          >
            <span>{source}</span>
            </AnimatedLink> */}
          <span className="text-foreground font-medium">{source}</span>
          <div className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4 text-primary" />
            <TimeAgo date={publishedAt} className="text-xs sm:text-sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
