import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "dashboard-ecommerce",
    title: "Dashboard E-Commerce",
    description: "Interface d'administration pour la gestion de commandes et stocks.",
    longDescription: "Application complète de gestion avec tableaux de bord, filtres avancés et export CSV.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    metrics: [
      { label: "Lighthouse", value: "98/100" },
      { label: "Bundle", value: "-30%" }
    ],
    demoUrl: "#",
    repoUrl: "#",
    featured: true
  }
];