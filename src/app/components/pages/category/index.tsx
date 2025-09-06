"use client";

import { use, useMemo, useState } from "react";
import { CategoryBanner } from "./banner";
import Container from "../../shared/container";
import { CategoryControls } from "./content/category-controls";
import { TrendingSidebar } from "./content/trending-sidebar";
import { useCategoryArticles } from "./hooks/useCategoryArticles";
import { CategoryContentWrapper } from "./content/wrapper";
import { useDebounce } from "@/app/hooks/useDebounce";

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

  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState<
    "all" | "today" | "week" | "month"
  >("all");
  const [sort, setSort] = useState("latest");

  const debouncedSearch = useDebounce(search, 1000);

  const { articles, loading, ref } = useCategoryArticles(slug, {
    search: debouncedSearch,
    dateFilter,
    sort,
  });

  const categoryName =
    slug === "all"
      ? "همه مقالات"
      : resolvedParams.slug.charAt(0).toUpperCase() +
        resolvedParams.slug.slice(1);
  const categoryDescription =
    categoryDescriptions[slug as keyof typeof categoryDescriptions];

  const stableArticles = useMemo(() => articles, [articles]);

  if (loading) return <div>Loading...</div>; // or <CategorySkeleton />

  return (
    <>
      <CategoryBanner
        name={categoryName}
        description={categoryDescription}
        slug={slug}
        articlesCount={articles.length}
      />
      <Container>
        <CategoryControls
          search={search}
          setSearch={setSearch}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          sort={sort}
          setSort={setSort}
        />

        <CategoryContentWrapper
          articles={stableArticles}
          slug={slug}
          categoryName={categoryName}
          infiniteScrollRef={ref}
          query={search}
        />

        <aside className="w-full lg:w-80 mt-8 lg:mt-0">
          <TrendingSidebar articles={articles} />
        </aside>
      </Container>
    </>
  );
}
