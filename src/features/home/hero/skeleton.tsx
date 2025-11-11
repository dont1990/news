"use client";

import Container from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <Container className="grid lg:grid-cols-12 gap-6 items-center max-md:grid-cols-1 animate-pulse">
      <div className="lg:col-span-7 flex gap-3 h-[500px] overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl bg-muted/40 transition-all duration-700 ${
              i === 0 ? "flex-[3]" : "flex-[0.7]"
            }`}
          >
            <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
            {i === 0 && (
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-3">
                <Skeleton className="w-20 h-6 rounded-xl bg-skeleton-bg/70" />
                <Skeleton className="w-full h-5 rounded-xl bg-skeleton-bg/50" />
                <Skeleton className="w-3/4 h-5 rounded-xl bg-skeleton-bg/50" />
              </div>
            )}
          </div>
        ))}
      </div>{" "}
      <div className="lg:col-span-5 flex flex-col justify-center gap-6 xl:gap-10 text-right">
        {/* Category Badge */}
        <Skeleton className="w-24 h-6 rounded-2xl bg-skeleton-bg/80" />

        {/* Title */}
        <div className="flex flex-col gap-3">
          <Skeleton className="h-7 w-4/5 rounded-2xl bg-skeleton-bg/70" />
          <Skeleton className="h-7 w-2/3 rounded-2xl bg-skeleton-bg/70" />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full rounded-2xl bg-skeleton-bg/60" />
          <Skeleton className="h-4 w-5/6 rounded-2xl bg-skeleton-bg/60" />
          <Skeleton className="h-4 w-4/6 rounded-2xl bg-skeleton-bg/60" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Skeleton className="h-10 w-32 rounded-xl bg-skeleton-bg/70" />
          <Skeleton className="h-10 w-10 rounded-xl bg-skeleton-bg/70" />
          <Skeleton className="h-10 w-10 rounded-xl bg-skeleton-bg/70" />
        </div>

        <Separator />

        {/* Meta Info */}
        <div className="flex flex-wrap justify-end items-center gap-4">
          <Skeleton className="h-4 w-20 rounded-2xl bg-skeleton-bg/60" />
          <Skeleton className="h-4 w-10 rounded-2xl bg-skeleton-bg/60" />
          <Skeleton className="h-4 w-16 rounded-2xl bg-skeleton-bg/60" />
        </div>
      </div>{" "}
    </Container>
  );
}
