"use client";
import Image from "next/image";
import { Article } from "@/app/types/types";

interface ArticleHeroImageProps {
  article: Article;
}

export default function ArticleHeroImage({ article }: ArticleHeroImageProps) {
  const { imageUrl, title } = article;

  return (
    <div className="mb-10">
      <div className="relative overflow-hidden rounded-lg shadow-lg h-96 md:h-[500px]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </div>
  );
}
