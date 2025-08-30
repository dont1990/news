import React from "react";
import { BreakingNews } from "@/app/components/test/breaking-news";
import { HeroSlider } from "@/app/components/test/hero-slider";
import { InteractiveTimeline } from "@/app/components/test/interactive-timeline";
import { HeroGrid } from "@/app/components/test/hero-grid";

const Hero = () => {
  return (
    <>
      {/* <HeroSlider /> */}

      <HeroGrid />
      {/* <InteractiveTimeline/> */}
      <BreakingNews />
    </>
  );
};

export default Hero;
