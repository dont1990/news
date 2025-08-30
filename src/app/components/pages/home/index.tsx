import { HomePageSidebar } from "@/app/components/pages/home/sidebar";
import Hero from "./hero";
import LatestNews from "./latest-news";
import HomePageIntro from "./intro";
import Container from "../../shared/container";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomePageIntro />

      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          <div className="xl:col-span-3 space-y-12">
            {/* <FeaturedNews /> */}
            <LatestNews />
          </div>

          <HomePageSidebar />
        </div>
      </Container>
    </>
  );
}
