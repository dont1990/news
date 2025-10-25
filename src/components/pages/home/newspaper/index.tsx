"use client";

import { useState } from "react";
import { useNewspapers } from "./hooks/useNewspapers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Container from "@/components/shared/container";
import { Newspaper } from "lucide-react";
import SectionTitle from "@/components/shared/section-title";
import GalleryModal from "@/components/shared/gallery-modal";
import ArrowLeft from "@/assets/shared-icons/arrow-left";
import ArrowRight from "@/assets/shared-icons/arrow-right";

export default function TopNewspapersSwiper() {
  const { data, isLoading, error } = useNewspapers();

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openGallery = (index: number) => {
    setSelectedIndex(index);
    setIsGalleryOpen(true);
  };

  if (isLoading)
    return <p className="text-center mt-4 text-gray-500">در حال بارگذاری...</p>;
  if (error)
    return (
      <p className="text-center mt-4 text-red-500">خطا در دریافت اطلاعات</p>
    );

  return (
    <section className="w-full py-10 bg-gray-50 relative">
      <div className="bg-primary/5 absolute inset-0 w-1/2 mr-auto">

      </div>
      <Container>
        <SectionTitle
          link="/newspaper"
          title="روزنامه‌ها"
          icon={<Newspaper className="size-6 text-primary" />}
        />

        <div className="relative overflow-hidden mt-6">
          {/* Gradient overlays */}
          <div className="absolute h-36 w-40 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-20 top-1/2 -left-12 -translate-y-1/2 rounded-full" />
          <div className="absolute h-36 w-40 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-20 top-1/2 -right-12 -translate-y-1/2 rounded-full" />

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
            {data?.map((paper, idx) => (
              <SwiperSlide key={paper.id}>
                <div
                  onClick={() => openGallery(idx)}
                  className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-102 hover:shadow-2xl bg-white"
                >
                  <div className="relative w-full h-64 md:h-72 lg:h-80">
                    <Image
                      src={paper.imageUrl}
                      alt={paper.name}
                      fill
                      className="object-cover rounded-t-2xl transition-transform duration-300"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity rounded-t-2xl"></div>
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-sm md:text-base line-clamp-2 text-gray-800 group-hover:text-primary transition-colors">
                      {paper.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">
                      {paper.headline}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">{paper.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full bg-white shadow-md p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors">
              <ArrowLeft className="size-6" />
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 right-2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full bg-white shadow-md p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors">
              <ArrowRight className="size-6" />
            </div>

            {/* Pagination */}
            <div className="swiper-pagination-custom mt-6 flex justify-center gap-.5 z-30 relative"></div>
          </Swiper>
        </div>
      </Container>

      {/* Gallery Modal */}
      {data && (
        <GalleryModal
          images={data.map((p) => ({
            src: p.imageUrl,
            alt: p.name,
            caption: `${p.name} — ${p.headline}`,
          }))}
          isOpen={isGalleryOpen}
          initialIndex={selectedIndex}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </section>
  );
}
