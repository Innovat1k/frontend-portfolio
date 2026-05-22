import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GitFork } from "lucide-react";
import { content } from "@/lib/content";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="container mx-auto px-4 pt-4 pb-20 max-w-5xl relative">
      {/* Subtle decorative background (Glow effect) */}
      <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="mb-12">
        <div className="flex gap-5">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {content.buttons.back}
          </Link>{" "}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 text-balance">
            {project.title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold bg-secondary/80 text-secondary-foreground rounded-md border border-border/40 tracking-wide backdrop-blur-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sunset inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white shadow-sunset-sm hover:shadow-sunset-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {content.buttons.view_demo}
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background/50 backdrop-blur-xs rounded-xl font-medium hover:bg-muted hover:text-foreground text-muted-foreground transition-all duration-200"
          >
            {content.buttons.view_code}
            <GitFork className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Main image */}
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-border/50 
      bg-background/40 dark:bg-card/30 backdrop-blur-xl p-4 md:p-6 shadow-xl mb-16"
      >
        <div className="relative w-full rounded-2xl mb-6 md:mb-8 overflow-hidden border border-border/50 shadow-lg group bg-zinc-950/20 dark:bg-black/40 p-3 sm:p-6 md:p-8 flex items-center justify-center">
          <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-border/60 bg-background transition-transform duration-500 ease-out group-hover:scale-[1.01] aspect-video">
            <Image
              src={project.image}
              alt={`Capture d'écran principale de ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain antialiased selection:bg-transparent"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent opacity-100 pointer-events-none" />
        </div>

        {/* Secondary gallery */}
        {project.images && project.images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="relative w-full rounded-xl overflow-hidden border border-border/40 shadow-sm group bg-zinc-950/20 dark:bg-black/30 p-2 sm:p-4 flex items-center justify-center aspect-video"
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-border/40 bg-background transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={img}
                    alt={`Vue secondaire ${i + 1} de ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain antialiased"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Layout Content + Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Main description */}
        <section className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {content.projects_page.slug_title}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base antialiased whitespace-pre-line">
            {project.longDescription}
          </p>
        </section>

        {/* Right Column: Performance Metrics */}
        {project.metrics.length > 0 && (
          <aside className="space-y-6 lg:sticky lg:top-24 p-6 rounded-2xl bg-muted/30 border border-border/40 backdrop-blur-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
              {content.metrics.features}
            </h3>

            <div className="flex flex-col gap-4">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 bg-card/60 border border-border/50 rounded-xl flex flex-col justify-center
                    hover:border-primary/40 hover:bg-card transition-all duration-300 group/metric"
                >
                  <div className="text-xl font-extrabold text-primary tracking-tight bg-linear-to-r group-hover/metric:from-primary. group-hover/metric:to-primary/80. transition-all">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
