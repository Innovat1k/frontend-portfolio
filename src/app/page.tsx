import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { content } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Filtrer featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-28 md:py-36 text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance leading-[1.15]">
            {content.hero.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="bg-linear-to-r from-primary via-primary/90 to-amber-500 bg-clip-text text-transparent">
              {content.hero.title.split(" ").slice(-2).join(" ")}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed antialiased">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="btn-sunset text-white px-8 w-full sm:w-auto font-semibold shadow-md transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Link href="/projects" className="inline-flex items-center gap-2">
                {content.hero.cta_primary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 w-full sm:w-auto bg-background/40 backdrop-blur-xs border-border/80 hover:bg-muted font-medium"
            >
              <Link href="/contact">{content.hero.cta_secondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="relative py-24 border-t border-border/30 bg-linear-to-b from-muted/20 via-muted/40 to-background">
          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                  {content.projects_section.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                  {content.projects_section.subtitle}
                </p>
              </div>

              <Button
                asChild
                variant="ghost"
                className="group/btn text-sm font-medium text-muted-foreground hover:text-primary self-start md:self-auto transition-colors"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5"
                >
                  {content.projects_section.view_all}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Project Card grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
