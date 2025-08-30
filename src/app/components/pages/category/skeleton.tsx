import React from "react";
import { CategoryHeaderSkeleton } from "./category-header/skeleton";
import { ArticleCardSkeleton } from "../../shared/article-card/skeleton";

const CategorySkeleton = () => {
  return (
    <>
      <CategoryHeaderSkeleton />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 container mx-auto px-4 py-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
};

export default CategorySkeleton;
