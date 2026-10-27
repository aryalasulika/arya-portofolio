import { TranslationDictionary } from "./types";

export const enTranslations: TranslationDictionary = {
  meta: {
    title: "Arya.dev | Full-Stack Developer Portfolio",
    description:
      "Personal portfolio of Arya — Full-Stack Developer specializing in high-performance web applications, modern frontend architecture, and resilient backend systems.",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    cta: "Let's Talk",
    mobileTitle: "Navigation",
    mobileTagline: "Available for new projects",
    languageAriaLabel: "Select display language",
  },
  hero: {
    role: "Full-Stack Developer",
    location: "Indonesia",
    headlineBefore: "I build digital products that solve ",
    headlineHighlight: "real problems.",
    subHighlight: "From idea to deployment.",
    description:
      "I develop web applications by combining thoughtful interfaces, reliable backend systems, and practical engineering. Full-stack development focused on performance, accessibility, and real-world value.",
    primaryCta: "Explore Selected Work",
    secondaryCta: "Get in Touch",
    floatingCards: {
      frontend: {
        label: "Frontend Engineering",
        sublabel: "Next.js, React & TypeScript",
      },
      backend: {
        label: "Backend Services",
        sublabel: "Node.js & Laravel REST APIs",
      },
      database: {
        label: "Data Persistence",
        sublabel: "PostgreSQL & MySQL Schemas",
      },
      deployment: {
        label: "Production Ready",
        sublabel: "Optimized, Scalable & Tested",
      },
    },
  },
  projects: {
    eyebrow: "01. Selected Work",
    titleBefore: "Engineered projects with ",
    titleHighlight: "real purpose.",
    description:
      "Production web applications built to resolve specific operational challenges — from healthcare queue automation to high-frequency lounge orders and enterprise workforce portals.",
    challengeLabel: "Challenge & Context",
    solutionLabel: "Engineered Solution",
    roleLabel: "My Contribution & Role",
    liveDemo: "Live Demo",
    repository: "Repository",
    deepDiveTitle: "Looking for specific architectural details or case studies?",
    deepDiveDesc:
      "Each system has custom workflow diagrams, database schemas, and operational requirements that can be shared during project discussions.",
    deepDiveCta: "Request Tech Deep Dive →",
    items: {
      "klinik-firdaus-scheduling": {
        slug: "klinik-firdaus-scheduling",
        title: "Sistem Penjadwalan Poli Gigi Klinik Firdaus",
        category: "Healthcare & Appointment System",
        tagline: "Streamlining dental patient workflows and doctor availability",
        problem:
          "Manual appointment logging caused frequent patient queue overflows, doctor scheduling clashes, and lack of historical visit records.",
        solution:
          "Implemented a real-time scheduling portal with dynamic doctor slot allocation, WhatsApp-friendly confirmation flows, and an intuitive clinic administrative dashboard.",
        role: "Full-Stack Developer (UI Design, Database Schema, API Integration)",
        status: "Completed / Client System",
      },
      "bluesea-lounge-pos": {
        slug: "bluesea-lounge-pos",
        title: "Bluesea Lounge POS & Inventory",
        category: "F&B • Point of Sale",
        tagline: "High-speed order taking and stock control for lounge operations",
        problem:
          "Peak-hour paper ticketing resulted in order delivery delays, untracked inventory spoilage, and hours spent on manual daily cashier balancing.",
        solution:
          "Built a snappy, responsive web POS interface with table mapping, split-bill processing, instant receipt printing support, and automated daily shift reporting.",
        role: "Full-Stack Developer (Frontend Architecture & Backend Services)",
        status: "Completed / Internal System",
      },
      "hr-presensi-portal": {
        slug: "hr-presensi-portal",
        title: "Sistem Presensi & SDM (HR Attendance Portal)",
        category: "Enterprise • Human Resources",
        tagline: "Geolocation attendance verification and employee management",
        problem:
          "Dispersed team members made standard biometric devices impractical, creating bottlenecks in tracking work shifts and consolidating attendance records.",
        solution:
          "Architected a mobile-responsive web portal with GPS coordinates validation, shift schedules, structured multi-tier approval workflows, and automated attendance recaps.",
        role: "Full-Stack Developer (Laravel Architecture, Database Design & UI)",
        status: "Completed / Enterprise Portal",
      },
    },
  },
  about: {
    eyebrow: "02. Philosophy & Background",
    titleBefore: "Bridging elegant frontends with ",
    titleHighlight: "rock-solid backends.",
    description:
      "A holistic approach to software development, seeing digital products as living systems that require harmony between design, code, and infrastructure.",
    p1: {
      greeting: "Hello! I'm ",
      name: "Arya",
      suffix:
        ", a Full-Stack Web Developer passionate about building end-to-end web applications that solve tangible operational and commercial challenges.",
    },
    p2: "My work spans the entire application lifecycle. Whether crafting responsive user interfaces with Next.js and Tailwind CSS or designing relational database architectures and secure REST APIs with Node.js and Laravel, I believe software engineering is most effective when frontend clarity meets backend resilience.",
    p3: "Rather than treating design and backend engineering as separate worlds, I approach every project with an end-to-end mindset: how the data flows, how the database indexes perform, and how effortless the interface feels to the end user.",
    focusBadge: "Current Engineering Focus",
    focusText:
      "Deepening expertise in React Server Components, high-concurrency API structuring, containerized environments with Docker, and modern web accessibility patterns (WCAG 2.2).",
    principles: [
      {
        title: "Thoughtful Interfaces",
        description:
          "Interfaces shouldn't just look clean — they must load instantly, navigate logically, and provide unmistakable feedback for every user interaction.",
      },
      {
        title: "Resilient Systems",
        description:
          "Building backends with disciplined database normalization, clean API contracts, and robust validation to protect business logic under real workloads.",
      },
      {
        title: "Pragmatic Engineering",
        description:
          "Avoiding unnecessary hype in favor of stable, proven technology stacks that deliver maximum reliability and straightforward long-term maintenance.",
      },
    ],
  },
  skills: {
    eyebrow: "03. Technical Capability",
    titleBefore: "A modern toolchain for ",
    titleHighlight: "full-stack execution.",
    description:
      "Verified technologies and workflows actively utilized across production client deployments, API services, and modern interface development.",
    stackFocus: "Stack Focus",
    coreSpecialties: "Core Specialties",
    categoryTitles: {
      "Frontend Engineering": {
        title: "Frontend Engineering",
        description:
          "Crafting performant, accessible, and responsive user interfaces with modern toolchains.",
      },
      "Backend & Systems": {
        title: "Backend & Systems",
        description:
          "Designing clean API endpoints, secure business logic, and reliable server-side services.",
      },
      "Database & Data Modeling": {
        title: "Database & Data Modeling",
        description:
          "Structuring relational data, writing optimized queries, and maintaining data integrity.",
      },
      "Tools & DevOps Workflow": {
        title: "Tools & DevOps Workflow",
        description:
          "Ensuring code quality, version control, seamless deployment, and developer ergonomics.",
      },
    },
  },
  experience: {
    eyebrow: "04. Development Milestones",
    titleBefore: "My journey in ",
    titleHighlight: "software craftsmanship.",
    description:
      "The key phases, client deliveries, and technical evolution that have defined my growth as a dependable Full-Stack Developer.",
    highlightsLabel: "Key Highlights & Impact:",
    items: [
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
      },
    ],
  },
  contact: {
    eyebrow: "05. Get In Touch",
    titleBefore: "Have an idea? Let's build ",
    titleHighlight: "something meaningful.",
    description:
      "Whether you have an upcoming web project, need help architecting an application, or want to explore potential collaboration, my inbox is always open.",
    directCommBadge: "Direct Communication",
    directTitle: "Send a message directly via email",
    directDesc:
      "I typically reply within 24 hours. Feel free to include a brief summary of your project goals, tech stack preferences, and target timeline.",
    emailLabel: "Email Address",
    copyBtn: "Copy Address",
    copiedBtn: "Copied to Clipboard!",
    launchEmailBtn: "Launch Email Client",
    networksHeader: "Professional Networks",
    githubTitle: "GitHub Profile",
    githubDesc: "Inspect repositories & commits",
    linkedinTitle: "LinkedIn Network",
    linkedinDesc: "Professional background & connection",
    statusHeader: "Work Status",
    statusTitle: "Available for Select Projects",
    statusDesc:
      "Open to full-stack engineering contracts, freelance web application development, and technical consulting.",
  },
  footer: {
    brandDesc:
      "Full-Stack Developer crafting reliable web systems, intuitive interfaces, and clean architecture. From idea to deployment.",
    navHeader: "Navigation",
    statusHeader: "Current Status",
    backToTop: "Back to Top",
    copyrightText: "All rights reserved.",
    tagline: "Editorial Brutalism • Modern Portfolio",
  },
};
