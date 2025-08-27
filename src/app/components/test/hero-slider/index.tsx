"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

const heroStories = [
  {
    id: 1,
    title: "Revolutionary AI Breakthrough Changes Everything",
    subtitle: "Scientists achieve quantum leap in artificial intelligence",
    image: "/futuristic-ai-laboratory-with-glowing-screens.png",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    subtitle: "World leaders unite for unprecedented environmental action",
    image: "/world-leaders-at-climate-summit-with-green-energy-.png",
    category: "Environment",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Space Mission Discovers New Habitable Planet",
    subtitle: "NASA confirms Earth-like conditions 40 light years away",
    image: "/beautiful-exoplanet-with-blue-oceans-and-continent.png",
    category: "Science",
    readTime: "6 min read",
  },
]

export function HeroSection() {
  const [currentStory, setCurrentStory] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % heroStories.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextStory = () => setCurrentStory((prev) => (prev + 1) % heroStories.length)
  const prevStory = () => setCurrentStory((prev) => (prev - 1 + heroStories.length) % heroStories.length)

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroStories[currentStory].image || "/placeholder.svg"}
          alt={heroStories[currentStory].title}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="mb-4 flex items-center space-x-4">
            <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
              {heroStories[currentStory].category}
            </span>
            <span className="text-gray-300 text-sm">{heroStories[currentStory].readTime}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance animate-in slide-in-from-left duration-1000">
            {heroStories[currentStory].title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty animate-in slide-in-from-left duration-1000 delay-200">
            {heroStories[currentStory].subtitle}
          </p>

          <div className="flex items-center space-x-4 animate-in slide-in-from-left duration-1000 delay-400">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3">
              Read Full Story
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-6 py-3 bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={prevStory} className="text-white hover:bg-white/20 rounded-full p-2">
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="flex space-x-2">
          {heroStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStory ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        <Button variant="ghost" size="sm" onClick={nextStory} className="text-white hover:bg-white/20 rounded-full p-2">
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </section>
  )
}
