"use client";

import { CategoryContent } from "./index";
import { FeaturedArticle } from "./featured-article";
import { Article } from "@/app/types/types";

interface Props {
  articles: Article[];
  slug: string;
  categoryName: string;
  infiniteScrollRef?: React.Ref<HTMLDivElement>;
  query: string;
}

export function CategoryContentWrapper({
  articles,
  slug,
  categoryName,
  infiniteScrollRef,
  query,
}: Props) {
  if (!articles || articles.length === 0)
    return (
      <CategoryContent
        articles={[]}
        slug={slug}
        categoryName={categoryName}
        query={query}
      />
    );

  const featuredArticle = articles[0];
  const restArticles = articles.slice(1);

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      <div className="flex-1">
        {featuredArticle && <FeaturedArticle article={featuredArticle} />}
        <CategoryContent
          articles={restArticles}
          slug={slug}
          categoryName={categoryName}
          query={query}
        />
        <div ref={infiniteScrollRef} />
      </div>
    </div>
  );
}
