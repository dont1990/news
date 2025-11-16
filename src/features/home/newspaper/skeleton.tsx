"use client";

import NewspaperCard from "@/components/shared/newspaper-card";

interface INewspapersSwiperSkeletonProps {
  count?: number;
}

export default function NewspapersSwiperSkeleton({
  count = 6,
}: INewspapersSwiperSkeletonProps) {
  return (
    <div className="relative overflow-hidden mt-6">
      {/* Gradient overlays (optional) */}
      <div className="absolute h-36 w-40 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-20 top-1/2 -left-12 -translate-y-1/2 rounded-full" />
      <div className="absolute h-36 w-40 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-20 top-1/2 -right-12 -translate-y-1/2 rounded-full" />

      <div className="flex gap-4 overflow-x-auto py-2 no-scrollbar">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="
              flex-shrink-0
              w-full    
              sm:w-1/2   
              lg:w-1/3 
            "
          >
            <NewspaperCard loading />
          </div>
        ))}
      </div>
    </div>
  );
}
