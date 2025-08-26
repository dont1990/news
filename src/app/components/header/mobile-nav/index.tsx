import { categories } from "@/app/data/mock-article";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 border-t border-border">
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-center"
            onClick={onClose}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
