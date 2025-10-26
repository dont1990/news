"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Eye, Play, Bookmark } from "lucide-react";
import Image from "next/image";
import { useHeroNews } from "../hooks/useHeroNews"; // make sure path is correct
import CategoryBadge from "@/components/shared/category-badge"; // import your component
import { ShareButton } from "@/components/shared/share";
import Link from "next/link";
import { routes } from "@/routes/routes";
import DateText from "@/components/shared/date-text";
import Container from "@/components/shared/container";
import TimeAgo from "@/components/shared/time-ago";
import { IconActionButton } from "@/components/shared/icon-action-button";
import { Separator } from "@/components/ui/separator";

export default function HeroGrid() {
  const { data: articles, isLoading, error } = useHeroNews();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % (articles?.length ?? 0));
    }, 8000);
    return () => clearInterval(interval);
  }, [articles?.length]);

  if (isLoading) return <p>در حال بارگذاری اخبار مهم...</p>;
  if (error) return <p>خطا در بارگذاری اخبار: {error.message}</p>;
  if (!articles || articles.length === 0) return <p>هیچ خبری موجود نیست.</p>;
  const activeArticle = articles[active];

  return (
    <Container className="grid lg:grid-cols-12 gap-6 items-center max-md:grid-cols-1">
      {/* Right: Slider Thumbnails */}
      <div className="lg:col-span-7 flex gap-3 h-[500px] overflow-hidden">
        {articles.map((article, index) => (
          <button
            key={article.id}
            onClick={() => setActive(index)}
            className={`relative overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)] ${
              index === active ? "flex-[3]" : "flex-[0.7] hover:flex-[1]"
            }`}
          >
            {article.imageUrl ? (
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                تصویر موجود نیست
              </div>
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-700 ${
                index === active ? "opacity-90" : "opacity-60"
              }`}
            />
            {active === index && (
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 text-white text-start transition-all duration-500 flex flex-col gap-2`}
              >
                <CategoryBadge title={article.category} className="mb-2" />
                <p className="font-bold text-lg line-clamp-2 leading-6">
                  {article.title}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Left: Active Story Info */}
      <div className="lg:col-span-5 flex flex-col justify-center gap-6 text-right">
        {/* Category */}
        <div className="flex items-center">
          <CategoryBadge title={activeArticle.category} />
        </div>

        {/* Title */}
        <p
          className="
    text-2xl 
    sm:text-3xl 
    md:text-4xl 
    font-extrabold 
    leading-tight 
    text-foreground 
    line-clamp-3 
    tracking-tight
  "
        >
          {activeArticle.title}
        </p>

        {/* Description */}
        <p
          className="
    text-sm 
    sm:text-base 
    md:text-lg 
    text-muted-foreground 
    leading-relaxed 
    border-s-2 
    sm:border-s-4 
    border-primary 
    ps-3 
    sm:ps-4 
    md:ps-6 
    line-clamp-2 
    sm:line-clamp-3
    text-justify
  "
        >
          {activeArticle.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link href={routes.news.detail.getHref(activeArticle.id)}>
            <Button size="lg">مطالعه کامل خبر</Button>
          </Link>

          <IconActionButton
            icon={<Bookmark className="w-4 h-4" />}
            tooltip="افزودن به نشان‌ها"
            variant="ghost"
            size="lg"
          />
          <ShareButton
            url={activeArticle.sourceLink ?? window.location.href}
            title={activeArticle.title}
            description={activeArticle.description}
            variant="ghost"
            size="lg"
            showLabel={false}
          />
        </div>

        <Separator />
        {/* Meta Info */}
        <div className="flex flex-wrap justify-end items-center gap-3 lg:gap-4 text-sm text-muted-foreground">
          {activeArticle.source && (
            <span className="font-medium text-foreground">
              {activeArticle.source}
            </span>
          )}
          {activeArticle.publishedAt && (
            <>
              <span>•</span>
              <DateText
                date={activeArticle.publishedAt}
                className="text-muted-foreground me-0.5"
              />
            </>
          )}
          {activeArticle.publishedAt && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>
                  <TimeAgo date={activeArticle.publishedAt} />
                </span>
              </div>
            </>
          )}
          {activeArticle.views && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span>{activeArticle.views}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
