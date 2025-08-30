"use client";

import { Skeleton } from "@/app/components/ui/skeleton";

export function CategoryHeaderSkeleton() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-b border-border/20">
      <div className="container mx-auto px-4 py-16 text-center max-w-4xl">
        {/* Icon + "دسته‌بندی" badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Skeleton className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-6 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Category name */}
        <Skeleton className="mx-auto h-12 md:h-16 w-48 md:w-64 mb-6 rounded-lg bg-gray-300 dark:bg-gray-600" />

        {/* Description */}
        <Skeleton className="mx-auto h-6 w-80 md:w-96 mb-6 rounded-lg bg-gray-300 dark:bg-gray-600" />

        {/* Articles count badge */}
        <div className="flex items-center justify-center gap-4">
          <Skeleton className="h-6 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>
      </div>
    </section>
  );
}
