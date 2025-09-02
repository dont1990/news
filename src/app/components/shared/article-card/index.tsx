"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Clock, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import CategoryBadge from "../category-badge";
import { Article } from "@/app/types/types";
import { AnimatedLink } from "../animated-link";
import ArticleSourceLink from "../article-source-link";
import ArticleCardTitle from "./title";
import ArticleImage from "./image";

interface ArticleCardProps {
  article: Article;
  type?: "default" | "overlay" | "bottomOverlay" | "horizontal";
}

export function ArticleCard({ article, type = "default" }: ArticleCardProps) {
  if (type === "horizontal") {
    return (
      <div className="relative overflow-hidden rounded-xl bg-card border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[170px] xl:min-h-[180px]">
        <div className="flex h-full w-full">
          {/* Content */}
          <div className="w-2/3 p-3 sm:p-4 flex flex-col justify-between text-right">
            <div className="flex justify-between">
              <CategoryBadge title={article.category} />
              <div className="flex sm:hidden lg:flex xl:hidden items-center gap-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <ArticleCardTitle
              id={article.id}
              title={article.title}
              className="text-card-foreground text-sm sm:text-base mt-2"
            />

            <div className="flex items-center justify-between text-card-foreground text-xs sm:text-sm gap-3">
              <ArticleSourceLink
                source={article.source}
                sourceLink={article.sourceLink}
              />
              <div className="hidden sm:flex lg:hidden xl:flex items-center gap-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <Link
            href={`/article/${article.id}`}
            className="w-1/3 relative group/img"
          >
            <ArticleImage
              article={article}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/20" />
          </Link>
        </div>
      </div>
    );
  }

  if (type === "overlay") {
    return (
      <Card className="news-card group relative h-full overflow-hidden rounded-2xl hover:shadow-2xs pb-0 min-h-80">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ArticleImage
            article={article}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <CardContent className="relative z-10 p-4 flex flex-col justify-end text-right h-full">
          <CategoryBadge title={article.category} className="mb-3 text-white" />
          <ArticleCardTitle
            id={article.id}
            title={article.title}
            className="text-white text-xl mb-2"
          />
          <p className="text-gray-200 text-sm sm:text-base mb-4 line-clamp-3">
            {article.description}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (type === "bottomOverlay") {
    return (
      <Card className="news-card group relative cursor-pointer hover:shadow-2xs p-0">
        {/* Image */}
        <Link
          href={`/article/${article.id}`}
          className="relative w-full aspect-video overflow-hidden rounded-2xl"
        >
          <ArticleImage
            article={article}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Bottom overlay content */}
        <CardContent className="min-h-36 absolute -bottom-[40%] left-1/2 -translate-x-1/2 z-10 w-[85%] bg-card backdrop-blur-md p-4 rounded-xl shadow-lg flex flex-col gap-2 text-center">
          <CategoryBadge title={article.category} className="mb-1 mx-auto" />
          <ArticleCardTitle
            id={article.id}
            title={article.title}
            className="text-lg sm:text-xl line-clamp-1"
          />
          <p className="text-sm text-muted-foreground line-clamp-2">
            {article.description}
          </p>
        </CardContent>
      </Card>
    );
  }

  // ✅ Default card
  return (
    <Card className="news-card group h-full xl:col-span-1 p-0 hover:shadow-2xs flex flex-col gap-0">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <Link href={`/article/${article.id}`}>
          <ArticleImage
            article={article}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>

      <CardContent className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <CategoryBadge title={article.category} />
          </div>
          <ArticleCardTitle
            id={article.id}
            title={article.title}
            className="text-xl mb-3"
          />
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border mt-auto">
          <AnimatedLink
            href={article.sourceLink ?? "/"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1"
            icon={LinkIcon}
          >
            <span>{article.source}</span>
          </AnimatedLink>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            <span className="mt-0.5">{article.readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
