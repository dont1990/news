"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { useTrendingTags } from "../hooks/useTrendingTags";
import { useTagNavigation } from "@/app/components/shared/hash-tags/hooks/useTagNavigation";
import TrendingUpIcon from "@/app/assets/shared-icons/trending-up";
import HashTagIcon from "@/app/assets/shared-icons/hash";

export default function TrendingTopicsCard() {
  const { data: topics = [] } = useTrendingTags();
  const { navigateWithTags } = useTagNavigation();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUpIcon className="h-5 w-5 text-primary" />
          <span className="text-foreground font-medium">موضوعات داغ</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topics.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between  border-b border-border last:border-b-0 cursor-pointer bg-primary/5 p-2 rounded-2xl"
            onClick={() => navigateWithTags([item.tag])} // navigate on click
          >
            <HashTagIcon className="text-primary size-6"/>
            <span className="newspaper-body text-sm font-medium">{item.tag}</span>
            <Badge variant="outline" className="text-xs">
              {item.clicks.toLocaleString("fa-IR")}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
