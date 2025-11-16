import GalleryModal from "@/components/shared/gallery-modal";
import { INewspaper } from "@/types/newspaper";
import React from "react";

type INewspaperGalleryProps = {
  galleryItems: INewspaper[];
  isGalleryOpen: boolean;
  selectedIndex: number;
  setIsGalleryOpen: (v: boolean) => void;
};

const NewspaperGallery = ({
  galleryItems,
  isGalleryOpen,
  selectedIndex,
  setIsGalleryOpen,
}: INewspaperGalleryProps) => {
  return (
    <GalleryModal
      images={galleryItems.map((p) => ({
        src: p.imageUrl,
        alt: p.name,
        caption: `${p.name} — ${p.headline}`,
      }))}
      isOpen={isGalleryOpen}
      initialIndex={selectedIndex}
      onClose={() => setIsGalleryOpen(false)}
    />
  );
};

export default NewspaperGallery;
