"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Search, Filter, SortAsc } from "lucide-react";
import Link from "next/link";
import { ArticleCard } from "@/app/components/article-card";
import { mockArticles } from "@/app/data/mock-article";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredArticles, setFilteredArticles] = useState(mockArticles);

  useEffect(() => {
    if (query) {
      const filtered = mockArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          article.category.toLowerCase().includes(query.toLowerCase()) ||
          article.author.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(mockArticles);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Search className="h-6 w-6 text-primary" />
              <Badge
                variant="outline"
                className="bg-background/50 text-primary border-primary/20"
              >
                Search Results
              </Badge>
            </div>
            <h1 className="news-heading text-4xl md:text-5xl mb-6 text-foreground">
              {query ? `Results for "${query}"` : "Search News"}
            </h1>
            {query && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Found {filteredArticles.length} article
                {filteredArticles.length !== 1 ? "s" : ""} matching your search
              </p>
            )}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {query && (
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent"
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent"
              >
                <SortAsc className="h-4 w-4" />
                Sort by Date
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {filteredArticles.length} of {mockArticles.length} articles
            </p>
          </div>
        )}

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="news-heading text-2xl mb-3">No results found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn&apos;t find any articles matching &quot;{query}&quot;.
                Try different keywords or browse our categories.
              </p>
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90">
                  Browse All News
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-primary" />
              </div>
              <h2 className="news-heading text-2xl mb-3">Start Your Search</h2>
              <p className="text-muted-foreground">
                Use the search bar above to find articles, topics, or browse by
                category.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
