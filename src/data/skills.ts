export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description:
      "Crafting performant, accessible, and responsive user interfaces with modern toolchains.",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "React", highlight: true },
      { name: "Next.js (App Router)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 Semantic" },
      { name: "CSS3 / Modern Layouts" },
      { name: "Motion & Micro-interactions" },
    ],
  },
  {
    title: "Backend & Systems",
    description:
      "Designing clean API endpoints, secure business logic, and reliable server-side services.",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "PHP", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "RESTful API Design", highlight: true },
      { name: "Express.js" },
      { name: "Server Authentication & JWT" },
      { name: "Middleware Architecture" },
    ],
  },
  {
    title: "Database & Data Modeling",
    description:
      "Structuring relational data, writing optimized queries, and maintaining data integrity.",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "Relational Schema Design" },
      { name: "Query Optimization & Indexing" },
      { name: "Database Migrations & Seeders" },
    ],
  },
  {
    title: "Tools & DevOps Workflow",
    description:
      "Ensuring code quality, version control, seamless deployment, and developer ergonomics.",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Docker (Containers)" },
      { name: "Postman API Testing" },
      { name: "Vercel & VPS Deployment", highlight: true },
      { name: "ESLint & TypeScript Checking" },
      { name: "VS Code & Terminal Ergonomics" },
    ],
  },
];
