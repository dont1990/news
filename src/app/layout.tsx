import type { Metadata } from "next";
import "./styles/globals.css";
import MainProvider from "./providers/MainProvider";

export const metadata: Metadata = {
  title: "چشمک",
  description: "سایت خبری چشمک | اخبار و مقالات روز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased min-h-screen bg-background`}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
