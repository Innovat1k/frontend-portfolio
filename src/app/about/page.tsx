import { content } from "@/lib/content";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experiences";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 pt-12 pb-24 max-w-5xl relative">
      <div className="absolute top-0 right-1/4 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="mb-16 border-b border-border/30 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 text-balance">
          {content.about_page.title}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl antialiased">
          {content.about_page.subtitle}
        </p>
      </div>

      {/* Bio & Quick Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24 items-start">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Qui suis-je ?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base antialiased whitespace-pre-line">
            {content.about_page.bio}
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground">
          {content.about_page.skills_title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-5 bg-card/60 border border-border/40 rounded-xl hover:border-primary/30 hover:bg-card transition-all duration-300 group/skill"
            >
              <h3 className="font-bold text-foreground text-sm tracking-wide uppercase mb-4 group-hover/skill:text-primary transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-0.5 text-[11px] font-medium bg-secondary/70 text-secondary-foreground/90 rounded-md border border-border/30 tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight mb-10 text-foreground">
          {content.about_page.experience_title}
        </h2>
        <div className="relative border-l border-border/60 ml-3 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 group/exp">
              <div
                className={`absolute -left-1.25 top-2.5 w-2.5 h-2.5 rounded-full border border-background transition-all duration-300
                  ${
                    exp.current
                      ? "bg-primary ring-4 ring-primary/20 scale-125"
                      : "bg-muted-foreground/40 group-hover/exp:bg-primary group-hover/exp:ring-4 group-hover/exp:ring-primary/10 group-hover/exp:scale-110"
                  }`}
              />

              <div className="p-5 bg-card/40 border border-border/40 rounded-xl hover:border-border/80 hover:bg-card hover:shadow-2xl hover:shadow-primary/2 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="font-bold text-foreground text-lg group-hover/exp:text-primary transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-muted border border-border/30 rounded-md text-muted-foreground flex items-center gap-1.5 w-fit tracking-wide uppercase">
                    <Calendar className="w-3 h-3 text-muted-foreground/70" />{" "}
                    {exp.period}
                  </span>
                </div>
                <p className="font-semibold text-primary/90 mb-3 tracking-wide uppercase text-xs">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed antialiased">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center p-10 md:p-12 bg-linear-to-br from-muted/30 via-muted/10 to-background rounded-2xl border border-border/40 relative overflow-hidden group">
        <div className="absolute inset-0 bg-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 relative z-10 text-balance">
          {content.about_page.cta_title}
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-md mx-auto relative z-10 antialiased">
          {content.about_page.cta_desc}
        </p>
        <Link
          href="/contact"
          className="btn-sunset inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 relative z-10"
        >
          {content.hero.cta_secondary}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
