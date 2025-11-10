"use client";

import { useState } from "react";
import Container from "@/components/shared/container";
import GalleryModal from "@/components/shared/gallery-modal";
import { PageHeader } from "@/components/shared/page-header";
import { useQueryParams } from "@/hooks/useQueryParams";
import { NewspaperFilter } from "@/features/newspaper/components/filter/newspaper-filter";
import { InfiniteLoader } from "@/components/shared/infinite-loader";
import { useNewspapers } from "@/features/newspaper/hooks/useNewspaper";
import Newspaper from "./assets/newspaper";
import NewspaperCard from "./components/newspaper-card";
import EmptyState from "@/components/shared/empty-state";

export default function NewspaperPageContent() {
  const { getParam, setParam } = useQueryParams();

  const search = getParam("search") || "";
  const sort = (getParam("sort") as "az" | "za") || "az";

  const [searchInput, setSearchInput] = useState(search);

  const { newspapers, total, loading, ref, isFetchingNextPage } = useNewspapers(
    {
      search,
      sort,
    }
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleOpenGallery = (index: number) => setSelectedIndex(index);
  const handleCloseGallery = () => setSelectedIndex(null);

  return (
    <>
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
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <NewspaperCard key={idx} loading />
            ))}
          </div>
        ) : newspapers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newspapers.map((paper, idx) => (
              <NewspaperCard
                key={paper.id}
                paper={paper}
                onClick={() => handleOpenGallery(idx)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="هیچ روزنامه‌ای یافت نشد"
            description="لطفاً معیار جستجو را تغییر دهید یا بعداً دوباره تلاش کنید."
            icon={<Newspaper className="h-12 w-12 text-primary" />}
          />
        )}

        {isFetchingNextPage && (
          <InfiniteLoader className="my-6" message="در حال بارگذاری..." />
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
    </>
  );
}
