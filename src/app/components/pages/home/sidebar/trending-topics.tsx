"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface TrendingTopicsCardProps {
  topics: { topic: string; count: number }[];
}

export default function TrendingTopicsCard({ topics }: TrendingTopicsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span>موضوعات داغ</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topics.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
          >
            <span className="newspaper-body text-sm font-medium">{item.topic}</span>
            <Badge variant="outline" className="text-xs">
              {item.count.toLocaleString("fa-IR")}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
