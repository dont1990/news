"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { mockArticles } from "@/app/data/mock-article";
import { Button } from "@/app/components/ui/button";
import Container from "../../../../shared/container";

export function HeroSlider() {
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % mockArticles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextStory = () =>
    setCurrentStory((prev) => (prev + 1) % mockArticles.length);
  const prevStory = () =>
    setCurrentStory(
      (prev) => (prev - 1 + mockArticles.length) % mockArticles.length
    );

  const story = mockArticles[currentStory];

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={story.imageUrl || "/placeholder.svg"}
          alt={story.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content (Right aligned) */}
      <Container className="relative z-10 h-full flex items-center justify-start text-start pointer-events-auto">
        <div className="max-w-2xl text-white">
          <div className="mb-4 flex items-center justify-start gap-x-4">
            <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
              {story.category}
            </span>
            <span className="text-gray-300 text-sm">{story.readTime} دقیقه</span>
          </div>

          <p className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-in slide-in-from-left duration-1000">
            {story.title}
          </p>

          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-in slide-in-from-left duration-1000 delay-200">
            {story.description}
          </p>

          <div className="flex items-center justify-start gap-x-4 animate-in slide-in-from-left duration-1000 delay-400">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3"
            >
              ادامه مطلب
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-6 py-3 bg-transparent"
            >
              <Play className="w-5 h-5 me-2" />
              تماشای ویدیو
            </Button>
          </div>
        </div>
      </Container>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-x-4 z-20 pointer-events-auto">
        <button
          onClick={prevStory}
          className="text-white hover:bg-white/20 rounded-full p-2 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex gap-x-2">
          {mockArticles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStory
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextStory}
          className="text-white hover:bg-white/20 rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
