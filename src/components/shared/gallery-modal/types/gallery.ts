export interface IGalleryImage {
  src: string;
  alt?: string;
  caption?: string;
};

export interface IGalleryModalProps {
  images: IGalleryImage[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}