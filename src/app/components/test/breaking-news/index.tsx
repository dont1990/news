"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { Button } from "@/app/components/ui/button"

const breakingNews = [
  "Breaking: Major climate summit reaches historic agreement",
  "Tech giant announces revolutionary AI breakthrough",
  "Global markets surge following economic policy changes",
  "Scientists discover potential cure for rare disease",
]

export function BreakingNews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
  }

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + breakingNews.length) % breakingNews.length)
  }

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative">
              <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                <Zap className="w-4 h-4 animate-pulse" />
                <span>BREAKING</span>
              </span>
              <div className="absolute -inset-1 bg-white/50 rounded-full blur-sm"></div>
            </div>

            <div className="flex-1 overflow-hidden">
              <p className="text-white font-semibold text-balance animate-in slide-in-from-right duration-500 key={currentIndex}">
                {breakingNews[currentIndex]}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={prevNews} className="text-white hover:bg-white/20 rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={nextNews} className="text-white hover:bg-white/20 rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
