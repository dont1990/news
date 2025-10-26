"use client";

import Image from "next/image";
import CategoryBadge from "@/components/shared/category-badge";
import ImagePlaceholder from "@/components/shared/image-placeholder"; 
import { Article } from "@/types/article";

type HeroThumbnailsProps = {
  articles: Article[];
  active: number;
  onSelect: (index: number) => void;
};

export function HeroThumbnails({ articles, active, onSelect }: HeroThumbnailsProps) {
  return (
    <div className="lg:col-span-7 flex gap-3 h-[500px] overflow-hidden">
      {articles.map((article, index) => (
        <button
          key={article.id}
          onClick={() => onSelect(index)}
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
            <ImagePlaceholder className="w-full h-full" />
          )}

          {/* Overlay gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-700 ${
              index === active ? "opacity-90" : "opacity-60"
            }`}
          />

          {/* Active thumbnail text */}
          {index === active && (
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-start flex flex-col gap-2 transition-all">
              <CategoryBadge title={article.category} />
              <p className="font-bold text-lg line-clamp-2">{article.title}</p>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
