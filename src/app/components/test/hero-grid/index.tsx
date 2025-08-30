"use client";

import { Clock, User } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { mockArticles } from "@/app/data/mock-article";
import Image from "next/image";
import Container from "../../shared/container";
import CategoryBadge from "../../shared/category-badge";

export function HeroGrid() {
  const featuredStory = mockArticles[0];
  const otherStories = mockArticles.filter(
    (story) => story.id !== featuredStory.id
  );

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-auto">
        {/* Featured Story */}
        {featuredStory && (
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
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

              <p className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white text-balance">
                {featuredStory.title}
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                {featuredStory.description}
              </p>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 w-fit"
              >
                ادامه مطلب
              </Button>
            </div>
          </div>
        )}

        {/* Other Stories Column */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-6 h-full">
          {otherStories.slice(0, 3).map((story) => (
            <div
              key={story.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex-1 min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
            >
              <div className="flex h-full">
                <div className="w-2/3 p-3 sm:p-4 flex flex-col justify-between text-right">
                  <div>
                    <span className="px-2 py-1 bg-purple-600/80 text-white text-xs sm:text-sm font-semibold rounded-full">
                      {story.category}
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-base mt-2 line-clamp-3 leading-tight">
                      {story.title}
                    </h3>
                  </div>

                  <div className="flex items-center text-white text-xs sm:text-sm gap-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="w-1/3 relative">
                  <Image
                    src={story.imageUrl || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
