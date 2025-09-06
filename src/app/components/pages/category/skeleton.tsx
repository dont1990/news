import React from "react";
import { CategoryHeaderSkeleton } from "./banner/skeleton";
import { ArticleCardSkeleton } from "../../shared/article-card/skeleton";
import Container from "../../shared/container";

const CategorySkeleton = () => {
  return (
    <>
      <CategoryHeaderSkeleton />
      <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleCardSkeleton key={i} />
        ))}
      </Container>
    </>
  );
};

export default CategorySkeleton;
