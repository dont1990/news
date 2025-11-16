"use client";

export default function NewspaperGradientOverlays() {
  return (
    <>
      <div className="absolute h-36 w-40 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-20 top-1/2 -left-12 -translate-y-1/2 rounded-full" />
      <div className="absolute h-36 w-40 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-20 top-1/2 -right-12 -translate-y-1/2 rounded-full" />
    </>
  );
}
