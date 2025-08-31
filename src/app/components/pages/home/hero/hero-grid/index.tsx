"use client";

import { Clock, Link as LinkIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { mockArticles } from "@/app/data/mock-article";
import Image from "next/image";
import Container from "../../../../shared/container";
import CategoryBadge from "../../../../shared/category-badge";
import Link from "next/link";
import { AnimatedLink } from "../../../../shared/animated-link";

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
        <div className="flex flex-col gap-4 xl:gap-8 h-full">
          {otherStories.slice(0, 3).map((story) => (
            <div
              key={story.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-card border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[170px] xl:min-h-[180px]"
            >
              <div className="flex h-full w-full">
                <div className="w-2/3 p-3 sm:p-4 flex flex-col justify-between text-right">
                  <div>
                    <CategoryBadge title={story.category} />
                    <h3 className="text-card-foreground font-bold text-sm sm:text-base mt-2 line-clamp-3">
                      {story.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-card-foreground text-xs sm:text-sm gap-3">
                    <AnimatedLink
                      href={story.sourceLink ?? "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1"
                      icon={LinkIcon} // 👈 optional shortcut
                      tooltip={story.source} // ✅ Tooltip with source name
                    >
                      <span>منبع</span>
                    </AnimatedLink>

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
