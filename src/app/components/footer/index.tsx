import { Separator } from "@/app/components/ui/separator";
import { footerLinks } from "@/app/data/footer-links";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="newspaper-heading text-sm font-semibold mb-3 text-primary">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="newspaper-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={link}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-x-4">
            <p className="text-xl text-primary">نیوزهاب</p>
            <p className="text-sm text-muted-foreground">
              منبع معتبر اخبار از سال ۲۰۲۴
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 NewsHub. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
