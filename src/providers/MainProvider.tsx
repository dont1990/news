"use client";

import { ReactNode } from "react";
import { ReactQueryProvider } from "@/lib/api/react-query-client";

interface MainProviderProps {
  children: ReactNode;
}

export default function MainProvider({ children }: MainProviderProps) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
