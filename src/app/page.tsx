"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { content } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FAF7F2] dark:bg-[#0C0A09] transition-colors duration-500">
      <section className="relative z-10 w-full h-[calc(100dvh-64px)] flex flex-col items-center justify-center container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance leading-[1.15] text-stone-900 dark:text-stone-50">
            {content.hero.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="bg-linear-to-r from-primary via-primary/90 to-amber-500 bg-clip-text text-transparent">
              {content.hero.title.split(" ").slice(-2).join(" ")}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed antialiased">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="btn-sunset text-white px-8 w-full sm:w-auto font-bold shadow-sunset-sm hover:shadow-sunset-md transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 justify-center"
              >
                {content.hero.cta_primary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="
                px-8 w-full sm:w-auto font-semibold transition-all duration-300 rounded-xl justify-center
                border-stone-300 text-stone-800 bg-transparent hover:bg-stone-500/5
                dark:border-white/10 dark:bg-white/5 dark:text-stone-200 dark:hover:bg-white/10 dark:hover:border-white/20
                backdrop-blur-md hover:-translate-y-0.5
              "
            >
              <Link href="/contact">{content.hero.cta_secondary}</Link>
            </Button>
          </div>
        </div>

        {/* Scroll micro-indicator */}
        {featuredProjects.length > 0 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden sm:block">
            <div className="w-5 h-8 border-2 border-stone-400 dark:border-stone-600 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-1.5 bg-stone-400 dark:bg-stone-600 rounded-full" />
            </div>
          </div>
        )}
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="relative py-24 border-t border-stone-200/50 dark:border-stone-800/40 bg-linear-to-b from-stone-100/40 via-transparent to-background dark:from-stone-900/10">
          <div className="container mx-auto px-4 relative z-10">
            {/* Project Section Header */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left mb-14 gap-5 w-full max-w-3xl">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
                  {content.projects_section.title}
                </h2>
                <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
                  {content.projects_section.subtitle}
                </p>
              </div>

              <Button
                asChild
                variant="ghost"
                className="group/btn text-sm font-semibold self-center md:self-start p-0 h-auto hover:bg-transparent text-stone-600 dark:text-stone-400
              hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
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

            {/* Grid */}
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
