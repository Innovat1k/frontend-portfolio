import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GitFork } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { getDictionary, Lang } from "@/lib/content";
import { getProjects } from "@/data/projects";
import BackButton from "@/components/ui/backButton";

interface ProjectPageProps {
  params: Promise<{ lang: Lang; slug: string }>;
}

// export function generateStaticParams() {
//   return projects.map((project) => ({ slug: project.slug }));
// }

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { lang, slug } = await params;

  const dict = getDictionary(lang);

  const projects = getProjects(lang);

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="container mx-auto px-4 pt-4 max-w-5xl relative md:pt-12 pb-12">
      <FadeIn>
        <header className="mb-12 md:mb-16">
          <div className="w-full mb-6 md:mb-8">
            <div className="relative flex flex-col items-center text-center gap-4 sm:flex-row sm:items-baseline sm:text-left sm:gap-6 md:gap-8">
              <BackButton dict={dict} />

              <h1
                className="
              text-3xl font-extrabold tracking-tight text-foreground text-balance leading-tight px-12 mt-1 sm:text-4xl sm:px-0 sm:mt-0 sm:w-auto md:text-5xl"
              >
                {project.title}
              </h1>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-8 w-full overflow-x-auto flex-nowrap [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-x-visible">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-md border border-border/40 tracking-wide backdrop-blur-xs shrink-0
                bg-secondary/80 text-secondary-foreground sm:shrink"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3.5 w-full sm:flex-row sm:w-auto sm:gap-4">
            {/* Demo Button */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sunset inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white 
              shadow-sunset-sm hover:shadow-sunset-md transition-all duration-300 ease-out hover:-translate-y-0.5 select-none w-full sm:w-auto text-sm sm:text-base"
            >
              <span>{dict.buttons.view_demo}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Source Code Button */}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold
              border border-border bg-background/50 backdrop-blur-xs text-muted-foreground
              hover:bg-muted hover:text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 select-none
              w-full sm:w-auto text-sm sm:text-base"
            >
              <span>{dict.buttons.view_code}</span>
              <GitFork className="w-4 h-4" />
            </a>
          </div>
        </header>
      </FadeIn>

      {/* Main image gallery */}
      <FadeIn delay={0.1}>
        <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 bg-background/40 dark:bg-card/30 backdrop-blur-xl p-4 md:p-6 shadow-xl mb-16">
          <div className="relative w-full rounded-2xl mb-6 md:mb-8 overflow-hidden border border-border/50 shadow-lg group bg-zinc-950/20 dark:bg-black/40 p-3 sm:p-6 md:p-8 flex items-center justify-center">
            <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-border/60 bg-background transition-transform duration-500 ease-out group-hover:scale-[1.01] aspect-video">
              <Image
                src={project.image}
                alt={`Main screenshot of ${project.title}`}
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
                      alt={`Secondary view ${i + 1} of ${project.title}`}
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
      </FadeIn>

      {/* Text dict and scroll metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <section className="lg:col-span-2 space-y-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {dict.projects.slug_title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed text-base antialiased whitespace-pre-line">
              {project.longDescription}
            </p>
          </FadeIn>
        </section>

        {/* Sidebar: Performance Metrics */}
        {project.metrics.length > 0 && (
          <aside className="space-y-6 lg:sticky lg:top-24">
            <FadeIn>
              <div className="p-6 rounded-2xl bg-muted/30 border border-border/40 backdrop-blur-xs space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                  {dict.metrics.features}
                </h3>

                <div className="flex flex-col gap-4">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      style={{ transitionDelay: `${i * 50}ms` }}
                      className="p-4 bg-card/60 border border-border/50 rounded-xl flex flex-col justify-center hover:border-primary/40 hover:bg-card transition-all duration-300 group/metric"
                    >
                      <div className="text-xl font-extrabold text-primary tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-xs font-medium text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </aside>
        )}
      </div>
    </article>
  );
}
