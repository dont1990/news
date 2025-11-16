"use client";

import ArrowLeft from "@/assets/shared-icons/arrow-left";
import ArrowRight from "@/assets/shared-icons/arrow-right";

export default function NewspaperSwiperNavigation() {
  return (
    <>
      <div className="swiper-button-prev-custom absolute top-1/2 left-2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full bg-white shadow-md p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors">
        <ArrowLeft className="size-6" />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full bg-white shadow-md p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors">
        <ArrowRight className="size-6" />
      </div>
    </>
  );
}
