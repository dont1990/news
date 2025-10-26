"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { ShareButton } from "@/components/shared/share";
import { IconActionButton } from "@/components/shared/icon-action-button";
import { routes } from "@/routes/routes";
import { Separator } from "@/components/ui/separator";
import CategoryBadge from "@/components/shared/category-badge";
import { HeroMetaInfo } from "./hero-meta-info";
import { Article } from "@/types/article";

type Props = {
  article: Article;
};

export function HeroArticleInfo({ article }: Props) {
  return (
    <div className="lg:col-span-5 flex flex-col justify-center gap-6 text-right">
      <div className="flex items-center">
        <CategoryBadge title={article.category} />
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-foreground line-clamp-3 tracking-tight">
        {article.title}
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed border-s-2 sm:border-s-4 border-primary ps-3 sm:ps-4 md:ps-6 line-clamp-2 sm:line-clamp-3 text-justify">
        {article.description}
      </p>

      <div className="flex flex-wrap gap-3">
        <Link href={routes.news.detail.getHref(article.id)}>
          <Button size="lg">مطالعه کامل خبر</Button>
        </Link>

        <IconActionButton
          icon={<Bookmark className="w-4 h-4" />}
          tooltip="افزودن به نشان‌ها"
          variant="ghost"
          size="lg"
        />
        <ShareButton
          url={article.sourceLink ?? window.location.href}
          title={article.title}
          description={article.description}
          variant="ghost"
          size="lg"
          showLabel={false}
        />
      </div>

      <Separator />
      <HeroMetaInfo article={article} />
    </div>
  );
}
