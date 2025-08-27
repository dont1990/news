import type { FC, SVGProps } from "react";
import { Github, Linkedin, Twitter, Instagram, Mail, Send } from "lucide-react"; // Lucide icons

export interface SocialLink {
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>; // React component for SVG
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/yourusername",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/yourusername",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://instagram.com/yourusername",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "mailto:your@email.com",
    icon: Mail,
    label: "Email",
  },
];
