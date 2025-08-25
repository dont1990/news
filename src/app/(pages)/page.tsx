import { Header } from "@/app/components/header";
import { ArticleCard } from "@/app/components/article-card";
import { NewsGrid } from "@/app/components/news-grid";
import { Sidebar } from "@/app/components/sidebar";
import { Footer } from "@/app/components/footer";
import { mockArticles } from "../data/mock-article";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="news-heading text-4xl md:text-5xl text-foreground mb-4">
              Stay Informed with Global News
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the latest breaking news, in-depth analysis, and trending
              stories from around the world
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          <div className="xl:col-span-3 space-y-12">
            <section>
              <div className="flex items-center mb-8">
                <h3 className="news-heading text-2xl text-foreground">
                  Featured Story
                </h3>
                <div className="flex-1 h-px bg-border ml-4"></div>
              </div>
              <ArticleCard article={mockArticles[0]} />
            </section>

            <NewsGrid articles={mockArticles} />
          </div>

          <div className="xl:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
