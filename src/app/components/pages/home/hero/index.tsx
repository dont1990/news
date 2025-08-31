import React from "react";
import { BreakingNews } from "@/app/components/pages/home/breaking-news";
import { HeroSlider } from "@/app/components/pages/home/hero/hero-slider";
import { InteractiveTimeline } from "@/app/components/test/interactive-timeline";
import { HeroGrid } from "@/app/components/pages/home/hero/hero-grid";

const Hero = () => {
  return (
    <>
      {/* <HeroSlider /> */}

      <HeroGrid />
      {/* <InteractiveTimeline/> */}
      {/* <BreakingNews /> */}
    </>
  );
};

export default Hero;
