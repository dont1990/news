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
import { NAVBAR_HEIGHT } from "@/app/constants/constant";
import { routes } from "@/app/routes/routes";

interface ArticlePageContentProps {
  article: Article;
}

export default function ArticlePageContent({ article }: ArticlePageContentProps) {
  // TODO: Replace with API fetch for related articles
  const relatedArticles: Article[] = [];

  return (
    <Container>
      <div className="mb-8">
        <AnimatedLink href={routes.home.getHref()}>
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

        <aside className="xl:col-span-1 sticky" style={{ top: NAVBAR_HEIGHT }}>
          <ArticleRelated
            relatedArticles={relatedArticles}
            currentArticle={article}
          />
        </aside>
      </div>
    </Container>
  );
}
