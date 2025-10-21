"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Container from "@/components/shared/container";
import { Search, Filter, Newspaper } from "lucide-react";
import GalleryModal from "@/components/shared/gallery-modal";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNewspapers } from "@/components/pages/home/newspaper/hooks/useNewspapers";
import { PageHeader } from "@/components/shared/page-header";

export default function NewspaperPage() {
  const { data, isLoading, error } = useNewspapers();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (!data) return [];
    const filteredData = data.filter(
      (n) =>
        n.name.toLowerCase().includes(search.toLowerCase()) ||
        n.headline.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "oldest") return filteredData.reverse();
    return filteredData;
  }, [data, search, sort]);

  const handleOpenGallery = (index: number) => setSelectedIndex(index);
  const handleCloseGallery = () => setSelectedIndex(null);

  if (isLoading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        در حال بارگذاری...
      </div>
    );
  if (error)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-red-500">
        خطا در دریافت اطلاعات
      </div>
    );

  return (
    <section className="w-full bg-gray-50 py-10 min-h-screen">
      {/* Hero / Title */}
      <PageHeader
        title="روزنامه‌ها"
        subtitle="مرور و مشاهده نسخه‌های مختلف روزنامه‌های برتر"
        icon={<Newspaper className="h-6 w-6 text-primary" />}
        badgeText="روزنامه"
        badgeCount={data?.length ?? 0}
        loading={isLoading}
        category="news"
      />
      <Container>
        {/* Filter / Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center w-full md:w-1/2 gap-2">
            <Search className="text-gray-400 w-5 h-5" />
            <Input
              placeholder="جستجو بین روزنامه‌ها..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex items-center gap-3">
            <Filter className="text-gray-400 w-5 h-5" />
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">جدیدترین</SelectItem>
                <SelectItem value="oldest">قدیمی‌ترین</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((paper, idx) => (
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
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">موردی یافت نشد.</p>
        )}
      </Container>

      {/* Gallery Modal */}
      {selectedIndex !== null && filtered && (
        <GalleryModal
          images={filtered.map((p) => ({
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
