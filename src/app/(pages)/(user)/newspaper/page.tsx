"use client";

import NewspaperPageContent from "@/components/pages/newspaper";
import { Suspense } from "react";

export default function NewspaperPage() {
  return (
    <Suspense>
      <NewspaperPageContent />
    </Suspense>
  );
}
