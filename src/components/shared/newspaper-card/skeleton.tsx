"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function NewspaperCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl overflow-hidden border border-gray-100 bg-white h-80 w-full">
      <div className="h-60 w-full">
        <Skeleton className="h-full w-full rounded-t-2xl" />
      </div>
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-3 w-20 rounded" />
      </div>
    </div>
  );
}
