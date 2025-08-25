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

// Extended mock articles data with full content
const mockArticles = [
  {
    id: "1",
    title: "Breaking: Major Climate Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite on unprecedented climate action plan that could reshape global environmental policy for decades to come.",
    content: `
      <p>In a landmark decision that has been years in the making, representatives from 195 countries have reached a comprehensive agreement on climate action that experts are calling the most significant environmental accord since the Paris Agreement.</p>
      
      <p>The summit, held over five intensive days in Geneva, saw unprecedented cooperation between nations that have historically been at odds over environmental policy. The agreement includes binding commitments to reduce carbon emissions by 60% by 2035, with interim targets every five years.</p>
      
      <p>"This is a watershed moment for our planet," said Dr. Elena Rodriguez, the summit's chief negotiator. "We've moved beyond rhetoric to concrete, measurable action that will benefit future generations."</p>
      
      <p>Key provisions of the agreement include:</p>
      <ul>
        <li>Mandatory transition to renewable energy sources for all signatory nations</li>
        <li>Establishment of a $500 billion global climate fund</li>
        <li>Technology sharing agreements for developing nations</li>
        <li>Strict penalties for non-compliance with emission targets</li>
      </ul>
      
      <p>The agreement will take effect on January 1, 2025, with the first compliance review scheduled for 2027. Environmental groups have praised the accord while acknowledging the challenges ahead in implementation.</p>
    `,
    author: "Sarah Johnson",
    publishedAt: "2024-01-15T10:30:00Z",
    category: "Environment",
    imageUrl: "/climate-summit-leaders.png",
    source: "Global News Network",
    sourceLink: "https://globalnews.com", // Added source link
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Tech Giants Announce New AI Safety Standards",
    excerpt:
      "Leading technology companies collaborate on establishing industry-wide artificial intelligence safety protocols.",
    content: `
      <p>In an unprecedented move, the world's largest technology companies have come together to establish comprehensive safety standards for artificial intelligence development and deployment.</p>
      
      <p>The consortium, which includes major players from Silicon Valley, Europe, and Asia, announced the formation of the Global AI Safety Alliance (GASA) during a joint press conference in San Francisco.</p>
      
      <p>"We recognize that with great technological power comes great responsibility," said Dr. Michael Chen, spokesperson for the alliance. "These standards will ensure AI development serves humanity's best interests."</p>
      
      <p>The new standards address several critical areas:</p>
      <ul>
        <li>Mandatory safety testing before AI system deployment</li>
        <li>Transparency requirements for AI decision-making processes</li>
        <li>Data privacy protections in AI training</li>
        <li>Regular audits of AI systems in production</li>
      </ul>
      
      <p>The initiative comes amid growing concerns about AI safety and calls for regulation from governments worldwide. Implementation is expected to begin in Q2 2024.</p>
    `,
    author: "Michael Chen",
    publishedAt: "2024-01-15T09:15:00Z",
    category: "Technology",
    imageUrl: "/ai-technology-safety-meeting.png",
    source: "Tech Today",
    sourceLink: "https://techtoday.com", // Added source link
    readTime: "3 min read",
  },
  {
    id: "3",
    title: "Global Markets Show Strong Recovery Signs",
    excerpt:
      "International financial markets demonstrate resilience with positive growth indicators across major economies.",
    content: `
      <p>Financial markets across the globe are showing robust signs of recovery, with major indices posting their strongest quarterly performance in over two years.</p>
      
      <p>The positive momentum has been driven by a combination of factors including improved corporate earnings, stabilizing inflation rates, and renewed investor confidence in emerging technologies.</p>
      
      <p>"We're seeing a fundamental shift in market sentiment," explained Emma Rodriguez, chief market analyst at Financial Insights. "The data suggests we may be entering a new phase of sustainable growth."</p>
      
      <p>Key market indicators include:</p>
      <ul>
        <li>S&P 500 up 12% over the past quarter</li>
        <li>European markets showing 8% gains</li>
        <li>Asian markets leading with 15% growth</li>
        <li>Unemployment rates declining in major economies</li>
      </ul>
      
      <p>Analysts remain cautiously optimistic, noting that while current trends are encouraging, global economic stability will depend on continued policy coordination between major economies.</p>
    `,
    author: "Emma Rodriguez",
    publishedAt: "2024-01-15T08:45:00Z",
    category: "Business",
    imageUrl: "/stock-market-trading-floor.png",
    source: "Financial Times",
    sourceLink: "https://ft.com", // Added source link
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Revolutionary Medical Breakthrough in Cancer Treatment",
    excerpt:
      "Scientists develop new immunotherapy approach showing remarkable success rates in clinical trials.",
    content: `
      <p>A groundbreaking immunotherapy treatment has shown unprecedented success rates in clinical trials, offering new hope for cancer patients worldwide.</p>
      
      <p>The treatment, developed by an international team of researchers, uses a novel approach to enhance the body's natural immune response against cancer cells.</p>
      
      <p>"This represents a paradigm shift in how we approach cancer treatment," said Dr. James Wilson, lead researcher on the project. "We're not just treating the disease; we're empowering the body to fight it more effectively."</p>
      
      <p>Clinical trial results show:</p>
      <ul>
        <li>85% response rate in previously untreatable cases</li>
        <li>Minimal side effects compared to traditional chemotherapy</li>
        <li>Sustained remission in 70% of patients after two years</li>
        <li>Effectiveness across multiple cancer types</li>
      </ul>
      
      <p>The treatment is expected to enter Phase III trials next year, with regulatory approval potentially coming by 2026.</p>
    `,
    author: "Dr. James Wilson",
    publishedAt: "2024-01-15T07:30:00Z",
    category: "Health",
    imageUrl: "/medical-research-lab.png",
    source: "Medical Journal",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "Space Mission Discovers Potential Signs of Life",
    excerpt:
      "NASA's latest Mars rover findings suggest possible microbial activity beneath the planet's surface.",
    content: `
      <p>NASA's Perseverance rover has made what scientists are calling the most significant discovery in the search for extraterrestrial life, finding chemical signatures that strongly suggest microbial activity beneath Mars' surface.</p>
      
      <p>The discovery was made during analysis of rock samples collected from the Jezero Crater, an ancient lake bed that scientists believe once harbored conditions suitable for life.</p>
      
      <p>"These findings represent a major milestone in astrobiology," said Dr. Lisa Park, mission scientist. "While we haven't found life itself, we've found compelling evidence that life may have existed on Mars."</p>
      
      <p>Key findings include:</p>
      <ul>
        <li>Organic compounds consistent with biological processes</li>
        <li>Mineral formations typically created by living organisms</li>
        <li>Isotopic ratios suggesting metabolic activity</li>
        <li>Preserved biosignatures in ancient rock layers</li>
      </ul>
      
      <p>The samples will be returned to Earth in 2031 for more detailed analysis, which could provide definitive proof of past life on Mars.</p>
    `,
    author: "Lisa Park",
    publishedAt: "2024-01-15T06:00:00Z",
    category: "Science",
    imageUrl: "/mars-rover-space-exploration.png",
    source: "Space News",
    sourceLink: "https://spacenews.com", // Added source link
    readTime: "4 min read",
  },
  {
    id: "6",
    title: "International Sports Championship Breaks Viewership Records",
    excerpt:
      "Global audience reaches unprecedented numbers as athletes compete in thrilling championship finals.",
    content: `
      <p>The International Athletics Championship has shattered all previous viewership records, with over 2.5 billion people tuning in to watch the thrilling finals across multiple events.</p>
      
      <p>The championship, held in Tokyo's Olympic Stadium, featured record-breaking performances and dramatic finishes that captivated audiences worldwide.</p>
      
      <p>"This has been an extraordinary celebration of human athletic achievement," said Tom Anderson, sports broadcaster. "The level of competition and the global audience response has been unprecedented."</p>
      
      <p>Championship highlights include:</p>
      <ul>
        <li>Three world records broken in track events</li>
        <li>First-time medal winners from 15 countries</li>
        <li>Closest finish in championship history</li>
        <li>Record social media engagement with 500M interactions</li>
      </ul>
      
      <p>The success of this championship has already led to discussions about expanding the format and increasing the frequency of international competitions.</p>
    `,
    author: "Tom Anderson",
    publishedAt: "2024-01-15T05:15:00Z",
    category: "Sports",
    imageUrl: "/sports-championship-stadium-crowd.png",
    source: "Sports Central",
    sourceLink: "https://sportscentral.com", // Added source link
    readTime: "2 min read",
  },
];

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

  // Find the article by ID
  const article = mockArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="news-heading text-3xl mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Return to Homepage
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
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="gap-2 hover:bg-muted text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
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

              <h1 className="news-heading text-4xl md:text-5xl mb-6 leading-tight text-foreground">
                {article.title}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="font-medium">By {article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Share2 className="h-4 w-4" />
                  Share Article
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 hover:bg-secondary hover:text-secondary-foreground transition-colors bg-transparent"
                >
                  <Bookmark className="h-4 w-4" />
                  Save for Later
                </Button>
              </div>
            </div>

            <div className="mb-10">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={article.imageUrl || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-96 md:h-[500px] object-cover"
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
                  <h3 className="news-heading text-xl mb-2">
                    About {article.author}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.author} is a senior correspondent for{" "}
                    {article.source}, specializing in{" "}
                    {article.category.toLowerCase()} coverage with over 10 years
                    of experience in journalism.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <aside className="xl:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="news-heading text-xl mb-6 text-foreground">
                  Related Articles
                </h2>
                <div className="space-y-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      href={`/article/${relatedArticle.id}`}
                    >
                      <Card className="news-card-hover border-0 shadow-sm">
                        <CardContent className="p-4">
                          <div className="aspect-video relative overflow-hidden rounded-lg mb-3">
                            <img
                              src={
                                relatedArticle.imageUrl || "/placeholder.svg"
                              }
                              alt={relatedArticle.title}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <h3 className="font-semibold text-sm mb-2 line-clamp-2 leading-tight">
                            {relatedArticle.title}
                          </h3>
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

      <Footer />
    </div>
  );
}
