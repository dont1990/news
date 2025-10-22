"use client";

import Link from "next/link";
import { highlightText } from "@/lib/highlight";
import CategoryBadge from "../../category-badge";
import ArticleCardTitle from "../title";
import ArticleImage from "../image";
import ArticleSourceLink from "../../article-source-link";
import TimeAgo from "../../time-ago";
import ClockIcon from "@/assets/shared-icons/clock";
import { routes } from "@/routes/routes";
import { ArticleCardProps } from "../types/article-card-types";

export const HorizontalCard = ({ article, highlightQuery }: ArticleCardProps) => {
  const { title, category, id, publishedAt, source, sourceLink } = article;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex min-h-[160px] sm:min-h-[180px]">
      <div className="flex justify-between h-full w-full">
        {/* right content */}
        <div className="p-3 flex flex-col justify-between flex-1">
          <div className="flex justify-between">
            <CategoryBadge title={category} />
            <div className="flex items-center gap-1 text-muted-foreground">
              <ClockIcon className="w-3 h-3 text-primary" />
              <TimeAgo date={publishedAt} className="text-xs sm:text-sm" />
            </div>
          </div>

          <ArticleCardTitle
            id={id}
            title={highlightQuery ? highlightText(title, highlightQuery) : title}
          />

          <div className="flex items-center justify-between text-xs sm:text-sm gap-3">
            <ArticleSourceLink source={source} sourceLink={sourceLink} />
          </div>
        </div>

        {/* left image */}
        <Link href={routes.news.detail.getHref(id)} className="relative group/img aspect-square">
          <ArticleImage
            article={article}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/20" />
        </Link>
      </div>
    </div>
  );
};
