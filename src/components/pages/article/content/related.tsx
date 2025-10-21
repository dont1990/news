"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/types";
import { routes } from "@/routes/routes";

interface ArticleRelatedProps {
  currentArticle: Article;
  relatedArticles: Article[];
}

export default function ArticleRelated({
  relatedArticles,
}: ArticleRelatedProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <p className="text-xl mb-6 text-foreground">مقالات مرتبط</p>
      <div className="space-y-6">
        {relatedArticles.map((relatedArticle) => (
          <Link
            key={relatedArticle.id}
            href={routes.news.detail.getHref(relatedArticle.id)}
          >
            <Card className="news-card-hover border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="aspect-video relative overflow-hidden rounded-2xl mb-3">
                  <Image
                    src={relatedArticle.imageUrl || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <p className="font-semibold text-sm mb-2 line-clamp-2 leading-tight">
                  {relatedArticle.title}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium">نام نویسنده</span>
                  <span>{relatedArticle.readTime} دقیقه</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
