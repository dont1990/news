"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { iranCities } from "@/constants/iranCities";
import WeatherTile from "./item";

export default function IranWeatherSlider() {
  return (
    <div className="relative w-full">
      <Swiper
        loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        centeredSlides={false}
        grabCursor={true}
        speed={600}
        className="w-full"
      >
        {iranCities.concat(iranCities).map((city, i) => (
          <SwiperSlide
            key={city.en + i}
            className="!w-[180px] sm:!w-[200px] lg:!w-[220px]"
          >
            <WeatherTile city={city.en} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
