import { HomePageSidebar } from "@/features/home/sidebar";
import Hero from "./hero";
import LatestNews from "./latest-news";
import Container from "../../components/shared/container";
import TechNews from "./tech-news";
import { LiveRates } from "./live-rates";
import SportNews from "./sport-news";
import NewspapersGrid from "./newspaper";
import { Suspense } from "react";
import { BreakingNews } from "./breaking-news";

export default function HomePageContent() {
  return (
    <>
      <Hero />
      {/* <PageHeader
        title="با اخبار جهانی همراه باشید"
        subtitle="آخرین اخبار فوری، تحلیل‌های عمیق و داستان‌های پرطرفدار از سراسر جهان"
      /> */}

      <Suspense fallback={"loading ..."}>
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-0">
            <div className="xl:col-span-3 space-y-20">
              {/* <FeaturedNews /> */}
              <div className="flex flex-col gap-6">
                <BreakingNews />
                <LiveRates />
                {/* <IranWeatherSlider />
                <WorldClockSlider /> */}
              </div>
              <LatestNews />
              <SportNews />
              <TechNews />
            </div>

            <HomePageSidebar />
          </div>
        </Container>
        <NewspapersGrid />
      </Suspense>
    </>
  );
}
