"use client";

import { Clock, Eye } from "lucide-react";
import DateText from "@/components/shared/date-text";
import TimeAgo from "@/components/shared/time-ago";
import { IArticle } from "@/types/article";

type Props = {
  article: IArticle;
};

export function HeroMetaInfo({ article }: Props) {
  return (
    <div className="flex flex-wrap justify-end items-center gap-3 lg:gap-4 text-sm text-muted-foreground">
      {article.source && (
        <span className="font-medium text-foreground">{article.source}</span>
      )}
      {article.publishedAt && (
        <>
          <span>•</span>
          <DateText date={article.publishedAt} />
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <TimeAgo date={article.publishedAt} />
          </div>
        </>
      )}
      {article.views && (
        <>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span>{article.views}</span>
          </div>
        </>
      )}
    </div>
  );
}
