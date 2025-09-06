"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { mockArticles } from "@/app/data/mock-article";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<typeof mockArticles>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // filter articles (later: replace with API call)
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const q = searchQuery.toLowerCase();
    const filtered = mockArticles
      .filter(
        (article) =>
          article.title.toLowerCase().includes(q) ||
          article.description.toLowerCase().includes(q) ||
          article.category.toLowerCase().includes(q)
      )
      .slice(0, 5);

    setResults(filtered);
    setIsOpen(true);
  }, [searchQuery]);

  const clearAll = (keepInputVisible = false) => {
    setSearchQuery("");
    setIsOpen(false);
    if (!keepInputVisible) {
      // optional: let parent control input visibility if needed
    }
  };

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
    }
  };


  return {
    searchRef,
    searchQuery,
    setSearchQuery,
    results,
    isOpen,
    setIsOpen,
    clearAll,
    handleSearch,
  };
}
