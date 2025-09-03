"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";

interface ArticleCardSkeletonProps {
  type?: "default" | "overlay" | "bottomOverlay" | "horizontal";
}

export function ArticleCardSkeleton({ type = "default" }: ArticleCardSkeletonProps) {
  const baseSkeleton = "bg-gray-200 dark:bg-gray-700";

  if (type === "horizontal") {
    return (
      <Card className="flex min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[170px] xl:min-h-[180px] overflow-hidden rounded-xl border border-white/10 animate-pulse p-0">
        <div className="flex w-full h-full">
          {/* Content */}
          <div className="w-2/3 p-3 sm:p-4 flex flex-col justify-between">
            <Skeleton className={`h-4 w-1/4 mb-2 rounded ${baseSkeleton}`} />
            <Skeleton className={`h-6 w-full mb-2 rounded ${baseSkeleton}`} />
            <Skeleton className={`h-4 w-1/2 rounded ${baseSkeleton}`} />
          </div>

          {/* Image */}
          <Skeleton className={`w-1/3 rounded-lg ${baseSkeleton}`} />
        </div>
      </Card>
    );
  }

  if (type === "overlay") {
    return (
      <Card className="relative h-80 overflow-hidden rounded-2xl animate-pulse">
        <Skeleton className={`absolute inset-0 w-full h-full ${baseSkeleton}`} />
        <CardContent className="relative z-10 flex flex-col justify-end p-4 h-full">
          <Skeleton className={`h-4 w-1/4 mb-2 rounded bg-gray-300`} />
          <Skeleton className={`h-6 w-3/4 mb-2 rounded bg-gray-300`} />
          <Skeleton className={`h-4 w-full rounded bg-gray-300`} />
        </CardContent>
      </Card>
    );
  }

  if (type === "bottomOverlay") {
    return (
      <Card className="relative h-80 rounded-2xl animate-pulse p-0">
        <Skeleton className={`w-full h-full rounded-2xl ${baseSkeleton}`} />
        <CardContent className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[85%] p-4 rounded-xl flex flex-col gap-2 text-center bg-gray-300 min-h-36">
          <Skeleton className={`h-4 w-1/4 mx-auto rounded ${baseSkeleton}`} />
          <Skeleton className={`h-5 w-3/4 mx-auto rounded ${baseSkeleton}`} />
          <Skeleton className={`h-4 w-full mx-auto rounded ${baseSkeleton}`} />
        </CardContent>
      </Card>
    );
  }

  // Default vertical card
  return (
    <Card className="animate-pulse h-full flex flex-col gap-2 p-0">
      <Skeleton className={`h-80 w-full rounded-t-lg ${baseSkeleton}`} />
      <CardContent className="flex flex-col flex-1 justify-between gap-2 p-6">
        <Skeleton className={`h-4 w-1/4 rounded ${baseSkeleton}`} />
        <Skeleton className={`h-6 w-full rounded ${baseSkeleton}`} />
        <Skeleton className={`h-4 w-full rounded ${baseSkeleton}`} />
        <div className="flex justify-between mt-auto pt-4 border-t border-border">
          <Skeleton className={`h-4 w-1/4 rounded ${baseSkeleton}`} />
          <Skeleton className={`h-4 w-10 rounded ${baseSkeleton}`} />
        </div>
      </CardContent>
    </Card>
  );
}
