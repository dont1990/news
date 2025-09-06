"use client";

import { Article } from "@/app/types/types";
import { getCategoryColors } from "@/app/lib/category-colors";
import Link from "next/link";

export function FeaturedArticle({ article }: { article: Article }) {
  const colors = getCategoryColors(article.category);

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-md border border-border mb-10 bg-gradient-to-br from-background to-muted`}
    >
      <div className="p-6">
        <p className={`text-sm mb-2 ${colors.primaryText}`}>
          ویژه · {article.category}
        </p>
        <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
        <p className="text-muted-foreground mb-4">{article.description}</p>
        <Link
          href={`/articles/${article.id}`}
          className={`text-sm font-medium underline ${colors.primaryText}`}
        >
          ادامه مطلب →
        </Link>
      </div>
    </div>
  );
}
