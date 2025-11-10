import { IFooterLinkType } from "./types/footer-links";

export const footerLinks: Record<string, IFooterLinkType[]> = {
  درباره: [
    { href: "/about", label: "درباره ما" },
    { href: "/team", label: "تیم ما" },
    { href: "/careers", label: "فرصت‌های شغلی" },
    { href: "/contact", label: "تماس با ما" },
  ],
  اخبار: [
    { href: "/world", label: "جهان" },
    { href: "/politics", label: "سیاست" },
    { href: "/business", label: "کسب‌وکار" },
    { href: "/tech", label: "فناوری" },
  ],
  پشتیبانی: [
    { href: "/help", label: "مرکز راهنما" },
    { href: "/privacy", label: "حریم خصوصی" },
    { href: "/terms", label: "شرایط خدمات" },
    { href: "/rss", label: "RSS" },
  ],
  "دنبال کنید": [
    { href: "https://twitter.com", label: "توییتر", isExternal: true },
    { href: "https://facebook.com", label: "فیسبوک", isExternal: true },
    { href: "https://linkedin.com", label: "لینکدین", isExternal: true },
    { href: "/newsletter", label: "خبرنامه" },
  ],
};
