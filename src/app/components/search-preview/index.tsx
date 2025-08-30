"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  TrendingUp,
  Clock,
  ArrowLeft,
  SearchIcon,
} from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { getCategoryBadgeClasses } from "@/app/lib/category-colors";
import { mockArticles } from "@/app/data/mock-article";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

interface SearchPreviewProps {
  className?: string;
}

export function SearchPreview({ className }: SearchPreviewProps) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState<typeof mockArticles>(
    []
  );
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement | null>(null);

  // small/tablet and large breakpoints
  const isMobileOrTablet = useMediaQuery("(max-width: 1023px)");
  const isLargeUp = useMediaQuery("(min-width: 1024px)");

  // Ensure input is open by default on large screens (only on initial mount)
  const initializedRef = useRef(false);
  useEffect(() => {
    if (!initializedRef.current) {
      if (isLargeUp) setIsInputVisible(true);
      initializedRef.current = true;
    }
  }, [isLargeUp]);

  // Filter articles
  useEffect(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const filtered = mockArticles
        .filter(
          (article) =>
            article.title.toLowerCase().includes(q) ||
            article.description.toLowerCase().includes(q) ||
            article.category.toLowerCase().includes(q)
        )
        .slice(0, 5);
      setFilteredArticles(filtered);
      setIsOpen(true);
    } else {
      setFilteredArticles([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  // Click outside => close dropdown and hide input (keeps behavior compact)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsInputVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reusable clear/close helper:
  const clearAll = () => {
    setSearchQuery("");
    setIsOpen(false);
    // Keep input visible on large screens by default only when clearing via the input button?
    // If you prefer clearing to also hide input on large screens, remove the if-check.
    if (!isLargeUp) {
      setIsInputVisible(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
    }
  };

  const handleArticleClick = () => setIsOpen(false);

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/category/${category.toLowerCase()}`);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative flex items-center">
        {/* Input: visible on mobile, large (initially), or when toggled open */}
        <AnimatePresence>
          {(isInputVisible || isMobileOrTablet || isLargeUp) && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex-1 lg:ml-2"
            >
              <Input
                placeholder={`جستجوی اخبار، مقالات و موضوعات ...`}
                className="px-4 h-12 bg-background/95 backdrop-blur-sm border-2 border-border hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl shadow-sm w-full lg:min-w-[400px] ps-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setIsOpen(true)}
              />
              {searchQuery && (
                <Button
                  variant={"ghost"}
                  type="button"
                  onClick={clearAll}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant={"ghost"}
                type="button"
                onClick={clearAll}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full cursor-pointer"
              >
                <SearchIcon className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 mt-2 z-50"
          >
            <Card className="shadow-2xl border-2 border-border/50 rounded-xl overflow-hidden p-0">
              <CardContent className="p-0">
                {filteredArticles.length > 0 ? (
                  <>
                    <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">
                          {filteredArticles.length} نتیجه یافت شد
                        </span>
                      </div>
                    </div>

                    <div className="max-h-96 overflow-y-auto text-start">
                      {filteredArticles.map((article) => (
                        <div
                          key={article.id}
                          onClick={() => {
                            router.push(`/article/${article.id}`);
                            handleArticleClick();
                          }}
                          className="hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-200 cursor-pointer border-b border-border/50 last:border-b-0 group"
                        >
                          <div className="p-5">
                            <div className="flex gap-4">
                              <div className="relative overflow-hidden rounded-lg flex-shrink-0 w-20 h-16">
                                <Image
                                  src={article.imageUrl || "/placeholder.svg"}
                                  alt={article.title}
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  fill
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge
                                    variant="secondary"
                                    className={`cursor-pointer transition-all duration-200 text-xs px-2 py-1 ${getCategoryBadgeClasses(
                                      article.category
                                    )}`}
                                    onClick={(e) =>
                                      handleCategoryClick(e, article.category)
                                    }
                                  >
                                    {article.category}
                                  </Badge>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    <span>
                                      {new Date(
                                        article.publishedAt
                                      ).toLocaleDateString("fa-IR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })}
                                    </span>{" "}
                                  </div>
                                </div>

                                <p className="font-semibold text-sm line-clamp-2 mb-2 leading-tight group-hover:text-primary transition-colors">
                                  {article.title}
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                  {article.description}
                                </p>

                                <div className="mt-2 text-xs text-muted-foreground font-medium">
                                  {article.source} • {article.readTime}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 border-t border-border">
                      <Button
                        onClick={handleSearch}
                        className="w-full flex items-center justify-center gap-2"
                      >
                        مشاهده تمام {filteredArticles.length} نتیجه
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Search className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      نتیجه ای یافت نشد
                    </p>
                    <p className="text-xs text-muted-foreground">
                      کلمات کلیدی دیگر را امتحان کنید یا دسته‌بندی‌ها را مرور
                      کنید
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
