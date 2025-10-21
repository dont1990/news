"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Container from "../../shared/container";
import { NAVBAR_HEIGHT } from "@/constants/global";
import { ArticleCardSkeleton } from "../../shared/article-card/skeleton";

const NewsListSkeleton = () => {
  return (
    <Container className="!p-0">
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* Main Content Skeleton */}
        <div className="flex-1">
          {/* Featured Article */}
          <div className="mb-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-border mb-6 bg-gradient-to-br from-background to-muted p-6">
              {/* "ویژه" label */}
              <Skeleton className="h-6 w-16 rounded-2xl mb-3" />

              {/* Title */}
              <Skeleton className="h-8 w-3/4 rounded-2xl mb-3" />

              {/* Description */}
              <Skeleton className="h-4 w-full mb-2 rounded-2xl" />
              <Skeleton className="h-4 w-5/6 mb-2 rounded-2xl" />
              <Skeleton className="h-4 w-2/3 mb-4 rounded-2xl" />

              {/* Continue link */}
              <Skeleton className="h-6 w-32 rounded-2xl mt-2" />
            </div>
          </div>

          {/* Grid of Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))}
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <aside
          className="p-3 border border-border rounded-2xl bg-muted/30 shadow-sm h-fit w-full lg:w-80 mt-8 lg:mt-0 sticky"
          style={{ top: NAVBAR_HEIGHT }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-2xl" />
          </div>
          <ul className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-2xl" />
                <Skeleton className="h-5 w-40 rounded-2xl" />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Container>
  );
};

export default NewsListSkeleton;
