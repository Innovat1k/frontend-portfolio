import { Project } from "@/types";

// English translation
export const projects_en: Project[] = [
  {
    slug: "cmd-pal",
    title: "CommandPal",
    description:
      "Interactive command palette with keyboard navigation and responsive UI.",
    longDescription:
      "CommandPal is a modern command palette inspired by productivity-focused SaaS applications. Built with React and TypeScript, it features fast keyboard navigation, fuzzy search, categorized actions, a responsive overlay interface, and smooth CSS animations. The project emphasizes accessibility, interaction design, and a modern developer-tool user experience.",
    image: "/images/projects/cmd-pal/cover.webp",
    images: [
      "/images/projects/cmd-pal/screen-feature.webp",
      "/images/projects/cmd-pal/screen-mobile.webp",
    ],
    tags: ["React", "TypeScript", "Tailwind", "Keyboard UX", "Responsive UI"],
    metrics: [
      { label: "Navigation", value: "Keyboard-first" },
      { label: "Search", value: "Instant filtering" },
    ],
    demoUrl: "https://command-pal-two.vercel.app",
    repoUrl: "https://github.com/Innovat1k/command-pal",
    featured: true,
  },
  {
    slug: "synapse",
    title: "Synapse",
    description:
      "Skills tracking platform with analytics dashboard and Supabase integration.",
    longDescription:
      "Synapse is a productivity-focused platform designed to track and manage skill progression and related activities. Users can create, organize, and link skills, log daily or weekly activities, visualize relationships between skills, and analyze their progress through an interactive dashboard. The application integrates Supabase for authentication, database management, and secure CRUD operations.",
    image: "/images/projects/synapse/cover.webp",
    images: [
      "/images/projects/synapse/screen-feature.webp",
      "/images/projects/synapse/screen-mobile.webp",
    ],
    tags: [
      "React",
      "Supabase",
      "Dashboard",
      "Analytics",
      "CRUD",
      "Visualization",
    ],
    metrics: [
      { label: "Visualization", value: "Linked skills graph" },
      { label: "Tracking", value: "Real-time activity logging" },
    ],
    demoUrl: "https://synapse-alpha-nine.vercel.app",
    repoUrl: "https://github.com/Innovat1k/synapse",
    featured: true,
  },
  {
    slug: "wisecho",
    title: "Wisecho",
    description:
      "Quote generator with filters, favorites, and theme customization.",
    longDescription:
      "Wisecho is a dynamic quote generation application built with React and state management tools to provide a smooth and customizable user experience. Users can generate random quotes, filter results by category, save favorites locally, manage saved quotes, customize the application theme, and persist data directly in the browser. The project focuses on clean UI interactions and efficient frontend state handling.",
    image: "/images/projects/wisecho/cover.webp",
    images: [
      "/images/projects/wisecho/screen-feature.webp",
      "/images/projects/wisecho/screen-mobile.webp",
    ],
    tags: ["React", "API", "Local Storage", "Theming"],
    metrics: [
      { label: "Filtering", value: "Dynamic quotes" },
      { label: "Storage", value: "Local persistence" },
    ],
    demoUrl: "https://wisecho.vercel.app",
    repoUrl: "https://github.com/Innovat1k/wisecho",
    featured: false,
  },
];