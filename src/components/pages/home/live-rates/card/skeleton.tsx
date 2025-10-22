"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LiveStatCardSkeleton() {
  return (
    <Card className="relative p-3 rounded-xl overflow-hidden border border-transparent bg-gradient-to-br from-background via-background/80 to-background/50 shadow-sm">
      {/* Soft accent ring */}
      <div className="absolute inset-0 rounded-xl opacity-10 blur-2xl bg-skeleton-bg" />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-skeleton-bg">
            <Skeleton className="w-5 h-5 rounded-full" />
          </div>
          <Skeleton className="h-4 w-20 rounded-2xl" />
        </div>

        <div className="text-xs font-semibold rounded-full px-2.5 py-1.5 flex items-center gap-1.5 bg-skeleton-bg">
          <Skeleton className="w-2 h-2 rounded-full" />
          <Skeleton className="h-3 w-10 rounded-2xl" />
        </div>
      </div>

      {/* Value + Change */}
      <div className="relative mt-4 flex flex-col items-end space-y-1">
        <Skeleton className="h-6 w-20 rounded-2xl" />
        <Skeleton className="h-4 w-12 rounded-2xl" />
      </div>
    </Card>
  );
}
