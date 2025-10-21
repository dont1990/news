"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ClockTile from "./item";

const capitals = [
  { cityEn: "London", cityFa: "لندن", timezone: "Europe/London" },
  { cityEn: "New York", cityFa: "نیویورک", timezone: "America/New_York" },
  { cityEn: "Tokyo", cityFa: "توکیو", timezone: "Asia/Tokyo" },
  { cityEn: "Paris", cityFa: "پاریس", timezone: "Europe/Paris" },
  { cityEn: "Beijing", cityFa: "پکن", timezone: "Asia/Shanghai" },
];

export default function WorldClockSlider() {
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
        {capitals.concat(capitals).map((cap, i) => (
          <SwiperSlide
            key={cap.cityEn + i}
            className="!w-[180px] sm:!w-[200px] lg:!w-[220px]"
          >
            <ClockTile city={cap.cityFa} timezone={cap.timezone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
