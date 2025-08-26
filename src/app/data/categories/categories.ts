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
  icon: React.ElementType; // 👈 use ElementType instead of ReactNode
}

export const categories: Category[] = [
  { persian: "جهان", english: "world", icon: WorldIcon },
  { persian: "سیاست", english: "politics", icon: PoliticsIcon },
  { persian: "تجارت", english: "business", icon: BusinessIcon },
  { persian: "فناوری", english: "technology", icon: TechnologyIcon },
  { persian: "علم", english: "science", icon: ScienceIcon },
  { persian: "سلامت", english: "health", icon: HealthIcon },
  { persian: "ورزش", english: "sports", icon: SportIcon },
  { persian: "سرگرمی", english: "entertainment", icon: EntertainmentIcon },
  { persian: "محیط زیست", english: "environment", icon: EnvironmentIcon },
];
