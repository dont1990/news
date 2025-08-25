import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { getCategoryBadgeClasses } from "@/app/lib/category-colors";

const trendingTopics = [
  { topic: "Climate Summit", count: 1247 },
  { topic: "AI Safety", count: 892 },
  { topic: "Market Recovery", count: 756 },
  { topic: "Space Exploration", count: 634 },
  { topic: "Medical Breakthrough", count: 521 },
];

const recentUpdates = [
  {
    title: "Breaking: Emergency Climate Meeting Called",
    time: "5 min ago",
    category: "Environment",
  },
  {
    title: "Tech Stocks Surge After AI Announcement",
    time: "12 min ago",
    category: "Business",
  },
  {
    title: "New COVID Variant Detected in Europe",
    time: "25 min ago",
    category: "Health",
  },
  {
    title: "Olympic Records Broken in Swimming",
    time: "1 hour ago",
    category: "Sports",
  },
];

export function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Trending Topics</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
            >
              <span className="newspaper-body text-sm font-medium">
                {item.topic}
              </span>
              <Badge variant="outline" className="text-xs">
                {item.count.toLocaleString()}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Clock className="h-5 w-5 text-primary" />
            <span>Recent Updates</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentUpdates.map((update, index) => (
            <div
              key={index}
              className="space-y-2 pb-3 border-b border-border last:border-b-0"
            >
              <h4 className="newspaper-body text-sm font-medium leading-tight line-clamp-2">
                {update.title}
              </h4>
              <div className="flex items-center justify-between">
                <Link href={`/category/${update.category.toLowerCase()}`}>
                  <Badge
                    variant="outline"
                    className={`text-xs transition-colors cursor-pointer ${getCategoryBadgeClasses(
                      update.category
                    )}`}
                  >
                    {update.category}
                  </Badge>
                </Link>
                <span className="text-xs text-muted-foreground">
                  {update.time}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4 text-center">
          <h3 className="newspaper-heading text-lg mb-2">Stay Informed</h3>
          <p className="newspaper-body text-sm text-muted-foreground mb-3">
            Get daily news updates delivered to your inbox
          </p>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Subscribe to Newsletter
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
