"use client";
import { Article } from "@/app/types/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const { description } = article;

  return (
    <section className="">
      <p>{description}</p>
    </section>
  );
}
