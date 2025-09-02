"use client";

import ArticleHeader from "./header";
import ArticleHeroImage from "./hero-image";
import ArticleContent from "./content";
import ArticleAuthor from "./author";
import ArticleRelated from "./related";
import { Article } from "@/app/types/types";
import Container from "@/app/components/shared/container";
import { AnimatedLink } from "@/app/components/shared/animated-link";
import { ArrowLeft } from "lucide-react";
import { mockArticles } from "@/app/data/mock-article";

interface ArticlePageProps {
  article: Article;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  const relatedArticles =
    mockArticles
      .filter((a) => a.id !== article.id && a.category === article.category)
      .slice(0, 3) || [];


  return (
    <Container>
      <div className="mb-8">
        <AnimatedLink href="/" className="flex gap-2 items-center">
          بازگشت به اخبار
          <ArrowLeft className="h-4 w-4" />
        </AnimatedLink>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
        <article className="xl:col-span-3">
          <ArticleHeader article={article} />
          <ArticleHeroImage article={article} />
          <ArticleContent article={article} />
          <ArticleAuthor article={article} />
        </article>

        <aside className="xl:col-span-1 sticky top-48">
          <ArticleRelated
            relatedArticles={relatedArticles}
            currentArticle={article}
          />
        </aside>
      </div>
    </Container>
  );
}
