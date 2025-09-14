"use client";

import { useMemo, useState } from "react";
import { CategoryBanner } from "./banner";
import Container from "../../shared/container";
import { TrendingSidebar } from "./content/trending-sidebar";
import { NewsListContent } from "./content";
import { NewsListFilter } from "./content/filter";
import { useNewsFeed } from "./hooks/useNewsFeed";
import NewsListSkeleton from "./skeleton";
import { categories } from "@/app/data/categories/categories";
import { useTrendingNews } from "./hooks/useTrendingNews";
import { useQueryParams } from "@/app/hooks/useQueryParams";

export function NewsListPage() {
  const { getParam, setParam } = useQueryParams();

  // --- Query-param-driven state ---
  const category = getParam("category") || "همه";
  const search = getParam("search") || "";
  const dateFilter =
    (getParam("date") as "all" | "today" | "week" | "month") || "all";
  const sort = getParam("sort") || "latest";

  // For controlled search input (not yet applied to URL)
  const [searchInput, setSearchInput] = useState(search);

  // --- Filters object for fetching ---
  const filters = useMemo(
    () => ({ category, search, dateFilter, sort }),
    [category, search, dateFilter, sort]
  );

  // --- Fetch news ---
  const { articles, loading, ref, isFetchingNextPage, total } =
    useNewsFeed(filters);

  // --- Fetch global trending (always) ---
  const { data: globalTrending } = useTrendingNews(5);

  // --- Category info ---
  const categoryObj = categories.find((c) => c.title === category);
  const categoryName =
    category === "همه" ? "همه" : categoryObj?.title || category;
  const categoryDescription =
    category === "همه"
      ? "مروری بر همه مقالات موجود در سایت، بدون محدودیت دسته‌بندی."
      : categoryObj?.description;

  // --- Hybrid trending logic ---
  const trendingArticles =
    category === "همه" ? globalTrending || [] : articles.slice(0, 5);

  return (
    <>
      <CategoryBanner
        name={categoryName}
        description={categoryDescription}
        category={category}
        articlesCount={total}
        loading={loading}
      />
      <Container>
        <NewsListFilter
          category={category}
          setCategory={(val) => setParam("category", val)}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearch={(value?: string) =>
            setParam("search", value ?? searchInput)
          }
          dateFilter={dateFilter}
          setDateFilter={(val) => setParam("date", val)}
          sort={sort}
          setSort={(val) => setParam("sort", val)}
        />

        {loading ? (
          <NewsListSkeleton />
        ) : (
          <div className="flex gap-4 flex-col lg:flex-row">
            <NewsListContent
              articles={articles}
              category={category}
              categoryName={categoryName}
              query={search}
              infiniteScrollRef={ref}
              isFetchingNextPage={isFetchingNextPage}
            />
            <TrendingSidebar articles={trendingArticles} />
          </div>
        )}
      </Container>
    </>
  );
}
