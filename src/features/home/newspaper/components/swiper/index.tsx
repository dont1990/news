"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { INewspaper } from "@/types/newspaper";
import GradientOverlays from "./overlay";
import NewspaperSlide from "./slide";
import NewspaperSwiperNavigation from "./navigation";

interface INewspaperSwiperWrapperProps {
  papers: INewspaper[];
  onSlideClick: (index: number) => void;
}

export default function SwiperWrapper({
  papers,
  onSlideClick,
}: INewspaperSwiperWrapperProps) {
  return (
    <div className="relative overflow-hidden mt-6">
      <GradientOverlays />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={24}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          bulletClass: "swiper-pagination-bullet bg-gray-300 opacity-50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
        }}
        autoplay={{ delay: 4500, disableOnInteraction: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="relative"
      >
        {papers.map((paper, idx) => (
          <SwiperSlide key={paper.id}>
            <NewspaperSlide paper={paper} onClick={() => onSlideClick(idx)} />
          </SwiperSlide>
        ))}

        <NewspaperSwiperNavigation />
        <div className="swiper-pagination-custom mt-6 flex justify-center gap-1 z-30 relative"></div>
      </Swiper>
    </div>
  );
}
