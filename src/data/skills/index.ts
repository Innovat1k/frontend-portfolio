import { Lang } from "@/lib/content";
import { skills_fr } from "./skills.fr";
import { skills_en } from "./skills.en";

export const skills = { fr: skills_fr, en: skills_en } as const;

export function getSkills(lang: Lang) {
  return skills[lang] ?? skills.fr;
}
