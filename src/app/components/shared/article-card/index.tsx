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
  type?: string;
}

export function ArticleCard({ article, type = "default" }: ArticleCardProps) {
  return (
    <>
      {type === "default" && (
        <Card className="news-card group h-full xl:col-span-1 p-0 hover:shadow-2xs flex flex-col gap-0">
          {/* Image with overlay + badge */}
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
                <span className="text-xs text-muted-foreground font-medium">
                  {article.source}
                </span>
              </div>

              {/* Title links to article */}
              <Link href={`/article/${article.id}`}>
                <p className="news-heading text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </p>
              </Link>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                {article.description}
              </p>
            </div>

            {/* Footer always at bottom */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border mt-auto">
              <AnimatedLink
                href={article.sourceLink ?? "/"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1"
                icon={LinkIcon}
                tooltip={article.source} // ✅ Tooltip with source name
              >
                <span>منبع</span>
              </AnimatedLink>

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-primary" />
                <span className="mt-0.5">{article.readTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
