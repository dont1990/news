"use client";

import { useState, useEffect } from "react";
import { mockArticles } from "@/app/data/mock-article";
import { Article } from "@/app/types/types";

export function useCategoryArticles(slug: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      // ✅ Currently uses mock data
      let data: Article[] = [];

      if (slug.toLowerCase() === "all") {
        data = mockArticles;
      } else {
        data = mockArticles.filter(
          (a) => a.category.toLowerCase() === slug.toLowerCase()
        );
      }

      // ✅ Simulate async delay (like fetching from backend)
      await new Promise((res) => setTimeout(res, 500));

      setArticles(data);
      setLoading(false);
    }

    fetchData();
  }, [slug]);

  return { articles, loading };
}
