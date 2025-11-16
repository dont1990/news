"use client";

import React from "react";
import Container from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { getCategoryColors } from "@/lib/category-colors";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badgeText?: string;
  badgeCount?: number;
  category?: string;
}

export function PageHeader({
  title,
  subtitle,
  icon,
  badgeText,
  badgeCount,
  category,
}: PageHeaderProps) {
  const categoryColors = category
    ? getCategoryColors(category)
    : { bg: "bg-primary", primaryText: "text-primary" };

  return (
    <section
      className={`bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-b border-border ${categoryColors.bg}/20`}
    >
      <Container className="text-center flex flex-col gap-2">
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

        {icon && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`${categoryColors.primaryText}`}>{icon}</div>
            {badgeText && (
              <Badge
                className={`bg-background/50 border-current text-sm ${categoryColors.primaryText}`}
              >
                {badgeCount}
                <span>{badgeText}</span>
              </Badge>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
