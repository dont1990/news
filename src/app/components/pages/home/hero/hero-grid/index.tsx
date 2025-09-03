"use client";

import Container from "../../../../shared/container";
import { ArticleCard } from "@/app/components/shared/article-card";
import FeaturedStory from "./featured-story";
import { mockArticles } from "@/app/data/mock-article";

export function HeroGrid() {
  const articles = mockArticles;

  const featuredStory = articles[0];
  const otherStories = articles.slice(1, 4); // show next 3

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 h-auto">
        {/* Featured Story */}
        <FeaturedStory article={featuredStory} />

        {/* Other Stories Column */}
        <div className="flex flex-col gap-4 xl:gap-8 h-full">
          {otherStories.map((story) => (
            <ArticleCard key={story.id} article={story} type="horizontal" />
          ))}
        </div>
      </div>
    </Container>
  );
}
