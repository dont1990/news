import { Header } from "@/app/components/header";
import { ArticleCard } from "@/app/components/article-card";
import { NewsGrid } from "@/app/components/news-grid";
import { Sidebar } from "@/app/components/sidebar";
import { Footer } from "@/app/components/footer";
import { mockArticles } from "../data/mock-article";
import SectionTitle from "../components/section-title";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="news-heading text-4xl md:text-5xl text-foreground mb-4">
              با اخبار جهانی همراه باشید
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              آخرین اخبار فوری، تحلیل‌های عمیق و داستان‌های پرطرفدار از سراسر جهان
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          <div className="xl:col-span-3 space-y-12">
            <section>
              <SectionTitle title="داستان ویژه" />
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
