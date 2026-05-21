import { content } from "@/lib/content";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experiences";
import {
  Calendar,
  ArrowRight,
  Download,
  Globe,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="container relative mx-auto max-w-6xl px-4 pt-12 pb-24">
      {/* Background Halo */}
      <div className="pointer-events-none absolute top-12 right-1/12 md:right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[130px] dark:bg-primary/5" />

      {/* Header */}
      <div className="mb-16 border-b border-border/30 pb-8">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-balance text-foreground md:text-5xl">
          {content.about.title}
        </h1>

        <p className="max-w-2xl text-base text-muted-foreground antialiased sm:text-lg">
          {content.about.subtitle}
        </p>
      </div>

      {/* Bio + Sidebar */}
      <div className="mb-24 grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
        {/* Bio */}
        <div className="space-y-6 lg:col-span-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {content.about.about_title}
          </h2>

          <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground antialiased">
            {content.about.bio}
          </p>
        </div>

        {/* Sidebar */}
        <aside
          className="
            relative overflow-hidden rounded-2xl p-6 space-y-6
            bg-background/40 dark:bg-card/30
            backdrop-blur-2xl
            border border-border/50
            hover:border-primary/30
            shadow-xl shadow-black/5 dark:shadow-black/20
            transition-all duration-500
          "
        >
          {/* Glass Reflection */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent dark:via-white/10" />

          {/* Availability */}
          <div className="group flex items-start gap-4 border-b border-border/30 pb-4">
            <div className="rounded-xl border border-primary/10 bg-primary/10 p-2.5 text-primary">
              <CheckCircle2 className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            </div>

            <div className="space-y-0.5">
              <span className="block text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase">
                {content.about.availability_title}
              </span>

              <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {content.about.availability}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="group flex items-start gap-4 border-b border-border/30 pb-4">
            <div
              className="
                rounded-xl border border-border/40
                bg-muted/40 p-2.5 text-muted-foreground
                transition-all duration-300
                group-hover:border-primary/20
                group-hover:bg-primary/5
                group-hover:text-primary
              "
            >
              <MapPin className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            </div>

            <div className="space-y-0.5">
              <span className="block text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase">
                {content.about.location_title}
              </span>

              <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {content.about.location}
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="group flex items-start gap-4">
            <div
              className="
                rounded-xl border border-border/40
                bg-muted/40 p-2.5 text-muted-foreground
                transition-all duration-300
                group-hover:border-primary/20
                group-hover:bg-primary/5
                group-hover:text-primary
              "
            >
              <Globe className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            </div>

            <div className="space-y-0.5">
              <span className="block text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase">
                {content.about.languages_title}
              </span>

              <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {content.about.languages}
              </p>
            </div>
          </div>

          {/* CV Button */}
          <div className="pt-2">
            <Button
              asChild
              variant="outline"
              className="
                group h-11 w-full rounded-xl
                border-border/60 bg-background/50
                font-bold tracking-wider uppercase
                text-foreground/80
                transition-all duration-300
                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              <a
                href="/cv.pdf"
                download="CV_Heïdi_Al_Ihmid_Jeremia.pdf"
                className="flex items-center justify-center text-xs"
              >
                <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-px" />

                {content.buttons.download_cv}
              </a>
            </Button>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-3 pt-1">
            <a
              href="https://github.com/Innovat1k"
              target="_blank"
              rel="noreferrer"
              aria-label="Voir mon profil GitHub"
              className="
                rounded-xl border border-border/40
                bg-muted/30 p-2.5 text-muted-foreground
                transition-all duration-300
                hover:border-primary/30
                hover:bg-primary/5
                hover:text-primary
                active:scale-95
              "
            >
              <LuGithub className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              aria-label="Voir mon profil LinkedIn"
              className="
                rounded-xl border border-border/40
                bg-muted/30 p-2.5 text-muted-foreground
                transition-all duration-300
                hover:border-primary/30
                hover:bg-primary/5
                hover:text-primary
                active:scale-95
              "
            >
              <LuLinkedin className="h-5 w-5" />
            </a>
          </div>
        </aside>
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
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-md border border-border/20
                      bg-secondary/70 px-2.5 py-0.5
                      text-[11px] font-medium tracking-wide
                      text-secondary-foreground/90
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-24">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
          {content.about.experience_title}
        </h2>

        <div className="relative ml-3 space-y-8 border-l border-border/40">
          {experiences.map((exp) => (
            <div key={exp.id} className="group/exp relative pl-8">
              <div
                className={`
                  absolute -left-1 top-2.5 h-2.5 w-2.5 rounded-full border border-background transition-all duration-300
                  ${
                    exp.current
                      ? "scale-125 bg-primary ring-4 ring-primary/20"
                      : "bg-muted-foreground/30 group-hover/exp:scale-110 group-hover/exp:bg-primary group-hover/exp:ring-4 group-hover/exp:ring-primary/10"
                  }
                `}
              />

              <div
                className="
                  rounded-xl border border-border/30
                  bg-card/30 p-5
                  transition-all duration-300
                  hover:border-border/60
                  hover:bg-card/50
                  hover:shadow-xl
                  hover:shadow-primary/5
                "
              >
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3
                    className="
                      text-lg font-bold text-foreground
                      transition-colors duration-200
                      group-hover/exp:text-primary
                    "
                  >
                    {exp.role}
                  </h3>

                  <span
                    className="
                      flex w-fit items-center gap-1.5 rounded-md
                      border border-border/30 bg-muted/60
                      px-2.5 py-1 text-[11px]
                      font-semibold tracking-wide
                      text-muted-foreground uppercase
                    "
                  >
                    <Calendar className="h-3 w-3 text-muted-foreground/70" />

                    {exp.period}
                  </span>
                </div>

                <p className="mb-3 text-xs font-semibold tracking-wide text-primary/90 uppercase">
                  {exp.company}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground antialiased">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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
