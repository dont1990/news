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

// Mock articles data with more variety for categories
const mockArticles = [
  {
    id: "1",
    title: "Breaking: Major Climate Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite on unprecedented climate action plan that could reshape global environmental policy for decades to come.",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15T10:30:00Z",
    category: "world",
    imageUrl: "/climate-summit-leaders.png",
    source: "Global News Network",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Tech Giants Announce New AI Safety Standards",
    excerpt:
      "Leading technology companies collaborate on establishing industry-wide artificial intelligence safety protocols.",
    author: "Michael Chen",
    publishedAt: "2024-01-15T09:15:00Z",
    category: "technology",
    imageUrl: "/ai-technology-safety-meeting.png",
    source: "Tech Today",
    readTime: "3 min read",
  },
  {
    id: "3",
    title: "Global Markets Show Strong Recovery Signs",
    excerpt:
      "International financial markets demonstrate resilience with positive growth indicators across major economies.",
    author: "Emma Rodriguez",
    publishedAt: "2024-01-15T08:45:00Z",
    category: "business",
    imageUrl: "/stock-market-trading-floor.png",
    source: "Financial Times",
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Revolutionary Medical Breakthrough in Cancer Treatment",
    excerpt:
      "Scientists develop new immunotherapy approach showing remarkable success rates in clinical trials.",
    author: "Dr. James Wilson",
    publishedAt: "2024-01-15T07:30:00Z",
    category: "health",
    imageUrl: "/medical-research-lab.png",
    source: "Medical Journal",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "Space Mission Discovers Potential Signs of Life",
    excerpt:
      "NASA's latest Mars rover findings suggest possible microbial activity beneath the planet's surface.",
    author: "Lisa Park",
    publishedAt: "2024-01-15T06:00:00Z",
    category: "science",
    imageUrl: "/mars-rover-space-exploration.png",
    source: "Space News",
    readTime: "4 min read",
  },
  {
    id: "6",
    title: "International Sports Championship Breaks Viewership Records",
    excerpt:
      "Global audience reaches unprecedented numbers as athletes compete in thrilling championship finals.",
    author: "Tom Anderson",
    publishedAt: "2024-01-15T05:15:00Z",
    category: "sports",
    imageUrl: "/sports-championship-stadium-crowd.png",
    source: "Sports Central",
    readTime: "2 min read",
  },
  {
    id: "7",
    title: "Election Results Shape New Political Landscape",
    excerpt:
      "Voters across multiple regions deliver decisive outcomes that will influence policy direction for years to come.",
    author: "Rachel Green",
    publishedAt: "2024-01-14T22:30:00Z",
    category: "politics",
    imageUrl: "/election-voting-booth.png",
    source: "Political Weekly",
    readTime: "5 min read",
  },
  {
    id: "8",
    title: "Hollywood Blockbuster Breaks Opening Weekend Records",
    excerpt:
      "Latest superhero film shatters box office expectations with unprecedented global audience turnout.",
    author: "David Kim",
    publishedAt: "2024-01-14T20:15:00Z",
    category: "entertainment",
    imageUrl: "/classic-movie-theater.png",
    source: "Entertainment Today",
    readTime: "3 min read",
  },
];

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
    (article) => article.category === slug.toLowerCase()
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
            {categoryArticles.map((article, index) => (
              <Link key={article.id} href={`/article/${article.id}`}>
                <Card
                  className={`news-card group h-full ${
                    index === 0 ? "md:col-span-2 xl:col-span-1" : ""
                  }`}
                >
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge
                        variant="secondary"
                        className={`text-xs px-2 py-1 ${getCategoryBadgeClasses(
                          article.category
                        )}`}
                      >
                        {categoryName}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-medium">
                        {article.source}
                      </span>
                    </div>

                    <h3
                      className={`news-heading text-xl mb-3 line-clamp-2 group-hover:${categoryColors.primaryText} transition-colors`}
                    >
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <User
                          className={`h-3 w-3 ${categoryColors.primaryText}`}
                        />
                        <span className="font-medium">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock
                          className={`h-3 w-3 ${categoryColors.primaryText}`}
                        />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
