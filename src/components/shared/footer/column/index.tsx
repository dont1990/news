import { FooterLinkType } from "../types/types";
import FooterLink from "./link";

type FooterColumnProps = {
  title: string;
  links: FooterLinkType[];
};

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <p className="newspaper-heading text-sm font-semibold mb-3 text-primary">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((link) => (
          <FooterLink key={link.label} {...link} />
        ))}
      </ul>
    </div>
  );
}
