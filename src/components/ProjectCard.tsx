import Link from "next/link";
import { Project } from "@/types";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="group flex flex-col h-full bg-card border border-border/40 rounded-2xl overflow-hidden 
      hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 ease-out hover:-translate-y-1 relative"
    >
      {/* Zone Image */}
      <div className="relative h-48 bg-linear-to-br from-muted via-muted/60 to-background flex items-center justify-center overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[14px_24px]" />

        <div className="absolute inset-0 bg-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <span className="relative z-10 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 backdrop-blur-md px-3 py-1 rounded-md shadow-xs">
          {project.tags[0]}
        </span>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1 gap-5">
        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 antialiased">
            {project.description}
          </p>
        </div>

        {/* List of Secondary Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(1, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-medium bg-secondary/60 text-secondary-foreground/90 rounded-md border border-border/30 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card footer */}
        <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between gap-2">
          {/* Metric Capsule */}
          {project.metrics && project.metrics.length > 0 ? (
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-muted/40 border border-border/30 text-xs text-muted-foreground backdrop-blur-xs">
              <span className="font-extrabold text-primary tracking-tight">
                {project.metrics[0].value}
              </span>
              <span className="text-[11px] opacity-80">
                {project.metrics[0].label}
              </span>
            </div>
          ) : (
            <div className="w-1" />
          )}

          {/* Link to the project */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-200"
          >
            <span className="sr-only">{content.buttons.view_details}</span>
            <span className="hidden sm:inline text-xs font-medium tracking-wide text-foreground/80 group-hover:text-primary transition-colors">
              {content.buttons.view_details}
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
