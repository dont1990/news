import type { FC, SVGProps } from "react";

export interface ISocialLink {
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>; 
  label: string;
}