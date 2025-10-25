"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Eye, Play, Bookmark } from "lucide-react";
import Image from "next/image";
import { useHeroNews } from "../hooks/useHeroNews"; // make sure path is correct
import CategoryBadge from "@/components/shared/category-badge"; // import your component
import { ShareButton } from "@/components/shared/share";

export default function HeroGrid() {
  const { data: articles, isLoading, error } = useHeroNews();
  const [active, setActive] = useState(0);

  if (isLoading) return <p>در حال بارگذاری اخبار مهم...</p>;
  if (error) return <p>خطا در بارگذاری اخبار: {error.message}</p>;
  if (!articles || articles.length === 0) return <p>هیچ خبری موجود نیست.</p>;

  const activeArticle = articles[active];

  return (
    <section className="container mx-auto px-6 py-16 grid lg:grid-cols-12 gap-8 items-center">
      {/* Right: Slider Thumbnails */}
      <div className="lg:col-span-7 flex gap-3 h-[500px] overflow-hidden">
        {articles.map((article, index) => (
          <button
            key={article.id}
            onClick={() => setActive(index)}
            className={`relative overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)] ${
              index === active ? "flex-[3]" : "flex-[0.7] hover:flex-[1]"
            }`}
          >
            {article.imageUrl ? (
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                تصویر موجود نیست
              </div>
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-700 ${
                index === active ? "opacity-90" : "opacity-60"
              }`}
            />
            {active === index && (
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 text-white text-start transition-all duration-500 flex flex-col gap-2`}
              >
                <CategoryBadge title={article.category} className="mb-2" />
                <p className="font-bold text-lg line-clamp-2 leading-6">
                  {article.title}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Left: Active Story Info */}
      <div className="lg:col-span-5 flex flex-col justify-center gap-6 text-right">
        {/* Category */}
        <div className="flex items-center justify-end">
          <CategoryBadge title={activeArticle.category} />
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
          {activeArticle.title}
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed border-s-4 border-red-600 ps-4 md:pl-6">
          {activeArticle.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-3">
          <Button size="lg">
            مطالعه کامل خبر
          </Button>
          <Button
            variant="outline"
            size="lg"
          >
            <Play className="w-4 h-4" />
            مشاهده ویدیو
          </Button>
          <Button variant="ghost" size="lg" className="gap-2">
            <Bookmark className="w-4 h-4" />
          </Button>
          <ShareButton
            url={activeArticle.sourceLink ?? window.location.href}
            title={activeArticle.title}
            description={activeArticle.description}
            variant="ghost"
            size="lg"
            showLabel={false}
          />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap justify-end items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-gray-200">
          <span className="font-medium text-foreground">{activeArticle.source}</span>
          <span>•</span>
          <span>{activeArticle.publishedAt}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>{activeArticle.readTime ?? "۵ دقیقه خواندن"}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span>{activeArticle.views ?? "۱.۲K بازدید"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
