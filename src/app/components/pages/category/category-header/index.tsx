"use client";

import { Badge } from "@/app/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { getCategoryColors, getCategoryBadgeClasses } from "@/app/lib/category-colors";

interface CategoryHeaderProps {
  name: string;
  description?: string;
  slug: string;
  articlesCount: number;
}

export function CategoryHeader({ name, description, slug, articlesCount }: CategoryHeaderProps) {
  const categoryColors = getCategoryColors(slug);

  return (
    <section
      className={`bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-b border-border ${categoryColors.bg}/20`}
    >
      <div className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-4">
          <TrendingUp className={`h-6 w-6 ${categoryColors.primaryText}`} />
          <Badge
            variant="outline"
            className={`bg-background/50 border-current ${categoryColors.primaryText}`}
          >
            دسته‌بندی
          </Badge>
        </div>
        <p
          className={`news-heading text-5xl md:text-6xl mb-6 ${categoryColors.primaryText}`}
        >
          {name}
        </p>
        {description && (
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
        )}
        <div className="flex items-center justify-center gap-4">
          <Badge
            variant="secondary"
            className={`px-4 py-2 ${getCategoryBadgeClasses(slug)}`}
          >
            {articlesCount} مقاله موجود
          </Badge>
        </div>
      </div>
    </section>
  );
}
