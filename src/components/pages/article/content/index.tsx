"use client";

import ArticleHeader from "./header";
import ArticleHeroImage from "./hero-image";
import ArticleContent from "./content";
import ArticleRelated from "./related";
import { Article } from "@/types/article";
import Container from "@/components/shared/container";
import { AnimatedLink } from "@/components/shared/animated-link";
import ArrowLeft from "../../../../assets/shared-icons/arrow-left";
import { NAVBAR_HEIGHT } from "@/constants/global";
import { routes } from "@/routes/routes";
import ArticleHashTags from "@/components/shared/hash-tags";

interface ArticlePageContentProps {
  article: Article;
}

export default function ArticlePageContent({
  article,
}: ArticlePageContentProps) {
  // TODO: Replace with API fetch for related articles
  const relatedArticles: Article[] = [];
  return (
    <Container>
      <div className="mb-8">
        <AnimatedLink href={routes.home.getHref()}>
          بازگشت به اخبار
          <ArrowLeft className="h-4 w-4 mt-0.5 ms-0.5" />
        </AnimatedLink>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
        <article className="xl:col-span-3">
          <ArticleHeader article={article} />
          <ArticleHeroImage article={article} />
          <ArticleContent article={article} />
          <div className="my-5">
            <ArticleHashTags tags={article.tags || []} />
          </div>
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
