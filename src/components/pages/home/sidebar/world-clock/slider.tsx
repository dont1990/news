"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ClockTile from "./item";
import { cn } from "@/lib/utils/cn";
import { capitals } from "./data/capitals";

interface WorldClockSliderProps {
  variant?: "horizontal" | "vertical";
  className?: string;
}

export default function WorldClockSlider({
  variant = "horizontal",
  className,
}: WorldClockSliderProps) {
  const isVertical = variant === "vertical";

  return (
    <div
      className={cn(
        "relative w-full",
        isVertical ? "h-44" : "h-auto",
        className
      )}
    >
      <Swiper
        modules={isVertical ? [Autoplay] : []}
        direction={isVertical ? "vertical" : "horizontal"}
        loop={true}
        slidesPerView={isVertical ? 1 : "auto"}
        spaceBetween={20}
        centeredSlides={false}
        grabCursor={true}
        speed={600}
        autoplay={
          isVertical
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : undefined
        }
        className="w-full h-full"
      >
        {capitals.map((cap, i) => (
          <SwiperSlide
            key={cap.cityEn + i}
            className={cn(
              isVertical
                ? "!h-full !w-auto flex items-center justify-center mb-0"
                : "!w-[180px] sm:!w-[200px] lg:!w-[220px]"
            )}
          >
            <ClockTile city={cap.cityFa} timezone={cap.timezone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
