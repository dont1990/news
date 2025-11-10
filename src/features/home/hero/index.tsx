"use client";

import Container from "@/components/shared/container";
import { HeroThumbnails } from "./hero-thumbnails";
import { HeroArticleInfo } from "./hero-article-info";
import { useHeroSlider } from "./hooks/useHeroSlider";
import { useHeroNews } from "./hooks/useHeroNews";


export default function HeroGrid() {
  const { data: articles, isLoading, error } = useHeroNews();
  const { active, setActive } = useHeroSlider(articles);

  if (isLoading) return <p>در حال بارگذاری اخبار مهم...</p>;
  if (error) return <p>خطا در بارگذاری اخبار: {error.message}</p>;
  if (!articles || articles.length === 0) return <p>هیچ خبری موجود نیست.</p>;

  const activeArticle = articles[active];

  return (
    <Container className="grid lg:grid-cols-12 gap-6 items-center max-md:grid-cols-1">
      {/* <HeroSlider /> */}
      {/* <InteractiveTimeline/> */}
      {/* <BreakingNews /> */}
      <HeroThumbnails
        articles={articles}
        active={active}
        onSelect={setActive}
      />
      <HeroArticleInfo article={activeArticle} />
    </Container>
  );
}
