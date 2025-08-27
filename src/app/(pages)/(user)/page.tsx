import { ArticleCard } from "@/app/components/article-card";
import { NewsGrid } from "@/app/components/news-grid";
import { Sidebar } from "@/app/components/sidebar";
import { mockArticles } from "../../data/mock-article";
import SectionTitle from "../../components/section-title";
import { BreakingNews } from "@/app/components/test/breaking-news";
import { HeroSlider } from "@/app/components/test/hero-slider";
import { InteractiveTimeline } from "@/app/components/test/interactive-timeline";
import { HeroGrid } from "@/app/components/test/hero-grid";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      {/* <HeroGrid /> */}
      {/* <InteractiveTimeline/> */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <p className="news-heading text-4xl md:text-5xl text-foreground mb-4">
              با اخبار جهانی همراه باشید
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              آخرین اخبار فوری، تحلیل‌های عمیق و داستان‌های پرطرفدار از سراسر
              جهان
            </p>
          </div>
        </div>
      </section>

      {/* <BreakingNews/> */}

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
            <div className="sticky top-48">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
