import { Lang } from "@/lib/content";
import { journey_fr } from "./journey.fr";
import { journey_en } from "./journey.en";

export const journey = { fr: journey_fr, en: journey_en } as const;

export function getJourney(lang: Lang) {
  return journey[lang] ?? journey.fr;
}
