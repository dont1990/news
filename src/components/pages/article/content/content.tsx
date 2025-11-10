"use client";
import { IArticle } from "@/types/article";

interface ArticleContentProps {
  article: IArticle;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const { description } = article;

  return (
    <section className="">
      <p>{description}</p>
    </section>
  );
}
