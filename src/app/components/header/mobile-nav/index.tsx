"use client";

import Link from "next/link";

const categories = [
  "World",
  "Politics",
  "Business",
  "Technology",
  "Science",
  "Health",
  "Sports",
  "Entertainment",
];

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
            key={category}
            href={`/category/${category.toLowerCase()}`}
            className="px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-center"
            onClick={onClose}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
