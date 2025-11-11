"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/shared/container";
import FlashIcon from "./assets/flash";

export function BreakingNewsSkeleton() {
  return (
    <div
      className="relative bg-red-600 py-3 sm:py-4 overflow-hidden rounded-2xl p-4"
      dir="rtl"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>

      <Container className="relative !p-0">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            {/* badge */}
            <div className="relative shrink-0">
              <span className="bg-white text-red-600 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-1 shadow-lg">
                <FlashIcon className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                <span>فوری</span>
              </span>
              <div className="absolute -inset-1 bg-white/40 rounded-full blur-md"></div>
            </div>

            {/* news text skeleton */}
            <div className="flex-1 overflow-hidden">
              <Skeleton className="h-4 sm:h-5 w-[70%] bg-white/40 rounded-md" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
