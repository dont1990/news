"use client";

import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ImagePlaceholderProps = {
  className?: string;
};

export default function ImagePlaceholder({ className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md",
        className
      )}
    >
      <ImageOff className="h-1/3 w-1/3 max-h-20 max-w-20 text-gray-400" />
    </div>
  );
}
