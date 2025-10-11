"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Article } from "@/app/types/types";
import { SearchResultItem } from "./item";
import { SearchEmptyState } from "./empty";
import ArrowLeft from "@/app/assets/shared-icons/arrow-left";
import TrendingUpIcon from "@/app/assets/shared-icons/trending-up";

interface SearchDropdownProps {
  isOpen: boolean;
  results: Article[];
  onClose: () => void;
  onSeeAll: () => void;
}

export function SearchDropdown({
  isOpen,
  results,
  onClose,
  onSeeAll,
}: SearchDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute top-full left-0 right-0 mt-2 z-50"
        >
          <Card className="shadow-2xl border-2 border-border/50 rounded-2xl overflow-hidden p-0">
            <CardContent className="p-0">
              {results.length > 0 ? (
                <>
                  <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-primary/5 border-b border-border">
                    <div className="flex items-center gap-2">
                      <TrendingUpIcon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {results.length} نتیجه یافت شد
                      </span>
                    </div>
                  </div>

                  <div className="max-h-96 overflow-y-auto text-start">
                    {results.map((article) => (
                      <SearchResultItem
                        key={article.id}
                        article={article}
                        onClick={onClose}
                      />
                    ))}
                  </div>

                  <div className="p-4 bg-gradient-to-r from-muted/30 to-muted/10 border-t border-border">
                    <Button
                      onClick={onSeeAll}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      مشاهده تمام {results.length} نتیجه
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <SearchEmptyState />
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
