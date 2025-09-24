"use client";

import { Article } from "@/app/types/types";
import { getCategoryColors } from "@/app/lib/category-colors";
import Link from "next/link";
import { AnimatedLink } from "@/app/components/shared/animated-link";
import { ArrowLeft } from "lucide-react";
import { routes } from "@/app/routes/routes";

export function FeaturedArticle({ article }: { article: Article }) {
  const colors = getCategoryColors(article.category);

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-md border border-border mb-4 bg-gradient-to-br from-background to-muted`}
    >
      <div className="p-4">
        <p className={`text-lg font-medium mb-2 ${colors.primaryText}`}>ویژه</p>
        <p className="text-xl font-bold mb-4">{article.title}</p>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {article.description}
        </p>
        <Link
          href={routes.news.detail.getHref(article.id)}
          className={`text-sm font-medium underline ${colors.primaryText}`}
        ></Link>
        <AnimatedLink href={`/articles/${article.id}`}>
          ادامه مطلب
          <ArrowLeft className="h-4 w-4 mt-1" />
        </AnimatedLink>
      </div>
    </div>
  );
}
