"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useQueryParams } from "@/app/hooks/useQueryParams";
import { routes } from "@/app/routes/routes";
import { Article } from "@/app/types/types";
import { useNewsFeed } from "@/app/components/pages/news-list/hooks/useNewsFeed";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { getParam, setParam, removeParam } = useQueryParams();

  // initialize from query param on mount
  useEffect(() => {
    const initial = getParam("search") || "";
    setSearchQuery(initial);
  }, [getParam]);

  // --- Fetch news based on current search query ---
  const { articles } = useNewsFeed(
    useMemo(() => (searchQuery.trim() ? { search: searchQuery.trim() } : {}), [searchQuery])
  );

  // --- Preview results (take top 5) ---
  const results: Article[] = articles.slice(0, 5);

  // toggle open state when searchQuery changes
  useEffect(() => {
    setIsOpen(!!searchQuery.trim() && results.length > 0);
  }, [searchQuery, results]);

  // clear search and remove query param
  const clearAll = () => {
    setSearchQuery("");
    removeParam("search");
    setIsOpen(false);
  };

  // handle submit: update query param & navigate
  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      setParam("search", trimmed);
      router.push(routes.search.getHref({ query: trimmed }));
      setIsOpen(false);
    } else {
      clearAll();
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
