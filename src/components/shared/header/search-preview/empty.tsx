"use client";

import SearchIcon from "@/assets/shared-icons/search";

export function SearchEmptyState() {
  return (
    <div className="p-8 text-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
        <SearchIcon className="h-8 w-8 text-muted-foreground" />
      </div>
      <p className="text-sm font-medium text-foreground mb-2">
        نتیجه ای یافت نشد
      </p>
      <p className="text-xs text-muted-foreground">
        کلمات کلیدی دیگر را امتحان کنید یا دسته‌بندی‌ها را مرور کنید
      </p>
    </div>
  );
}
