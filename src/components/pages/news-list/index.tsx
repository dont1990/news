"use client";

import { useMemo, useState } from "react";
import Container from "../../shared/container";
import { TrendingSidebar } from "./trending-sidebar";
import { NewsListArticles } from "./articles";
import { NewsListFilter } from "./filter";
import { useNewsFeed } from "./hooks/useNewsFeed";
import NewsListSkeleton from "./skeleton";
import { categories } from "@/data/categories/categories";
import { useTrendingNews } from "./hooks/useTrendingNews";
import { useQueryParams } from "@/hooks/useQueryParams";
import { PageHeader } from "../../shared/page-header";
import TrendingUpIcon from "@/assets/shared-icons/trending-up";

export function NewsListPage() {
  const { getParam, setParam } = useQueryParams();

  // --- Query-param-driven state ---
  const category = getParam("category") || "همه";
  const search = getParam("search") || "";
  const dateFilter =
    (getParam("date") as "all" | "today" | "week" | "month") || "all";
  const sort = getParam("sort") || "latest";
  const tags = (getParam("tags")?.split(",") || []).filter(Boolean);

  // For controlled search input (not yet applied to URL)
  const [searchInput, setSearchInput] = useState(search);

  // --- Filters object for fetching ---
  const filters = useMemo(
    () => ({ category, search, dateFilter, sort, tags }),
    [category, search, dateFilter, sort, tags]
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
      <PageHeader
        title={categoryName}
        subtitle={categoryDescription}
        badgeText="مقاله موجود"
        badgeCount={total}
        loading={loading}
        category={category}
        icon={<TrendingUpIcon />}
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
          tags={tags} // ✅ pass tags array
          setTags={
            (newTags) =>
              setParam("tags", newTags.length ? newTags.join(",") : null) // ✅ use null instead of undefined
          }
        />

        {loading ? (
          <NewsListSkeleton />
        ) : (
          <div className="flex gap-4 flex-col lg:flex-row">
            <NewsListArticles
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
