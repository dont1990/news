import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"; // Lucide icons
import { ISocialLink } from "./types/social-media";

export const socialLinks: ISocialLink[] = [
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
