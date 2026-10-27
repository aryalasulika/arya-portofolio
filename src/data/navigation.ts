export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Arya.dev",
  title: "Arya | Full-Stack Developer",
  role: "Full-Stack Developer",
  status: "Available for new projects",
  location: "Indonesia",
  email: "aryadev.workspace@gmail.com", // clearly labeled placeholder per PRD
  github: "https://github.com/placeholder", // customizable placeholder
  linkedin: "https://linkedin.com/in/placeholder", // customizable placeholder
};
