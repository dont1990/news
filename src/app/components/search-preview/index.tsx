"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, TrendingUp, Clock } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { getCategoryBadgeClasses } from "@/app/lib/category-colors";

const mockArticles = [
  {
    id: "1",
    title: "Breaking: Major Climate Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite on unprecedented climate action plan that could reshape global environmental policy for decades to come.",
    category: "Environment",
    imageUrl: "/climate-summit-leaders.png",
    source: "Global News Network",
    sourceUrl: "https://globalnews.com",
    publishedAt: "2 hours ago",
    readTime: "3 min read",
  },
  {
    id: "2",
    title: "Tech Giants Announce New AI Safety Standards",
    excerpt:
      "Leading technology companies collaborate on establishing industry-wide artificial intelligence safety protocols.",
    category: "Technology",
    imageUrl: "/ai-technology-safety-meeting.png",
    source: "Tech Today",
    sourceUrl: "https://techtoday.com",
    publishedAt: "4 hours ago",
    readTime: "5 min read",
  },
  {
    id: "3",
    title: "Global Markets Show Strong Recovery Signs",
    excerpt:
      "International financial markets demonstrate resilience with positive growth indicators across major economies.",
    category: "Business",
    imageUrl: "/stock-market-trading-floor.png",
    source: "Financial Times",
    sourceUrl: "https://ft.com",
    publishedAt: "1 hour ago",
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Revolutionary Medical Breakthrough in Cancer Treatment",
    excerpt:
      "Scientists develop new immunotherapy approach showing remarkable success rates in clinical trials.",
    category: "Health",
    imageUrl: "/medical-research-lab.png",
    source: "Medical Journal",
    sourceUrl: "https://medjournal.com",
    publishedAt: "6 hours ago",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Space Mission Discovers Potential Signs of Life",
    excerpt:
      "NASA's latest Mars rover findings suggest possible microbial activity beneath the planet's surface.",
    category: "Science",
    imageUrl: "/mars-rover-space-exploration.png",
    source: "Space News",
    sourceUrl: "https://spacenews.com",
    publishedAt: "3 hours ago",
    readTime: "6 min read",
  },
];

interface SearchPreviewProps {
  className?: string;
}

export function SearchPreview({ className }: SearchPreviewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState<typeof mockArticles>(
    []
  );
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockArticles
        .filter(
          (article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5); // Increased to 5 results for better coverage
      setFilteredArticles(filtered);
      setIsOpen(true);
    } else {
      setFilteredArticles([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
    }
  };

  const handleArticleClick = () => {
    setIsOpen(false);
  };

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/category/${category.toLowerCase()}`);
    setIsOpen(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search breaking news, articles, topics..."
            className="pl-12 pr-12 h-12 w-80 bg-background/95 backdrop-blur-sm border-2 border-border hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.trim() && setIsOpen(true)}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-3 z-50 shadow-2xl border-2 border-border/50 backdrop-blur-sm bg-background/95 rounded-xl overflow-hidden">
          <CardContent className="p-0">
            {filteredArticles.length > 0 ? (
              <>
                <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {filteredArticles.length} result
                      {filteredArticles.length !== 1 ? "s" : ""} found
                    </span>
                  </div>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {filteredArticles.map((article, index) => (
                    <div
                      key={article.id}
                      onClick={() => {
                        router.push(`/article/${article.id}`);
                        handleArticleClick();
                      }}
                      className="hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-200 cursor-pointer border-b border-border/50 last:border-b-0 group"
                    >
                      <div className="p-5">
                        <div className="flex gap-4">
                          <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                            <img
                              src={article.imageUrl || "/placeholder.svg"}
                              alt={article.title}
                              className="w-20 h-16 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge
                                variant="secondary"
                                className={`cursor-pointer transition-all duration-200 text-xs px-2 py-1 ${getCategoryBadgeClasses(
                                  article.category
                                )}`}
                                onClick={(e) =>
                                  handleCategoryClick(e, article.category)
                                }
                              >
                                {article.category}
                              </Badge>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{article.publishedAt}</span>
                              </div>
                            </div>

                            <h4 className="font-semibold text-sm line-clamp-2 mb-2 leading-tight group-hover:text-primary transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {article.excerpt}
                            </p>

                            <div className="mt-2 text-xs text-muted-foreground font-medium">
                              {article.source} • {article.readTime}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 border-t border-border">
                  <button
                    onClick={handleSearch}
                    className="w-full text-center py-3 px-4 text-sm font-medium text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-200 rounded-lg border border-primary/20 hover:border-primary"
                  >
                    View all {filteredArticles.length} results →
                  </button>
                </div>
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">
                  No results found
                </p>
                <p className="text-xs text-muted-foreground">
                  Try different keywords or browse categories
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
