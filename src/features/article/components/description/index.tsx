"use client";
import { IArticle } from "@/types/article";

interface IArticleDescriptionProps {
  article: IArticle;
}

export default function ArticleDescription({
  article,
}: IArticleDescriptionProps) {
  const { description } = article;

  return (
    <section className="">
      <p>{description}</p>
    </section>
  );
}
