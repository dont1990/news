import { Metadata } from "next";
import { mockArticles } from "@/app/data/mock-article";
import ArticlePageWrapper from "@/app/components/pages/article/wrapper";

// Generate metadata for the article page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { id } = resolvedParams;

  const article = mockArticles.find((a) => a.id === id);

  if (!article) {
    return {
      title: "مقاله یافت نشد | خبرنامه",
      description: "مقاله مورد نظر یافت نشد.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  const canonicalUrl = `${siteUrl}/article/${id}`;

  return {
    title: `${article.title} | خبرنامه`,
    description: article.description,
    keywords: [article.category, article.author],
    authors: [{ name: article.author }],
    publisher: article.source,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.imageUrl || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.imageUrl || "/placeholder.svg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { id } = resolvedParams;

  return <ArticlePageWrapper id={id} />;
}