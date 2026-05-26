import { content } from "@/lib/content";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experiences";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SidebarCard from "@/components/about/SidebarCard";
import AnimatedBadge from "@/components/about/AnimatedBadge";
import Timeline from "@/components/about/Timeline";

export default function AboutPage() {
  return (
    <section className="container relative mx-auto max-w-6xl px-4 pt-10 md:pt-12 pb-12 md:pb-20">
      {/* Header */}
      <div className="mb-8 border-b border-border/30 pb-8 text-center md:text-left">
        <FadeIn delay={0}>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-balance text-foreground md:text-5xl">
            {content.about.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="max-w-2xl text-base text-muted-foreground antialiased sm:text-lg">
            {content.about.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Bio + Sidebar */}
      <div className="mb-24 grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {content.about.about_title}
          </h2>

          <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground antialiased">
            {content.about.bio}
          </p>
        </div>

        <FadeIn delay={0.16}>
          <SidebarCard content={content} />
        </FadeIn>
      </div>

      {/* Skills */}
      <div className="mb-24">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          {content.about.skills_title}
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
          {content.about.experience_title}
        </h2>

        <Timeline experiences={experiences} />
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
          {content.about.cta_title}
        </h2>

        <p
          className="
            relative z-10 mx-auto mb-8 max-w-md
            text-sm text-muted-foreground antialiased md:text-base
          "
        >
          {content.about.cta_desc}
        </p>

        <Link
          href="/contact"
          className="
            btn-sunset relative z-10 inline-flex items-center gap-2
            rounded-xl px-8 py-3 font-semibold text-white
            shadow-md transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-lg
          "
        >
          {content.hero.cta_secondary}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
