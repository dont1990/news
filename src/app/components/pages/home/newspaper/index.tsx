"use client";

import { useNewspapers } from "./useNewspapers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Container from "@/app/components/shared/container";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TopNewspapersSwiper() {
  const { data, isLoading, error } = useNewspapers();

  if (isLoading) return <p className="text-center mt-4">در حال بارگذاری...</p>;
  if (error)
    return (
      <p className="text-center mt-4 text-red-500">خطا در دریافت اطلاعات</p>
    );

  return (
   <section className="w-full py-5 bg-primary/5 relative">
  <Container>
    <h2 className="text-xl font-bold mb-4">تیتر روزنامه‌ها</h2>

    <div className="relative overflow-hidden">
      {/* Left overlay */}
      <div className="absolute h-36 w-40 bg-gradient-to-r from-black/20 rounded-full to-transparent pointer-events-none z-20 top-1/2 -left-12 -translate-y-1/2" />
      {/* Right overlay */}
      <div className="absolute h-36 w-40 bg-gradient-to-l from-black/20 rounded-full to-transparent pointer-events-none z-20 top-1/2 -right-12 -translate-y-1/2" />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={16}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          bulletClass: "swiper-pagination-bullet bg-gray-400 opacity-50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {data?.map((paper) => (
          <SwiperSlide key={paper.id}>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-60 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src={paper.imageUrl}
                  alt={paper.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm line-clamp-2">{paper.name}</p>
                <p className="text-xs text-foreground mt-1 line-clamp-2">{paper.headline}</p>
                <p className="text-xs text-gray-400 mt-1">{paper.date}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows with Lucide */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-3 -translate-y-1/2 z-30 size-12 flex items-center justify-center rounded-full bg-primary text-white shadow cursor-pointer">
          <ArrowLeft className="size-8" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-3 -translate-y-1/2 z-30 size-12 flex items-center justify-center rounded-full bg-primary text-white shadow cursor-pointer">
          <ArrowRight className="size-8" />
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom mt-6 flex justify-center gap-2 z-30 relative"></div>
      </Swiper>
    </div>
  </Container>
</section>

  );
}
