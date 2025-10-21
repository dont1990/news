import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "چشمک | اخبار و مقالات روز",
  description:
    "مروری بر آخرین اخبار و مقالات روز در زمینه فناوری، ورزش، اقتصاد و بیشتر.",
  keywords: ["اخبار", "مقالات", "فناوری", "ورزش", "اقتصاد"],
  openGraph: {
    title: "چشمک | اخبار و مقالات روز",
    description:
      "مروری بر آخرین اخبار و مقالات روز در زمینه فناوری، ورزش، اقتصاد و بیشتر.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "چشمک",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
