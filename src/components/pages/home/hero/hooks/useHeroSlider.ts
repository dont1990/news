"use client";
import { IArticle } from "@/types/article";
import { useEffect, useState } from "react";

export function useHeroSlider(articles?: IArticle[]) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!articles?.length) return;
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % articles.length),
      8000
    );
    return () => clearInterval(interval);
  }, [articles?.length]);

  return { active, setActive };
}
