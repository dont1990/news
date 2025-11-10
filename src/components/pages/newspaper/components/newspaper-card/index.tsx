"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { INewspaper } from "../../types/newspaper";

interface NewspaperCardProps {
  paper?: INewspaper;
  loading?: boolean;
  onClick?: () => void;
}

export default function NewspaperCard({
  paper,
  loading,
  onClick,
}: NewspaperCardProps) {
  if (loading) {
    return (
      <div className="animate-pulse rounded-2xl overflow-hidden border border-gray-100 bg-white h-64 w-full">
        <Skeleton className="h-full w-full rounded-2xl" />
      </div>
    );
  }

  if (!paper) return null;

  return (
    <div
      onClick={onClick}
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
  );
}
