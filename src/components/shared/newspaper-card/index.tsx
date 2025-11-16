"use client";

import Image from "next/image";
import { INewspaper } from "@/types/newspaper";
import NewspaperCardSkeleton from "./skeleton";

interface INewspaperCardProps {
  paper?: INewspaper;
  loading?: boolean;
  onClick?: () => void;
}

export default function NewspaperCard({
  paper,
  loading,
  onClick,
}: INewspaperCardProps) {
  if (loading) return <NewspaperCardSkeleton />;
  if (!paper) return null;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100"
    >
      <div className="relative w-full h-72">
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
