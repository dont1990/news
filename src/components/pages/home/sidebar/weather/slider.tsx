"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { iranCities } from "@/constants/iranCities";
import WeatherTile from "./item";
import { cn } from "@/lib/utils/cn";

interface IranWeatherSliderProps {
  variant?: "horizontal" | "vertical";
  className?: string;
}

export default function IranWeatherSlider({
  variant = "horizontal",
  className,
}: IranWeatherSliderProps) {
  const isVertical = variant === "vertical";

  return (
    <div
      className={cn(
        "relative w-full mb-0",
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
        {iranCities.map((city, i) => (
          <SwiperSlide
            key={city.en + i}
            className={cn(
              isVertical
                ? "!h-full !w-auto flex items-center justify-center"
                : "!w-[180px] sm:!w-[200px] lg:!w-[220px]"
            )}
          >
            <WeatherTile city={city.en} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
