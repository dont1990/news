"use client";

import React from "react";
import Container from "../../../../shared/container";
import { ArticleCard } from "@/app/components/shared/article-card";
import FeaturedStory from "./featured-story";
import { useHeroNews } from "../hooks/useHeroNews";

export function HeroGrid() {
  const { data: articles, isLoading, error } = useHeroNews();

  if (isLoading) return <p>در حال بارگذاری اخبار مهم...</p>;
  if (error) return <p>خطا در بارگذاری اخبار: {error.message}</p>;
  if (!articles || articles.length === 0) return <p>هیچ خبری موجود نیست.</p>;

  const featuredStory = articles[0];
  const otherStories = articles.slice(1, 4); // next 3

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-6 h-auto">
        {/* Featured Story */}
        <FeaturedStory article={featuredStory} />

        {/* Other Stories Column */}
        <div className="flex flex-col gap-4 xl:gap-6 h-full content-between">
          {otherStories.map((story) => (
            <ArticleCard key={story.id} article={story} type="horizontal" />
          ))}
        </div>
      </div>
    </Container>
  );
}
