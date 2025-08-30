"use client";

import { use } from "react";
import { useCategoryArticles } from "./hooks/useCategoryArticles";
import { CategoryHeader } from "./category-header";
import { CategoryContent } from "./content";
import { CategoryHeaderSkeleton } from "./category-header/skeleton";
import { ArticleCardSkeleton } from "../../shared/article-card/skeleton";
import CategorySkeleton from "./skeleton";

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

  const { articles: categoryArticles, loading } = useCategoryArticles(slug);

  const categoryName =
    slug === "all"
      ? "همه مقالات"
      : resolvedParams.slug.charAt(0).toUpperCase() +
        resolvedParams.slug.slice(1);
  const categoryDescription =
    categoryDescriptions[slug as keyof typeof categoryDescriptions];

  if (loading) {
    return <CategorySkeleton />;
  }

  return (
    <>
      <CategoryHeader
        name={categoryName}
        description={categoryDescription}
        slug={slug}
        articlesCount={categoryArticles.length}
      />
      <section className="container mx-auto px-4 py-12">
        <CategoryContent
          articles={categoryArticles}
          slug={slug}
          categoryName={categoryName}
        />
      </section>
    </>
  );
}
