"use client";

import { Button } from "@/app/components/ui/button";
import { Clock, User, Calendar, Share2, Bookmark } from "lucide-react";
import { Article } from "@/app/types/types";
import DateText from "@/app/components/shared/date-text";
import TimeAgo from "@/app/components/shared/time-ago";
import CategoryBadge from "@/app/components/shared/category-badge";
import { routes } from "@/app/routes/routes";

interface ArticleHeaderProps {
  article: Article;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  const { category, source, sourceLink, title, publishedAt, readTime } =
    article;

  return (
    <header className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <CategoryBadge title={category ?? routes.home.getHref()} />
        {sourceLink ? (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {source}
          </a>
        ) : (
          <span className="text-sm text-muted-foreground">{source}</span>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl mb-6 leading-tight text-foreground">
        {title}
      </h1>

      {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
        {description}
      </p> */}

      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-primary" />
          <span className="font-medium">نام منبع : {source}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span>
            تاریخ انتشار:{" "}
            <DateText
              date={publishedAt}
              className="text-muted-foreground me-0.5"
            />
            (
            <TimeAgo date={publishedAt} className="text-muted-foreground" />)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span>مدت زمان مطالعه: {readTime} دقیقه</span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          aria-label={`اشتراک‌گذاری مقاله ${title}`}
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
