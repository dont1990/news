"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import CloseIcon from "@/app/assets/shared-icons/close";

type GalleryImage = {
  src: string;
  alt?: string;
  caption?: string;
};

interface GalleryModalProps {
  images: GalleryImage[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  isOpen,
  initialIndex = 0,
  onClose,
}: GalleryModalProps) {
  if (!isOpen) return null;

  const galleryItems = images.map((img) => ({
    original: img.src,
    thumbnail: img.src,
    description: img.caption,
    originalAlt: img.alt || "",
  }));

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
      <button
        className="absolute top-4 right-4 text-white p-3 rounded-full bg-black/50 hover:bg-gray-700 transition z-50 "
        onClick={onClose}
      >
        <CloseIcon className="w-8 h-8" />{" "}
      </button>

      <div className="w-full max-w-6xl h-[80vh] flex flex-col">
        <ImageGallery
          items={galleryItems}
          startIndex={initialIndex}
          showFullscreenButton={true}
          showPlayButton={true}
          showThumbnails={true}
          thumbnailPosition="bottom"
          additionalClass="rounded-md h-full"
          renderItem={(item) => (
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <Image
                src={item.original}
                alt={item.originalAlt || "newspaper"}
                fill
                style={{ objectFit: "contain" }}
              />
              {item.description && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-md max-w-[90%] text-center">
                  {item.description}
                </div>
              )}
            </div>
          )}
          renderThumbInner={(item) => (
            <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden rounded-md border-2 border-transparent hover:border-primary transition mx-1">
              <Image
                src={item.thumbnail || "/placeholder.png"} // fallback if undefined
                alt={item.originalAlt || "newspaper"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}
