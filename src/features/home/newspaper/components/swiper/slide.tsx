"use client";

import NewspaperCard from "@/components/shared/newspaper-card";
import { INewspaper } from "@/types/newspaper";

interface INewspaperSlideProps {
  paper: INewspaper;
  onClick?: () => void;
}

export default function NewspaperSlide({
  paper,
  onClick,
}: INewspaperSlideProps) {
  return <NewspaperCard paper={paper} onClick={onClick} />;
}
