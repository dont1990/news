"use client";

import { iranCities } from "@/app/constants/iranCities";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import WeatherWidget from "./item";

export default function IranWeatherTicker() {
  return (
    <div className="w-full h-36 overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={1} // show 1 item at a time
        loop={true} // infinite loop
        modules={[Autoplay]}
        autoplay={{
          delay: 2000, // 2 seconds per city
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800} // animation speed
        className="h-full"
      >
        {iranCities.map((city) => (
          <SwiperSlide
            key={city.en}
            className="flex justify-center items-center h-full"
          >
            <WeatherWidget city={city.en} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
