import { getSkills } from "@/data/skills";
// import { journey } from "@/data/journey/journey.fr";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SidebarCard from "@/components/about/SidebarCard";
import AnimatedBadge from "@/components/about/AnimatedBadge";
import Timeline from "@/components/about/Timeline";
import Image from "next/image";
import { getDictionary, Lang } from "@/lib/content";
import { getJourney } from "@/data/journey";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  const skills = getSkills(lang);
  const journey = getJourney(lang);

  return (
    <section className="container relative mx-auto max-w-6xl px-4 pt-10 md:pt-12 pb-12 md:pb-20">
      {/* Header */}
      <div className="mb-8 border-b border-border/30 pb-8 text-center md:text-left">
        <FadeIn delay={0}>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-balance text-foreground md:text-5xl">
            {dict.about.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="max-w-2xl text-base text-muted-foreground antialiased sm:text-lg">
            {dict.about.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Main Container */}
      <div className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start w-full">
        <div className="lg:col-span-2 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 w-full">
          <FadeIn delay={0.1} className="shrink-0 mx-auto md:mx-0">
            <div className="relative group">
              <div
                className="absolute inset-0 bg-linear-to-tr from-amber-500 via-primary to-orange-600 
                  blur-2xl opacity-0 transition-all duration-700 ease-in-out dark:opacity-25 dark:group-hover:opacity-45 dark:group-hover:scale-110
                  rounded-3xl dark:rounded-[2rem_1.5rem_2.5rem_2rem]
                "
              />

              <div
                className="
                  relative w-32 h-32 md:w-40 md:h-40 border shadow-xl overflow-hidden transition-all duration-700 ease-in-out
                  rounded-3xl border-stone-200/60 rotate-0 bg-linear-to-b from-stone-100/80 to-stone-50/30 backdrop-blur-x    
                  dark:rounded-[2rem_1.5rem_2.5rem_2rem] dark:border-stone-800/80 dark:-rotate-1
                  dark:bg-linear-to-b dark:from-stone-900/90 dark:to-stone-950/40 dark:backdrop-blur-xs
                  group-hover:rotate-0 group-hover:border-orange-500/30 dark:group-hover:border-primary/40
                  group-hover:shadow-2xl group-hover:shadow-orange-500/5
                "
              >
                <Image
                  src="/images/profile.webp"
                  alt={dict.about.name}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out
                    drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-4 text-center md:text-left flex flex-col w-full">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              {dict.about.about_title}
            </h2>

            <p className="text-stone-600 dark:text-stone-400 text-center md:text-left leading-relaxed antialiased whitespace-pre-line text-sm sm:text-base">
              <span
                className="
                  font-extrabold tracking-tight select-all inline
                  bg-linear-to-r bg-clip-text text-transparent
                from-amber-600 via-orange-600 to-red-700
                dark:from-amber-400 dark:via-primary dark:to-orange-600
                "
              >
                {dict.about.name}
              </span>

              <span className="text-stone-400 dark:text-stone-600 font-normal mx-2 inline">
                —
              </span>

              <span className="inline">{dict.about.bio}</span>
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <FadeIn delay={0.16}>
          <SidebarCard content={dict} />
        </FadeIn>
      </div>

      {/* Skills */}
      <div className="mb-24">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          {dict.about.skills_title}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="
                group/skill rounded-xl border border-border/40
                bg-card/40 p-5
                transition-all duration-300
                hover:border-primary/30
                hover:bg-card/70
              "
            >
              <h3
                className="
                  mb-4 text-sm font-bold tracking-wide
                  text-foreground uppercase
                  transition-colors
                  group-hover/skill:text-primary
                "
              >
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item, itemIdx) => (
                  <AnimatedBadge key={item} index={itemIdx}>
                    {item}
                  </AnimatedBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-24">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
          {dict.about.experience_title}
        </h2>

        <Timeline journey={journey} />
      </div>

      {/* CTA */}
      <div
        className="
          group relative overflow-hidden rounded-2xl
          border border-border/40
          bg-linear-to-br from-card/40 via-muted/10 to-background/20
          p-10 text-center backdrop-blur-md
          md:p-12
        "
      >
        <div
          className="
            pointer-events-none absolute inset-0
            bg-radial from-primary/5 to-transparent
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        <h2
          className="
            relative z-10 mb-3 text-2xl font-extrabold
            tracking-tight text-balance md:text-3xl
          "
        >
          {dict.about.cta_title}
        </h2>

        <p
          className="
            relative z-10 mx-auto mb-8 max-w-md
            text-sm text-muted-foreground antialiased md:text-base
          "
        >
          {dict.about.cta_desc}
        </p>

        <Link
          href={`/${lang}/contact`}
          className="
            btn-sunset relative z-10 inline-flex items-center gap-2
            rounded-xl px-8 py-3 font-semibold text-white
            shadow-md transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-lg
          "
        >
          {dict.hero.cta_secondary}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
