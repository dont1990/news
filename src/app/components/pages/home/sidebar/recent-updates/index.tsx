"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import TimeAgo from "@/app/components/shared/time-ago";
import { Article } from "@/app/types/types";
import Link from "next/link";
import { routes } from "@/app/routes/routes";
import ClockIcon from "@/app/assets/shared-icons/clock";

interface RecentUpdatesCardProps {
  articles: Article[];
}

export default function RecentUpdatesCard({
  articles,
}: RecentUpdatesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <ClockIcon className="h-5 w-5 text-primary" />
          <span className="text-foreground font-medium">
            به‌روزرسانی‌های اخیر
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {articles.map((article) => (
          <Link
            href={routes.news.detail.getHref(article.id)}
            key={article.id}
            className="space-y-2 pb-3 border-b border-border last:border-b-0 block hover:text-primary"
          >
            <div className="newspaper-body text-sm font-medium leading-tight line-clamp-1">
              {article.title}
            </div>
            <div>
              <TimeAgo
                date={article.publishedAt}
                className="text-xs text-muted-foreground"
              />
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
