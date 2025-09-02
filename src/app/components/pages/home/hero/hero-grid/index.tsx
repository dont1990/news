"use client";

import { Button } from "@/app/components/ui/button";
import { mockArticles } from "@/app/data/mock-article";
import Image from "next/image";
import Container from "../../../../shared/container";
import CategoryBadge from "../../../../shared/category-badge";
import { ArticleCard } from "@/app/components/shared/article-card";
import Link from "next/link";

export function HeroGrid() {
  const featuredStory = mockArticles[0];
  const otherStories = mockArticles.filter(
    (story) => story.id !== featuredStory.id
  );

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 h-auto">
        {/* Featured Story */}
        {featuredStory && (
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 min-h-[400px] md:min-h-[500px] xl:min-h-[600px]">
            <div className="absolute inset-0">
              <Image
                src={featuredStory.imageUrl || "/placeholder.svg"}
                alt={featuredStory.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            <div className="relative z-10 p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-end text-right">
              <CategoryBadge title={featuredStory.category} className="mb-4" />

              <Link
                href={`/article/${featuredStory.id}`}
                className="text-xl sm:text-3xl lg:text-4xl  font-bold mb-3 sm:mb-4 leading-tight text-white text-balance hover:text-primary transition-colors w-fit"
              >
                {featuredStory.title}
              </Link>

              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                {featuredStory.description}
              </p>
              <Link href={`/article/${featuredStory.id}`}>
                <Button
                  size="default"
                  className="bg-white text-black hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 w-fit"
                >
                  ادامه مطلب
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Other Stories Column */}
        <div className="flex flex-col gap-4 xl:gap-8 h-full">
          {otherStories.slice(0, 3).map((story) => (
            <ArticleCard key={story.id} article={story} type="horizontal" />
          ))}
        </div>
      </div>
    </Container>
  );
}
