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
  persian: string;
  english: string;
  icon: React.ElementType;
  description: string;
}

export const categories: Category[] = [
  {
    persian: "جهان",
    english: "world",
    icon: WorldIcon,
    description: "با آخرین اخبار جهانی، رویدادهای بین‌المللی و تغییرات جهان به‌روز بمانید.",
  },
  {
    persian: "سیاست",
    english: "politics",
    icon: PoliticsIcon,
    description: "تحولات سیاسی، انتخابات، تغییرات سیاست‌ها و امور دولت‌ها در سراسر جهان را دنبال کنید.",
  },
  {
    persian: "تجارت",
    english: "business",
    icon: BusinessIcon,
    description: "با روندهای بازار، اخبار شرکت‌ها، شاخص‌های اقتصادی و تحولات مالی آشنا شوید.",
  },
  {
    persian: "فناوری",
    english: "technology",
    icon: TechnologyIcon,
    description: "آخرین نوآوری‌ها در فناوری، تحول دیجیتال و تکنولوژی‌های نوظهور را کشف کنید.",
  },
  {
    persian: "علم",
    english: "science",
    icon: ScienceIcon,
    description: "با دستاوردهای علمی، یافته‌های پژوهشی و اکتشافاتی که دانش بشر را پیش می‌برند آشنا شوید.",
  },
  {
    persian: "سلامت",
    english: "health",
    icon: HealthIcon,
    description: "با پیشرفت‌های پزشکی، روندهای سلامت و اطلاعات رفاه و بهداشت به‌روز بمانید.",
  },
  {
    persian: "ورزش",
    english: "sports",
    icon: SportIcon,
    description: "تیم‌ها، ورزشکاران و رویدادهای ورزشی مورد علاقه خود را دنبال کنید.",
  },
  {
    persian: "سرگرمی",
    english: "entertainment",
    icon: EntertainmentIcon,
    description: "آخرین اخبار فیلم، موسیقی، سلبریتی‌ها و صنعت سرگرمی را دریافت کنید.",
  },
  {
    persian: "محیط زیست",
    english: "environment",
    icon: EnvironmentIcon,
    description: "تحولات محیط زیست، تغییرات اقلیمی و مسائل پایداری را دنبال کنید.",
  },
];
