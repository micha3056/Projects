// =============================================================================
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Everything the site renders comes from the data below.
// =============================================================================

export const profile = {
  name: "Michael Hauptvogel",
  role: "Senior Software Developer | Java & .NET",
  tagline: "Technical depth, clean code, pragmatic thinking.",
  about:
    "Senior Software Developer with over 15 years of experience building and integrating scalable backend systems. " +
    "My core stack is Java/Spring Boot and .NET/C# — with a strong focus on clean architecture, REST API design, and production-ready delivery in enterprise environments. " +
    "I've worked across legacy modernisation, external system integrations, and CI/CD automation, and I've been doing it long enough to know that the difference between working code and good code actually matters.",
  location: "Berlin, Germany",
  email: "michael.hauptvogel@gmail.com",
  // Optional: path to an avatar image in /public, e.g. "/avatar.jpg". Leave "" for initials.
  avatar: "",
  // Optional: link to a resume/CV in /public, e.g. "/resume.pdf". Leave "" to hide.
  resume: "",
};

export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/micha3056" },
  { label: "LinkedIn", href: "https://linkedin.com/in/michael.hauptvogel" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Spring Boot Platform Migration",
    description:
      "Two-year incremental migration of a production-critical JBoss platform to Spring Boot at Vanguard AG. " +
      "Rebuilt the media API from scratch, introduced server-side SVG diagram generation, authored a full OpenAPI 3.0 specification, " +
      "and systematically raised test coverage across existing modules — all while keeping the platform live.",
    tags: ["Java", "Spring Boot", "OpenAPI 3.0", "Gradle", "Jenkins", "CI/CD"],
  },
  {
    title: "Full-Stack CRM System",
    description:
      "Designed and led development of a scalable CRM platform at CMDScale GmbH, taking full ownership of architecture, " +
      "database schema, and API design. Built as a TypeScript monorepo with a React frontend, Node.js/Express backend, " +
      "Prisma ORM, and PostgreSQL — delivered end-to-end as the sole architect.",
    tags: ["TypeScript", "React", "Node.js", "Prisma ORM", "PostgreSQL"],
  },
  {
    title: "Autonomous UAV Drone Prototype",
    description:
      "Built an autonomous water-deployment UAV prototype on Raspberry Pi 4 with ROS (Robot Operating System). " +
      "Implemented trajectory planning and PID-based velocity/direction control. " +
      "Monitoring and control via a web interface with OpenLayers map visualisation and real-time bidirectional WebSocket communication.",
    tags: [
      "Raspberry Pi",
      "ROS",
      "Python",
      "WebSockets",
      "OpenLayers",
      "PID Control",
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "C# / .NET", "TypeScript", "JavaScript", "PHP", "C++", "SQL"],
  },
  {
    category: "Backend & APIs",
    items: [
      "Spring Boot",
      "Node.js",
      "Express",
      "REST",
      "OpenAPI 3.0",
      "GraphQL",
    ],
  },
  {
    category: "Frontend & UI",
    items: ["React", "Next.js", "WPF / WinForms", "OpenLayers", "Tailwind CSS"],
  },
  {
    category: "Databases & Infrastructure",
    items: [
      "PostgreSQL",
      "MS SQL",
      "MySQL",
      "Docker",
      "Jenkins",
      "Gradle",
      "CI/CD",
      "Linux",
    ],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Developer",
    org: "Vanguard AG — Remote",
    period: "Mar 2023 — Present",
    description:
      "Incrementally migrating a production-critical JBoss platform to Spring Boot. Designed and built security-relevant REST interfaces for external device manufacturers, " +
      "stabilised the parallel .NET/C# backend, and migrated the CI/CD pipeline from Apache Ant to Gradle — significantly reducing manual build overhead.",
  },
  {
    role: "Senior Software Developer",
    org: "CMDScale GmbH — Remote",
    period: "May 2022 — Mar 2023",
    description:
      "Led architecture and development of a scalable full-stack CRM system (TypeScript, Node.js, React, Prisma ORM, PostgreSQL). " +
      "Also designed and implemented automated web scrapers for structured data collection from IT freelance marketplaces.",
  },
  {
    role: "Embedded Software Developer",
    org: "Freelance — Remote",
    period: "Jul 2021 — May 2022",
    description:
      "Built an autonomous water-deployment UAV prototype using Raspberry Pi 4 and ROS: trajectory planning, PID-based control, " +
      "and a web interface with OpenLayers map visualisation and real-time WebSocket communication.",
  },
  {
    role: "Software Developer",
    org: "Becker & Hickl GmbH — Berlin",
    period: "Dec 2020 — May 2021",
    description:
      "Developed and maintained low-level software and native Windows libraries (DLLs, C++/.NET) for scientific high-performance measurement instrumentation. " +
      "Designed modern WinForms/WPF UIs with a focus on usability and real-time data visualisation.",
  },
  {
    role: "Software Developer",
    org: "LCS Computer Service GmbH",
    period: "Feb 2020 — Dec 2020",
    description:
      "Built automated document workflows in .NET/C# for incoming-mail routing and OCR-based digital invoice processing. " +
      "Evaluated and prototyped a Camunda BPM-based process automation to replace a proprietary legacy system.",
  },
  {
    role: "Software Developer",
    org: "Freelance — Berlin",
    period: "Mar 2008 — Nov 2019",
    description:
      "Long-running freelance career spanning custom CMS, e-commerce, ticketing, and CRM systems. " +
      "Notable projects: budget management system for Berlinale TalentCampus, short-film distribution platform with DVD-on-demand, " +
      "and real-time event booking system — all built on PHP/MySQL.",
  },
  {
    role: "M.Sc. Network Centred Computing — Distinction",
    org: "University of Reading, UK · FHTW Berlin (dual degree)",
    period: "2008",
    description:
      "Fully scholarship-funded. Thesis completed at the Universitat Politècnica de Catalunya (UPC), Barcelona, " +
      "simultaneously recognised as the Diplom thesis at FHTW Berlin.",
  },
];
