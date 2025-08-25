import { Separator } from "@/app/components/ui/separator";

const footerLinks = {
  About: ["About Us", "Our Team", "Careers", "Contact"],
  News: ["World", "Politics", "Business", "Technology"],
  Support: ["Help Center", "Privacy Policy", "Terms of Service", "RSS Feeds"],
  Follow: ["Twitter", "Facebook", "LinkedIn", "Newsletter"],
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="newspaper-heading text-sm font-semibold mb-3 text-primary">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="newspaper-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <h2 className="newspaper-heading text-xl text-primary">NewsHub</h2>
            <p className="newspaper-body text-sm text-muted-foreground">
              Trusted news since 2024
            </p>
          </div>

          <p className="newspaper-body text-sm text-muted-foreground">
            © 2024 NewsHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
