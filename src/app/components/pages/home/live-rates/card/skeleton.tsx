"use client";

import { Card } from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";

export default function LiveStatCardSkeleton() {
  const baseSkeleton = "bg-gray-200 dark:bg-gray-700"; // same as ArticleCardSkeleton

  return (
    <Card
      className={`relative p-4 pb-8 border border-border/40 bg-gradient-to-br from-background to-muted animate-pulse`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Skeleton className={`w-6 h-6 rounded-lg ${baseSkeleton}`} />
        <Skeleton className={`h-4 w-12 rounded-lg ${baseSkeleton}`} />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Skeleton className={`h-4 w-2/3 rounded-lg ${baseSkeleton}`} />
        <Skeleton className={`h-6 w-1/2 rounded-lg ${baseSkeleton}`} />
      </div>

      {/* Badge */}
      <div className="absolute left-3 -bottom-4 w-20 h-6 rounded-full">
        <Skeleton className={`h-full w-full rounded-full ${baseSkeleton}`} />
      </div>
    </Card>
  );
}
