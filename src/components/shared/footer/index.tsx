import { Separator } from "@/components/ui/separator";
import { footerLinks } from "@/constants/footer/footer-links";
import Container from "../container";
import FooterColumn from "./column";
import FooterBranding from "./branding";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-12">
      <Container>
        {/* Footer navigation */}
        <nav className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <FooterColumn key={category} title={category} links={links} />
          ))}
        </nav>

        <Separator className="my-6" />

        {/* Branding */}
        <FooterBranding />
      </Container>
    </footer>
  );
}
