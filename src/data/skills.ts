import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["HTML5 / CSS3", "Javascript", "TypeScript", "Responsive Design"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "État & Données",
    items: ["Jotai", "React Query", "Context API", "REST API"],
  },
  {
    category: "Outils & Workflow",
    items: ["Git / GitHub", "VS Code", "npm", "Vercel", "Vite"],
  },
  {
    category: "Qualité & Performance",
    items: [
      "Vitest / React Testing Library",
      "Accessibilité (a11y) / SEO",
      "Performance basics",
    ],
  },
];
