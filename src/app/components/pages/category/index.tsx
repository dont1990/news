"use client";

import { use, useState, useMemo } from "react";
import { useCategoryArticles } from "./hooks/useCategoryArticles";
import { CategoryHeader } from "./category-header";
import { CategoryContent } from "./content";
import CategorySkeleton from "./skeleton";
import Container from "../../shared/container";
import { Article } from "@/app/types/types";
import { TrendingSidebar } from "./content/trending-sidebar";
import { FeaturedArticle } from "./content/featured-article";
import { CategoryControls } from "./content/category-controls";

export const categoryDescriptions = {
  /* ...same as before... */
} as const;

export function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams =
    params && typeof params === "object" && "then" in params
      ? use(params)
      : (params as { slug: string });
  const slug = resolvedParams.slug.toLowerCase();

  const { articles: categoryArticles, loading } = useCategoryArticles(slug);

  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState<
    "all" | "today" | "week" | "month"
  >("all");
  const [sort, setSort] = useState("latest");

  const categoryName =
    slug === "all"
      ? "همه مقالات"
      : resolvedParams.slug.charAt(0).toUpperCase() +
        resolvedParams.slug.slice(1);
  const categoryDescription =
    categoryDescriptions[slug as keyof typeof categoryDescriptions];

  // ✅ Filtering + search + sorting logic
  const filteredArticles = useMemo(() => {
    let data: Article[] = [...categoryArticles];

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description?.toLowerCase().includes(q)
      );
    }

    // Date filter
    const now = new Date();
    if (dateFilter !== "all") {
      data = data.filter((a) => {
        const articleDate = new Date(a.publishedAt);
        const diffDays =
          (now.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24);
        if (dateFilter === "today") return diffDays < 1;
        if (dateFilter === "week") return diffDays < 7;
        if (dateFilter === "month") return diffDays < 30;
        return true;
      });
    }


    // flag - change
    // Sorting
    if (sort === "latest") {
      data = data.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } else if (sort === "popular") {
      data = data.sort(
        (a, b) =>
          (new Date(b.publishedAt).getTime() || 0) -
          (new Date(a.publishedAt) || 0).getTime()
      );
    } else if (sort === "commented") {
      data = data.sort(
        (a, b) =>
          (new Date(b.publishedAt).getTime() || 0) -
          (new Date(a.publishedAt) || 0).getTime()
      );
    }

    return data;
  }, [categoryArticles, search, dateFilter, sort]);

  const featuredArticle = filteredArticles[0];
  const restArticles = filteredArticles.slice(1);

  if (loading) return <CategorySkeleton />;

  return (
    <>
      <CategoryHeader
        name={categoryName}
        description={categoryDescription}
        slug={slug}
        articlesCount={categoryArticles.length}
      />
      <Container>
        {/* Unified search + filter + sort controls */}
        <CategoryControls
          search={search}
          setSearch={setSearch}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          sort={sort}
          setSort={setSort}
        />

        {/* Featured article */}
        {featuredArticle && <FeaturedArticle article={featuredArticle} />}

        {/* Articles + sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="flex-1">
            <CategoryContent
              articles={restArticles}
              slug={slug}
              categoryName={categoryName}
            />
          </div>
          <aside className="w-full lg:w-80">
            <TrendingSidebar articles={categoryArticles} />
          </aside>
        </div>
      </Container>
    </>
  );
}
