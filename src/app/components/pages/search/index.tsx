"use client";

import { useMemo } from "react";
import { Badge } from "@/app/components/ui/badge";
import { Search } from "lucide-react";
import Link from "next/link";
import { ArticleCard } from "@/app/components/shared/article-card";
import Container from "../../shared/container";
import { routes } from "@/app/routes/routes";
import { useQueryParams } from "@/app/hooks/useQueryParams";
import { useNewsFeed } from "../news-list/hooks/useNewsFeed";
import { SearchPageFilter } from "./filter";
import { Button } from "../../ui/button";

export default function SearchPageContent() {
  const { getParam, setParam } = useQueryParams();
  const query = getParam("query") || "";

  // --- Filters from query params ---
  const category = getParam("category") || "همه";
  const dateFilter =
    (getParam("date") as "all" | "today" | "week" | "month") || "all";
  const sort = getParam("sort") || "latest";

  const filters = useMemo(
    () => ({ search: query, category, dateFilter, sort }),
    [query, category, dateFilter, sort]
  );

  const { articles: filteredArticles, total } = useNewsFeed(filters);

  return (
    <>
      {/* Header / Banner */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-b border-border">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Search className="h-6 w-6 text-primary" />
              <Badge
                variant="outline"
                className="bg-background/50 text-primary border-primary/20"
              >
                نتایج جستجو
              </Badge>
            </div>
            <p className="text-4xl md:text-5xl mb-6 text-foreground">
              {query ? `نتایج برای "${query}"` : "جستجوی اخبار"}
            </p>
            {query && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {total} مقاله یافت شد که با جستجوی شما مطابقت دارد
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Filters */}
      {query && (
        <Container>
          <SearchPageFilter
            category={category}
            setCategory={(val) => setParam("category", val)}
            dateFilter={dateFilter}
            setDateFilter={(val) => setParam("date", val)}
            sort={sort}
            setSort={(val) => setParam("sort", val)}
          />
        </Container>
      )}

      {/* Results */}
      <Container>
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                highlightQuery={query}
              />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-2xl mb-3">موردی یافت نشد</p>
              <p className="text-muted-foreground mb-6">
                هیچ مقاله‌ای مطابق با &quot;{query}&quot; پیدا نشد. از
                کلیدواژه‌های متفاوت استفاده کنید یا دسته‌بندی‌ها را مرور کنید.
              </p>
              <Link href={routes.home.getHref()}>
                <Button className="bg-primary hover:bg-primary/90">
                  مشاهده تمام اخبار
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
              <p className="text-2xl mb-3">جستجوی خود را آغاز کنید</p>
              <p className="text-muted-foreground">
                از نوار جستجو در بالا برای پیدا کردن مقالات و موضوعات استفاده
                کنید یا بر اساس دسته‌بندی مرور کنید.
              </p>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
