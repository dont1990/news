"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../../../shared/container";
import { Article } from "@/types/types";
import Link from "next/link";
import { routes } from "@/routes/routes";
import FlashIcon from "./assets/flash";

interface Props {
  breakingNews: Article[];
}

export function BreakingNewsTicker({ breakingNews }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [breakingNews]);

  return (
    <div
      className="relative gradient-primary py-3 sm:py-4 overflow-hidden rounded-2xl p-4"
      dir="rtl"
    >
      {/* overlay gradient */}
      <div className="absolute inset-0 "></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>

      <Container className="relative !p-0">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            {/* badge */}
            <div className="relative shrink-0">
              <span className="bg-white text-red-600 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-1 shadow-lg">
                <FlashIcon className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                <span>فوری</span>
              </span>
              <div className="absolute -inset-1 bg-white/40 rounded-full blur-md"></div>
            </div>

            {/* news text */}
            <div className="flex-1 overflow-hidden">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full text-white font-medium text-xs sm:text-sm md:text-base leading-snug text-right break-words"
                  >
                    <Link
                      href={routes.news.detail.getHref(
                        breakingNews[currentIndex].id
                      )}
                      className="hover:underline"
                    >
                      {breakingNews[currentIndex].title}
                    </Link>
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
