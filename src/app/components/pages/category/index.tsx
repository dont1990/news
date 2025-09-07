"use client";

import { use, useMemo, useState } from "react";
import { CategoryBanner } from "./banner";
import Container from "../../shared/container";
import { CategoryControls } from "./content/category-controls";
import { TrendingSidebar } from "./content/trending-sidebar";
import { useCategoryArticles } from "./hooks/useCategoryArticles";
import CategorySkeleton from "./skeleton";
import { CategoryContent } from "./content"; // merged wrapper + content

export const categoryDescriptions = {
  world:
    "با آخرین اخبار جهانی، رویدادهای بین‌المللی و تغییرات جهان به‌روز بمانید.",
  politics:
    "تحولات سیاسی، انتخابات، تغییرات سیاست‌ها و امور دولت‌ها در سراسر جهان را دنبال کنید.",
  business:
    "با روندهای بازار، اخبار شرکت‌ها، شاخص‌های اقتصادی و تحولات مالی آشنا شوید.",
  technology:
    "آخرین نوآوری‌ها در فناوری، تحول دیجیتال و تکنولوژی‌های نوظهور را کشف کنید.",
  science:
    "با دستاوردهای علمی، یافته‌های پژوهشی و اکتشافاتی که دانش بشر را پیش می‌برند آشنا شوید.",
  health:
    "با پیشرفت‌های پزشکی، روندهای سلامت و اطلاعات رفاه و بهداشت به‌روز بمانید.",
  sports: "تیم‌ها، ورزشکاران و رویدادهای ورزشی مورد علاقه خود را دنبال کنید.",
  entertainment:
    "آخرین اخبار فیلم، موسیقی، سلبریتی‌ها و صنعت سرگرمی را دریافت کنید.",
  all: "مروری بر همه مقالات موجود در سایت، بدون محدودیت دسته‌بندی.",
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

  // 👇 manual search states
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const [dateFilter, setDateFilter] = useState<
    "all" | "today" | "week" | "month"
  >("all");
  const [sort, setSort] = useState("latest");

  const queryParams = useMemo(
    () => ({ search, dateFilter, sort }),
    [search, dateFilter, sort]
  );

  const { articles, loading, ref, isFetchingNextPage, total } =
    useCategoryArticles(slug, queryParams);

  const categoryName = slug === "all" ? "همه مقالات" : resolvedParams.slug;
  const categoryDescription =
    categoryDescriptions[slug as keyof typeof categoryDescriptions];

  return (
    <>
      <CategoryBanner
        name={categoryName}
        description={categoryDescription}
        slug={slug}
        articlesCount={total}
        loading={loading}
      />
      <Container>
        <CategoryControls
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearch={() => setSearch(searchInput)} // 🔍 trigger manual search
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          sort={sort}
          setSort={setSort}
        />
        {loading ? (
          <CategorySkeleton />
        ) : (
          <>
            <div className="flex gap-4 flex-col lg:flex-row">
              <CategoryContent
                articles={articles}
                slug={slug}
                categoryName={categoryName}
                query={search}
                infiniteScrollRef={ref}
                isFetchingNextPage={isFetchingNextPage}
              />

              <TrendingSidebar articles={articles} />
            </div>
          </>
        )}
      </Container>
    </>
  );
}
