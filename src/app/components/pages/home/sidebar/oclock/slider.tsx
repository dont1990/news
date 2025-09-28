"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import WorldClockWidget from "./item";

const capitals = [
  { cityEn: "London", cityFa: "لندن", timezone: "Europe/London" },
  { cityEn: "New York", cityFa: "نیویورک", timezone: "America/New_York" },
  { cityEn: "Tokyo", cityFa: "توکیو", timezone: "Asia/Tokyo" },
  { cityEn: "Paris", cityFa: "پاریس", timezone: "Europe/Paris" },
  { cityEn: "Beijing", cityFa: "پکن", timezone: "Asia/Shanghai" },
];

export default function WorldClockTicker() {
  return (
    <div className="w-full h-35 overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        className="h-full"
      >
        {capitals.map(({ cityFa, timezone }) => (
          <SwiperSlide
            key={cityFa}
            className="flex justify-center items-center h-full"
          >
            <WorldClockWidget city={cityFa} timezone={timezone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
