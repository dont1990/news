import WorldIcon from "./assets/icons/world";
import PoliticsIcon from "./assets/icons/politics";
import BusinessIcon from "./assets/icons/business";
import TechnologyIcon from "./assets/icons/technology";
import ScienceIcon from "./assets/icons/science";
import HealthIcon from "./assets/icons/health";
import SportIcon from "./assets/icons/sport";
import EntertainmentIcon from "./assets/icons/entertainment";
import EnvironmentIcon from "./assets/icons/environment";

export interface Category {
  title: string;
  icon: React.ElementType;
  description: string;
}

export const categories: Category[] = [
  {
    title: "جهان",
    icon: WorldIcon,
    description:
      "با آخرین اخبار جهانی، رویدادهای بین‌المللی و تغییرات جهان به‌روز بمانید.",
  },
  {
    title: "سیاست",
    icon: PoliticsIcon,
    description:
      "تحولات سیاسی، انتخابات، تغییرات سیاست‌ها و امور دولت‌ها در سراسر جهان را دنبال کنید.",
  },
  {
    title: "تجارت",
    icon: BusinessIcon,
    description:
      "با روندهای بازار، اخبار شرکت‌ها، شاخص‌های اقتصادی و تحولات مالی آشنا شوید.",
  },
  {
    title: "فناوری",
    icon: TechnologyIcon,
    description:
      "آخرین نوآوری‌ها در فناوری، تحول دیجیتال و تکنولوژی‌های نوظهور را کشف کنید.",
  },
  {
    title: "علم",
    icon: ScienceIcon,
    description:
      "با دستاوردهای علمی، یافته‌های پژوهشی و اکتشافاتی که دانش بشر را پیش می‌برند آشنا شوید.",
  },
  {
    title: "سلامت",
    icon: HealthIcon,
    description:
      "با پیشرفت‌های پزشکی، روندهای سلامت و اطلاعات رفاه و بهداشت به‌روز بمانید.",
  },
  {
    title: "ورزش",
    icon: SportIcon,
    description:
      "تیم‌ها، ورزشکاران و رویدادهای ورزشی مورد علاقه خود را دنبال کنید.",
  },
  {
    title: "سرگرمی",
    icon: EntertainmentIcon,
    description:
      "آخرین اخبار فیلم، موسیقی، سلبریتی‌ها و صنعت سرگرمی را دریافت کنید.",
  },
  {
    title: "محیط زیست",
    icon: EnvironmentIcon,
    description:
      "تحولات محیط زیست، تغییرات اقلیمی و مسائل پایداری را دنبال کنید.",
  },
];
