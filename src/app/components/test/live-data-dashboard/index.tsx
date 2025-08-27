"use client"

import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { TrendingUp, TrendingDown, Globe, Users, Zap } from "lucide-react"

const liveStats = [
  {
    id: 1,
    title: "Global Stock Markets",
    value: "+2.4%",
    change: "+156.8",
    trend: "up",
    icon: TrendingUp,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    id: 2,
    title: "Active Readers",
    value: "847K",
    change: "+12.3%",
    trend: "up",
    icon: Users,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 3,
    title: "Breaking Stories",
    value: "23",
    change: "+5 today",
    trend: "up",
    icon: Zap,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    id: 4,
    title: "Global Temperature",
    value: "+1.2°C",
    change: "vs 1900",
    trend: "up",
    icon: Globe,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
]

const trendingTopics = [
  { topic: "Climate Summit", mentions: "45.2K", change: "+23%" },
  { topic: "AI Revolution", mentions: "38.7K", change: "+18%" },
  { topic: "Space Exploration", mentions: "29.1K", change: "+15%" },
  { topic: "Renewable Energy", mentions: "22.8K", change: "+12%" },
  { topic: "Global Economy", mentions: "19.3K", change: "+8%" },
]

export function LiveDataDashboard() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 text-balance">Live Data Dashboard</h2>
        <p className="text-xl text-gray-300 text-balance">
          Real-time insights and trending topics from around the world
        </p>
      </div>

      {/* Live Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {liveStats.map((stat) => {
          const IconComponent = stat.icon
          return (
            <Card
              key={stat.id}
              className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                  LIVE
                </Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-400">{stat.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className={`text-sm font-medium ${stat.color} flex items-center gap-1`}>
                    {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {stat.change}
                  </span>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Trending Topics */}
      <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border-purple-400/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Trending Topics</h3>
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">Updated 2 min ago</Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {trendingTopics.map((topic, index) => (
            <div
              key={topic.topic}
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-purple-300">#{index + 1}</span>
                <span className="text-xs text-green-400 font-medium">{topic.change}</span>
              </div>

              <h4 className="text-white font-semibold mb-1 text-balance group-hover:text-purple-300 transition-colors">
                {topic.topic}
              </h4>

              <p className="text-sm text-gray-400">{topic.mentions} mentions</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
