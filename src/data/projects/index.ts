import { Lang } from "@/lib/content";
import { projects_fr } from "./projects.fr";
import { projects_en } from "./projects.en";

export const projects = { fr: projects_fr, en: projects_en } as const;

export function getProjects(lang: Lang) {
  return projects[lang] ?? projects.fr;
}
