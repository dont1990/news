"use client";

import EmptyState from "@/components/shared/empty-state";
import SearchIcon from "@/assets/shared-icons/search";
import { routes } from "@/routes/routes";

type Props = {
  query: string;
};

export function SearchPageEmpty({ query }: Props) {
  if (!query) {
    // State before user starts searching
    return (
      <EmptyState
        icon={<SearchIcon className="h-12 w-12 text-primary" />}
        iconBgClass="bg-primary/10"
        title="جستجوی خود را آغاز کنید"
        description="از نوار جستجو در بالا برای پیدا کردن مقالات و موضوعات استفاده کنید یا بر اساس دسته‌بندی مرور کنید."
        className="max-w-md mx-auto"
      />
    );
  }

  // State when no search results found
  return (
    <EmptyState
      icon={<SearchIcon className="h-12 w-12 text-muted-foreground" />}
      iconBgClass="bg-muted"
      title="موردی یافت نشد"
      description={`هیچ مقاله‌ای مطابق با "${query}" پیدا نشد. از کلیدواژه‌های متفاوت استفاده کنید یا دسته‌بندی‌ها را مرور کنید.`}
      action={{
        label: "مشاهده تمام اخبار",
        onClick: () => (window.location.href = routes.news.getHref()),
      }}
      className="max-w-md mx-auto"
    />
  );
}
