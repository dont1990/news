import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد مدیریت | چشمک",
  description: "مدیریت محتوا، کاربران و مقالات سایت خبری چشمک.",
  robots: "noindex, nofollow", // prevent indexing
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
