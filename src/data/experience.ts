export interface JourneyItem {
  period: string;
  role: string;
  organization: string;
  badge: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export const journeyData: JourneyItem[] = [
  {
    period: "2024 — Present",
    role: "Full-Stack Web Developer",
    organization: "Independent & Client Projects",
    badge: "Active",
    description:
      "Engineering end-to-end web applications for clients, focusing on responsive UI engineering, backend logic, and production deployment.",
    contributions: [
      "Designed and deployed the dental polyclinic booking system for Klinik Firdaus with custom doctor scheduling.",
      "Built the Bluesea Lounge POS and inventory monitoring web application for streamlined order workflows.",
      "Developed an HR attendance portal with GPS geolocation verification and automated reporting using Laravel.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Laravel", "MySQL", "PostgreSQL", "Tailwind CSS"],
  },
  {
    period: "2023 — 2024",
    role: "Modern Full-Stack Exploration & Architecture",
    organization: "Specialized Skill Mastery",
    badge: "Milestone",
    description:
      "Intensive practical implementation of modern web standards, transitioning from legacy stacks to Next.js App Router, TypeScript type safety, and clean REST APIs.",
    contributions: [
      "Mastered React Server Components, client-server data flow, and modern rendering strategies.",
      "Adopted strict TypeScript typing across frontend and backend integration layers.",
      "Refactored multiple monolithic PHP codebases into structured MVC architectures with Laravel.",
    ],
    technologies: ["TypeScript", "Next.js", "React", "Node.js", "PHP", "Laravel", "Git"],
  },
  {
    period: "2022 — 2023",
    role: "Computer Science & Web Foundations",
    organization: "Academic & Self-Directed Engineering",
    badge: "Foundation",
    description:
      "Built foundational knowledge in core computing concepts, relational databases, data structures, and web technologies.",
    contributions: [
      "Acquired deep understanding of database normalization, relational indexing, and SQL queries.",
      "Built responsive, accessible static and dynamic web layouts using semantic HTML5 and modern CSS.",
      "Implemented algorithm fundamentals and version control best practices via Git and GitHub.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Git"],
  },
];
