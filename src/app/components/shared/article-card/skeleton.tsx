"use client";

import { Skeleton } from "@/app/components/ui/skeleton";

export function ArticleCardSkeleton() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-background rounded-lg shadow-sm overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <Skeleton className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-t-lg" />

      {/* Content skeleton mimicking flex-1 justify-between */}
      <div className="flex flex-col flex-1 justify-between p-6">
        {/* Top content */}
        <div className="space-y-2">
          <Skeleton className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
          <Skeleton className="w-full h-5 bg-gray-300 dark:bg-gray-600 rounded" />
          <Skeleton className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>

        {/* Footer placeholder always at bottom */}
        <div className="flex justify-between mt-4 border-t border-border pt-4">
          <Skeleton className="w-16 h-3 bg-gray-300 dark:bg-gray-600 rounded" />
          <Skeleton className="w-12 h-3 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
      </div>
    </div>
  );
}
