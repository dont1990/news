import type { FC, SVGProps } from "react";

export interface SocialLink {
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>; 
  label: string;
}