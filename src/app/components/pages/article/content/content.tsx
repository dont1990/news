"use client";
import { Article } from "@/app/types/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <section
      className="prose prose-lg prose-gray max-w-none news-body leading-relaxed"
      dangerouslySetInnerHTML={{ __html: article.content as string }}
    />
  );
}
