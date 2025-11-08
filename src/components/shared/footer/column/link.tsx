import { AnimatedLink } from "@/components/shared/animated-link";
import { FooterLinkType } from "@/constants/footer/types/footer-links";

export default function FooterLink({
  href,
  label,
  isExternal,
}: FooterLinkType) {
  return (
    <li>
      <AnimatedLink
        href={href}
        className="newspaper-body text-sm text-muted-foreground"
        aria-label={label}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {label}
      </AnimatedLink>
    </li>
  );
}
