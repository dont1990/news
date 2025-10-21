"use client";

import { routes } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={routes.home.getHref()} className="group">
      <div className="relative w-24 h-10">
        <Image
          alt="logo"
          src={"/images/logo.png"}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 640px) 120px, 192px" // <== Add sizes prop
          priority
        />
      </div>
    </Link>
    // <Link href={routes.home.getHref()} className="group">
    //   <div className="flex items-center gap-3">
    //     {/* آیکون لوگو */}
    //     <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary rounded-2xl flex items-center justify-center">
    //       <span className="text-white font-bold text-lg">ن</span>
    //     </div>
    //     <p className="text-3xl font-bold bg-gradient-to-r from-primary-400 via-primary-200 to-primary-500 bg-clip-text text-transparent">
    //       نیوزهاب
    //     </p>
    //   </div>
    // </Link>
  );
}
