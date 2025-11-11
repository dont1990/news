"use client";

import { ReactNode } from "react";
import { ReactQueryProvider } from "@/lib/api/react-query-client";
import BackToTopButton from "@/components/shared/back-to-top";

interface MainProviderProps {
  children: ReactNode;
}

export default function MainProvider({ children }: MainProviderProps) {
  return (
    <ReactQueryProvider>
      {children}
      <BackToTopButton />
    </ReactQueryProvider>
  );
}
