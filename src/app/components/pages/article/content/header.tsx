"use client";

import { Button } from "@/app/components/ui/button";
import { Clock, User, Calendar, Share2, Bookmark } from "lucide-react";
import { Article } from "@/app/types/types";
import DateText from "@/app/components/shared/date-text";
import TimeAgo from "@/app/components/shared/time-ago";
import CategoryBadge from "@/app/components/shared/category-badge";

interface ArticleHeaderProps {
  article: Article;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <CategoryBadge title={article.category} />
        {article.sourceLink ? (
          <a
            href={article.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {article.source}
          </a>
        ) : (
          <span className="text-sm text-muted-foreground">
            {article.source}
          </span>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl mb-6 leading-tight text-foreground">
        {article.title}
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
        {article.description}
      </p>

      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-primary" />
          <span className="font-medium">نویسنده: {article.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span>
            تاریخ انتشار:{" "}
            <DateText
              date={article.publishedAt}
              className="text-muted-foreground me-0.5"
            />
            (
            <TimeAgo
              date={article.publishedAt}
              className="text-muted-foreground"
            />
            )
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span>مدت زمان مطالعه: {article.readTime}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          aria-label={`اشتراک‌گذاری مقاله ${article.title}`}
        >
          <Share2 className="h-4 w-4" />
          اشتراک‌گذاری
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
        >
          <Bookmark className="h-4 w-4" />
          ذخیره برای بعد
        </Button>
      </div>
    </header>
  );
}
