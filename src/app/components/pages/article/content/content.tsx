"use client";
import { Article } from "@/app/types/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <section
      className=""
      >

        <p>{article.description}</p>
      </section>
  );
}
