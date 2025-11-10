"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Container from "../../components/shared/container";

export default function ArticleDetailSkeleton() {
  return (
    <Container>
      <div className="space-y-8">
        {/* Category + Source */}
        <div className="flex items-center gap-3 mb-6">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Title */}
        <Skeleton className="h-10 w-3/4" />
        {/* Description */}
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />

        {/* Meta Info */}
        <div className="flex gap-6 mb-8">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Skeleton className="h-9 w-24 rounded-md" />
          <Skeleton className="h-9 w-24 rounded-md" />
        </div>

        {/* Hero Image */}
        <Skeleton className="h-96 w-full rounded-2xl" />

        {/* Content */}
        <div className="space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-2/3" />
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 mt-8">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Related */}
        <div className="mt-8">
          <Skeleton className="h-6 w-32 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </Container>
  );
}
