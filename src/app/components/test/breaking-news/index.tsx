"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../../shared/container";

const breakingNews = [
  "فوری: نشست تاریخی اقلیمی به توافقی بی‌سابقه رسید",
  "غول فناوری از دستاورد انقلابی در حوزه هوش مصنوعی رونمایی کرد",
  "بازارهای جهانی پس از تغییر سیاست‌های اقتصادی جهش کردند",
  "دانشمندان درمان احتمالی بیماری نادر را کشف کردند",
];

export function BreakingNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + breakingNews.length) % breakingNews.length);
  };

  return (
    <div
      className="relative bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-3 sm:py-4 overflow-hidden"
      dir="rtl"
    >
      {/* overlay gradient effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Badge + News */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            {/* badge */}
            <div className="relative shrink-0">
              <span className="bg-white text-red-600 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shadow-lg">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                <span>فوری</span>
              </span>
              <div className="absolute -inset-1 bg-white/40 rounded-full blur-md"></div>
            </div>

            {/* animated news text */}
            <div className="flex-1 overflow-hidden">
              <div className="relative min-h-[1.5rem] sm:min-h-[1.75rem]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="absolute w-full text-white font-medium text-xs sm:text-sm md:text-base leading-snug text-right break-words"
                  >
                    {breakingNews[currentIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={nextNews}
              className="text-white hover:bg-white/20 rounded-full p-1 sm:p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevNews}
              className="text-white hover:bg-white/20 rounded-full p-1 sm:p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
