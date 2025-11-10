"use client";

import NewspaperPageContent from "@/features/newspaper";
import { Suspense } from "react";

export default function NewspaperPage() {
  return (
    <Suspense>
      <NewspaperPageContent />
    </Suspense>
  );
}
