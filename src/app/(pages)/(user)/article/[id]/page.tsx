"use client";

import { use } from "react";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import {
  Clock,
  User,
  Calendar,
  Share2,
  Bookmark,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { mockArticles } from "@/app/data/mock-article";

// Related articles function
const getRelatedArticles = (currentArticle: (typeof mockArticles)[0]) => {
  return mockArticles
    .filter(
      (article) =>
        article.id !== currentArticle.id &&
        article.category === currentArticle.category
    )
    .slice(0, 3);
};

export default function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const { id } = resolvedParams;

  const article = mockArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background" dir="rtl">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <p className="news-heading text-3xl mb-4">مقاله یافت نشد</p>
            <p className="text-muted-foreground mb-6">
              مقاله‌ای که دنبال آن هستید وجود ندارد.
            </p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                بازگشت به صفحه اصلی
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article);
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "fa-IR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button
            variant="ghost"
            className="gap-2 hover:bg-muted text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            بازگشت به اخبار
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
        {/* Main article content */}
        <article className="xl:col-span-3">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Link href={`/category/${article.category.toLowerCase()}`}>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer px-3 py-1"
                >
                  {article.category}
                </Badge>
              </Link>
              {article.sourceLink ? (
                <a
                  href={article.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                  {article.source}
                </a>
              ) : (
                <span className="text-sm text-muted-foreground">
                  {article.source}
                </span>
              )}
            </div>

            <p className="news-heading text-4xl md:text-5xl mb-6 leading-tight text-foreground">
              {article.title}
            </p>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span className="font-medium">نویسنده: {article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>تاریخ انتشار: {publishedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>مدت زمان مطالعه: {article.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <Share2 className="h-4 w-4" />
                اشتراک‌گذاری
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 hover:bg-secondary hover:text-secondary-foreground transition-colors bg-transparent"
              >
                <Bookmark className="h-4 w-4" />
                ذخیره برای بعد
              </Button>
            </div>
          </div>

          <div className="mb-10">
            <div className="relative overflow-hidden rounded-xl shadow-lg h-96 md:h-[500px]">
              <Image
                src={article.imageUrl || "/placeholder.svg"}
                alt={article.title}
                className="w-full object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          <div
            className="prose prose-lg prose-gray max-w-none news-body leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <Separator className="my-10" />

          <div className="bg-gradient-to-r from-muted/50 to-muted/30 p-8 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="news-heading text-xl mb-2">
                  درباره {article.author}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {article.author} خبرنگار ارشد {article.source} است و بیش از ۱۰
                  سال تجربه در پوشش خبری حوزه {article.category.toLowerCase()}{" "}
                  دارد.
                </p>
              </div>
            </div>
          </div>
        </article>

        <aside className="xl:col-span-1">
          <div className="sticky top-48">
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="news-heading text-xl mb-6 text-foreground">
                مقالات مرتبط
              </p>
              <div className="space-y-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/article/${relatedArticle.id}`}
                  >
                    <Card className="news-card-hover border-0 shadow-sm">
                      <CardContent className="p-4">
                        <div className="aspect-video relative overflow-hidden rounded-lg mb-3">
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
                          <span className="font-medium">
                            {relatedArticle.author}
                          </span>
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
