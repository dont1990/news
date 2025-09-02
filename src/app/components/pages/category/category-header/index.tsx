"use client";

import { Badge } from "@/app/components/ui/badge";
import { TrendingUp } from "lucide-react";
import {
  getCategoryColors,
  getCategoryBadgeClasses,
} from "@/app/lib/category-colors";
import Container from "@/app/components/shared/container";
import { categories } from "@/app/data/categories/categories";

interface CategoryHeaderProps {
  name: string;
  description?: string;
  slug: string;
  articlesCount: number;
}

export function CategoryHeader({
  name,
  description,
  slug,
  articlesCount,
}: CategoryHeaderProps) {
  const categoryColors = getCategoryColors(slug);

  const categoryName =
    categories.find((cat) => cat.english === name.toLocaleLowerCase())
      ?.persian || name;

  return (
    <section
      className={`bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-b border-border ${categoryColors.bg}/20`}
    >
      <Container className="text-center">
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
          className={`text-5xl md:text-6xl mb-6 ${categoryColors.primaryText}`}
        >
          {categoryName}
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
      </Container>
    </section>
  );
}
