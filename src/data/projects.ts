export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  featured: boolean;
  status: string;
  repositoryUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    slug: "klinik-firdaus-scheduling",
    title: "Sistem Penjadwalan Poli Gigi Klinik Firdaus",
    category: "Healthcare & Appointment System",
    tagline: "Streamlining dental patient workflows and doctor availability",
    description:
      "A comprehensive digital appointment and queue management web platform engineered for Klinik Firdaus dental polyclinic, replacing paper queues with automated slot bookings.",
    problem:
      "Manual appointment logging caused frequent patient queue overflows, doctor scheduling clashes, and lack of historical visit records.",
    solution:
      "Implemented a real-time scheduling portal with dynamic doctor slot allocation, WhatsApp-friendly confirmation flows, and an intuitive clinic administrative dashboard.",
    role: "Full-Stack Developer (UI Design, Database Schema, API Integration)",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "REST API",
    ],
    featured: true,
    status: "Completed / Client System",
    // Note: External links omitted per PRD content guidelines (internal client system)
  },
  {
    slug: "bluesea-lounge-pos",
    title: "Bluesea Lounge POS & Inventory",
    category: "F&B • Point of Sale",
    tagline: "High-speed order taking and stock control for lounge operations",
    description:
      "A tailored web-based POS system designed for lounge and hospitality management, providing fast table-side ordering, invoice generation, and real-time inventory tracking.",
    problem:
      "Peak-hour paper ticketing resulted in order delivery delays, untracked inventory spoilage, and hours spent on manual daily cashier balancing.",
    solution:
      "Built a snappy, responsive web POS interface with table mapping, split-bill processing, instant receipt printing support, and automated daily shift reporting.",
    role: "Full-Stack Developer (Frontend Architecture & Backend Services)",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    featured: true,
    status: "Completed / Internal System",
  },
  {
    slug: "hr-presensi-portal",
    title: "Sistem Presensi & SDM (HR Attendance Portal)",
    category: "Enterprise • Human Resources",
    tagline: "Geolocation attendance verification and employee management",
    description:
      "A reliable employee attendance and human resource web application supporting multi-branch staff with geofenced check-in, leave requests, and payroll-ready data generation.",
    problem:
      "Dispersed team members made standard biometric devices impractical, creating bottlenecks in tracking work shifts and consolidating attendance records.",
    solution:
      "Architected a mobile-responsive web portal with GPS coordinates validation, shift schedules, structured multi-tier approval workflows, and automated attendance recaps.",
    role: "Full-Stack Developer (Laravel Architecture, Database Design & UI)",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    featured: true,
    status: "Completed / Enterprise Portal",
  },
];
