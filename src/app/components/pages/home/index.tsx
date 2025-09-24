import { HomePageSidebar } from "@/app/components/pages/home/sidebar";
import Hero from "./hero";
import LatestNews from "./latest-news";
import HomePageIntro from "./intro";
import Container from "../../shared/container";
import TechNews from "./tech-news";
import { BreakingNews } from "./breaking-news";
import { LiveRates } from "./live-rates";
import SportNews from "./sport-news";
import NewspapersGrid from "./newspaper";
import { Suspense } from "react";

export default function HomePageContent() {
  return (
    <>
      <Hero />
      <HomePageIntro />

      <Suspense fallback={"loading ..."}>
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-40">
            <div className="xl:col-span-3 space-y-20">
              {/* <FeaturedNews /> */}
              <BreakingNews />
              <SportNews />
              <LiveRates />
              <LatestNews />
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
