"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Clock, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CategoryBadge from "../category-badge";
import { Article } from "@/app/types/types";
import { AnimatedLink } from "../animated-link";

interface ArticleCardProps {
  article: Article;
  type?: "default" | "overlay" | "bottomOverlay";
}

export function ArticleCard({ article, type = "default" }: ArticleCardProps) {
  if (type === "overlay") {
    return (
      <Card className="news-card group relative h-full overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xs">
        <div className="absolute inset-0">
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>

        <CardContent className="relative z-10 p-6 flex flex-col justify-end text-right h-full">
          <CategoryBadge title={article.category} className="mb-3" />
          <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base mb-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-200">
            <AnimatedLink
              href={article.sourceLink ?? "/"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-gray-200"
              icon={LinkIcon}
              tooltip={article.source}
            >
              <span>منبع</span>
            </AnimatedLink>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary" />
              <span>{article.readTime}</span>
            </div>
          </div>
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
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Bottom overlay content */}
        <CardContent className="min-h-36 absolute -bottom-[40%] left-1/2 -translate-x-1/2 z-10 w-[85%] bg-card backdrop-blur-md p-4 rounded-xl shadow-lg flex flex-col gap-2 text-center">
          <CategoryBadge
            title={article.category}
            className="mb-1 mx-auto"
          />
          <Link
            href={`/article/${article.id}`}
            className="text-lg sm:text-xl font-bold line-clamp-1 hover:text-primary transition-colors duration-300"
          >
            {article.title}
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {article.description}
          </p>

          {/* <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border mt-2">
            <AnimatedLink
              href={article.sourceLink ?? "/"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1"
              icon={LinkIcon}
              tooltip={article.source}
            >
              <span>منبع</span>
            </AnimatedLink>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary" />
              <span>{article.readTime}</span>
            </div>
          </div> */}
        </CardContent>
      </Card>
    );
  }

  // Default card UI
  return (
    <Card className="news-card group h-full xl:col-span-1 p-0 hover:shadow-2xs flex flex-col gap-0">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <Link href={`/article/${article.id}`}>
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
      <CardContent className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <CategoryBadge title={article.category} />
          </div>
          <Link href={`/article/${article.id}`}>
            <p className="news-heading text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </p>
          </Link>
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
