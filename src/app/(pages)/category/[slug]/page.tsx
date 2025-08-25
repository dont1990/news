"use client";

import { use } from "react";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Clock, User, TrendingUp } from "lucide-react";
import Link from "next/link";
import {
  getCategoryColors,
  getCategoryBadgeClasses,
} from "@/app/lib/category-colors";
import { mockArticles } from "@/app/data/mock-article";
import { ArticleCard } from "@/app/components/article-card";

const categoryDescriptions = {
  world:
    "Stay informed with the latest global news, international affairs, and world events shaping our planet.",
  politics:
    "Follow political developments, elections, policy changes, and government affairs from around the world.",
  business:
    "Get insights into market trends, corporate news, economic indicators, and financial developments.",
  technology:
    "Discover the latest in tech innovation, digital transformation, and emerging technologies.",
  science:
    "Explore scientific breakthroughs, research findings, and discoveries that advance human knowledge.",
  health:
    "Stay updated on medical advances, health trends, and wellness information that matters to you.",
  sports:
    "Follow your favorite teams, athletes, and sporting events with comprehensive sports coverage.",
  entertainment:
    "Get the latest on movies, music, celebrities, and entertainment industry news.",
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams =
    params && typeof params === "object" && "then" in params
      ? use(params)
      : (params as { slug: string });
  const { slug } = resolvedParams;

  // Filter articles by category
  const categoryArticles = mockArticles.filter(
    (article) => article.category.toLowerCase() === slug.toLowerCase()
  );

  // Capitalize category name for display
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const categoryDescription =
    categoryDescriptions[
      slug.toLowerCase() as keyof typeof categoryDescriptions
    ];

  const categoryColors = getCategoryColors(slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section
        className={`bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-b border-border ${categoryColors.bg}/20`}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className={`h-6 w-6 ${categoryColors.primaryText}`} />
              <Badge
                variant="outline"
                className={`bg-background/50 border-current ${categoryColors.primaryText}`}
              >
                Category
              </Badge>
            </div>
            <h1
              className={`news-heading text-5xl md:text-6xl mb-6 ${categoryColors.primaryText}`}
            >
              {categoryName}
            </h1>
            {categoryDescription && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {categoryDescription}
              </p>
            )}
            <div className="flex items-center justify-center gap-4">
              <Badge
                variant="secondary"
                className={`px-4 py-2 ${getCategoryBadgeClasses(slug)}`}
              >
                {categoryArticles.length} articles available
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${categoryColors.bg}`}
              >
                <TrendingUp className={`h-12 w-12 ${categoryColors.text}`} />
              </div>
              <h2 className="news-heading text-2xl mb-3">No articles found</h2>
              <p className="text-muted-foreground">
                Check back later for new {categoryName.toLowerCase()} articles
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
