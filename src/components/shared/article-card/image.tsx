"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import ImagePlaceholder from "../image-placeholder";
import { IArticle } from "@/types/article";

export default function ArticleImage({
  article,
  className,
}: {
  article: IArticle;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  // If the image is missing or failed to load, show placeholder
  if (hasError || !article.imageUrl) {
    return <ImagePlaceholder className={cn("w-full h-full", className)} />;
  }

  return (
    <Image
      src={article.imageUrl}
      alt={article.title}
      fill
      // placeholder="blur"
      // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+vXrHgAGcwL/OnTq6gAAAABJRU5ErkJggg=="
      className={cn("object-cover", className)}
      onError={() => setHasError(true)}
    />
  );
}
