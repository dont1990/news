"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { routes } from "@/routes/routes";
import SearchIcon from "@/assets/shared-icons/search";

type Props = {
  query: string;
};

export function SearchPageEmpty({ query }: Props) {
  if (!query) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <SearchIcon className="h-12 w-12 text-primary" />
          </div>
          <p className="text-2xl mb-3">جستجوی خود را آغاز کنید</p>
          <p className="text-muted-foreground">
            از نوار جستجو در بالا برای پیدا کردن مقالات و موضوعات استفاده کنید
            یا بر اساس دسته‌بندی مرور کنید.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-4">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <SearchIcon className="h-12 w-12 text-muted-foreground" />
        </div>
        <p className="text-2xl mb-3">موردی یافت نشد</p>
        <p className="text-muted-foreground mb-6">
          هیچ مقاله‌ای مطابق با &quot;{query}&quot; پیدا نشد. از کلیدواژه‌های
          متفاوت استفاده کنید یا دسته‌بندی‌ها را مرور کنید.
        </p>
        <Link href={routes.news.getHref()}>
          <Button className="bg-primary hover:bg-primary/90">
            مشاهده تمام اخبار
          </Button>
        </Link>
      </div>
    </div>
  );
}
