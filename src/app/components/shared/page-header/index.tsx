"use client";

import React from "react";
import Container from "@/app/components/shared/container";
import { Badge } from "@/app/components/ui/badge";
import { InfiniteLoader } from "@/app/components/shared/infinite-loader";
import {
  getCategoryColors,
  getCategoryBadgeClasses,
} from "@/app/lib/category-colors";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badgeText?: string;
  badgeCount?: number;
  loading?: boolean;
  category?: string;
}

export function PageHeader({
  title,
  subtitle,
  icon,
  badgeText,
  badgeCount,
  loading = false,
  category,
}: PageHeaderProps) {
  const categoryColors = category
    ? getCategoryColors(category)
    : { bg: "bg-primary", primaryText: "text-primary" };
  const badgeClasses = category ? getCategoryBadgeClasses(category) : "";

  return (
    <section
      className={`bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-b border-border ${categoryColors.bg}/20`}
    >
      <Container className="text-center flex flex-col gap-2">
        {icon && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`${categoryColors.primaryText}`}>{icon}</div>
            {badgeText && (
              <Badge
                variant="outline"
                className={`bg-background/50 border-current ${categoryColors.primaryText}`}
              >
                {badgeText}
              </Badge>
            )}
          </div>
        )}

        <p
          className={`text-4xl md:text-5xl mb-4 font-medium ${categoryColors.primaryText}`}
        >
          {title}
        </p>

        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {badgeCount !== undefined && badgeText && (
          <div className="flex items-center justify-center gap-4">
            <Badge variant="primary" className={`px-4 py-2 ${badgeClasses}`}>
              {loading ? <InfiniteLoader iconSize={3} /> : badgeCount}{" "}
              {badgeText}
            </Badge>
          </div>
        )}
      </Container>
    </section>
  );
}
