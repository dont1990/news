"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/container";
import { Newspaper } from "lucide-react";
import GalleryModal from "@/components/shared/gallery-modal";
import { PageHeader } from "@/components/shared/page-header";
import { useQueryParams } from "@/hooks/useQueryParams";
import { NewspaperFilter } from "@/components/pages/newspaper/filter/newspaper-filter";
import { InfiniteLoader } from "@/components/shared/infinite-loader";
import { useNewspapers } from "@/components/pages/newspaper/filter/hooks/useNewspaper";

export default function NewspaperPage() {
  const { getParam, setParam } = useQueryParams();

  const search = getParam("search") || "";
  const sort = (getParam("sort") as "az" | "za") || "az";

  const [searchInput, setSearchInput] = useState(search);

  const { newspapers, total, loading, ref, isFetchingNextPage } =
    useNewspapers({
      search,
      sort,
    });

  

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleOpenGallery = (index: number) => setSelectedIndex(index);
  const handleCloseGallery = () => setSelectedIndex(null);

  return (
    <section className="w-full bg-gray-50 py-10 min-h-screen">
      <PageHeader
        title="روزنامه‌ها"
        subtitle="مرور و مشاهده نسخه‌های مختلف روزنامه‌های برتر"
        icon={<Newspaper className="h-6 w-6 text-primary" />}
        badgeText="روزنامه"
        badgeCount={total}
        loading={loading}
        category="news"
      />
      <Container>
        <NewspaperFilter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearch={(value) => setParam("search", value ?? searchInput)}
          sort={sort}
          setSort={(v) => setParam("sort", v)}
        />

        {/* 📰 Newspaper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newspapers.map((paper, idx) => (
            <div
              key={paper.id}
              onClick={() => handleOpenGallery(idx)}
              className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="relative w-full h-64">
                <Image
                  src={paper.imageUrl}
                  alt={paper.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-base line-clamp-2 group-hover:text-primary transition-colors">
                  {paper.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                  {paper.headline}
                </p>
                <p className="text-xs text-gray-400 mt-2">{paper.date}</p>
              </div>
            </div>
          ))}
        </div>

        {isFetchingNextPage && (
          <InfiniteLoader className="my-6" message="در حال بارگذاری..." />
        )}

        {newspapers.length === 0 && !loading && (
          <p className="text-center text-gray-500 mt-10">موردی یافت نشد.</p>
        )}

        <div ref={ref} aria-hidden="true" />
      </Container>

      {selectedIndex !== null && newspapers && (
        <GalleryModal
          images={newspapers.map((p) => ({
            src: p.imageUrl,
            alt: p.name,
            caption: `${p.name} — ${p.headline}`,
          }))}
          isOpen={selectedIndex !== null}
          initialIndex={selectedIndex}
          onClose={handleCloseGallery}
        />
      )}
    </section>
  );
}
