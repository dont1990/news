"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Clock from "@/assets/shared-icons/clock";
import CalendarIcon from "@/assets/shared-icons/calendar";
import TrendingUpIcon from "@/assets/shared-icons/trending-up";

const timelineEvents = [
  {
    id: 1,
    time: "2 hours ago",
    title: "Breaking: Global Climate Summit Reaches Historic Agreement",
    category: "Environment",
    impact: "High",
    description:
      "World leaders unite on ambitious carbon reduction targets for 2030.",
  },
  {
    id: 2,
    time: "4 hours ago",
    title: "Tech Giant Announces Revolutionary AI Breakthrough",
    category: "Technology",
    impact: "Medium",
    description:
      "New quantum-AI hybrid system promises to solve complex problems.",
  },
  {
    id: 3,
    time: "6 hours ago",
    title: "Economic Markets Show Unprecedented Growth",
    category: "Finance",
    impact: "High",
    description: "Global markets surge following positive economic indicators.",
  },
  {
    id: 4,
    time: "8 hours ago",
    title: "Space Mission Discovers Potentially Habitable Exoplanet",
    category: "Science",
    impact: "Medium",
    description:
      "NASA's latest findings could reshape our understanding of life.",
  },
];

export function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[0]);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-4xl font-bold text-white mb-4 text-balance">
          Live News Timeline
        </p>
        <p className="text-xl text-gray-300 text-balance">
          Follow breaking stories as they unfold in real-time
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Timeline */}
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedEvent.id === event.id ? "scale-105" : "hover:scale-102"
              }`}
              onClick={() => setSelectedEvent(event)}
            >
              {/* Timeline line */}
              {index !== timelineEvents.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}

              <Card
                className={`p-6 backdrop-blur-xl border transition-all duration-300 ${
                  selectedEvent.id === event.id
                    ? "bg-purple-500/20 border-purple-400/50 shadow-lg shadow-purple-500/25"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-3 h-3 rounded-full mt-2 ${
                      selectedEvent.id === event.id
                        ? "bg-purple-400"
                        : "bg-gray-400"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">
                        {event.time}
                      </span>
                      <Badge
                        variant={
                          event.impact === "High" ? "destructive" : "primary"
                        }
                        className="text-xs"
                      >
                        {event.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-white font-semibold mb-1 text-balance">
                      {event.title}
                    </p>
                    <Badge
                      variant="outline"
                      className="text-xs text-purple-300 border-purple-300/30"
                    >
                      {event.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Selected Event Detail */}
        <div className="sticky top-8">
          <Card className="p-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border-purple-400/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <CalendarIcon className="w-6 h-6 text-purple-400" />
              <span className="text-purple-300 font-medium">
                {selectedEvent.time}
              </span>
            </div>

            <p className="text-2xl font-bold text-white mb-4 text-balance">
              {selectedEvent.title}
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {selectedEvent.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUpIcon className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Trending Now</span>
              </div>
              <Badge
                variant={
                  selectedEvent.impact === "High" ? "destructive" : "primary"
                }
              >
                {selectedEvent.impact} Impact Story
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
