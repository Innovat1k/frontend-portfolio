"use client";

import Link from "next/link";
import { Project } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDict } from "../providers/DictProvider";
import { useLangSwitcher } from "../ui/LanguageToggle/useLangSwitcher";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const dict = useDict();
  const { localePath } = useLangSwitcher();

  return (
    <motion.article
      className="group flex flex-col h-full bg-card border border-border/40 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 relative"
      whileHover="hover"
      variants={{
        hover: {
          y: -6,
          transition: { type: "spring", stiffness: 150, damping: 18 },
        },
      }}
    >
      {/* Image area */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-border/30 bg-zinc-900/40 dark:bg-black/40 flex items-center justify-center p-3 sm:p-4 group-hover:bg-zinc-900/20 dark:group-hover:bg-black/20 transition-colors duration-500">
        {/* Superior physical light reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 dark:via-white/10 to-transparent pointer-events-none z-10" />

        {/* Animated image container on global map hover */}
        <motion.div
          className="relative w-full h-full rounded-xl overflow-hidden shadow-xs border border-border/50 dark:border-white/5 bg-neutral-950/20 dark:bg-black/20"
          variants={{
            hover: {
              scale: 1.03,
              transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
            },
          }}
        >
          <Image
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain sm:object-cover sm:object-top antialiased transition-transform duration-700 ease-out group-hover:scale-105"
            priority={project.featured}
          />
        </motion.div>

        <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-primary bg-background/95 dark:bg-zinc-900/95 border border-border/40 px-2 sm:px-2.5 py-1 rounded-md shadow-xs">
          {project.tags[0]}
        </span>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1 gap-5">
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
            href={localePath(`/projects/${project.slug}`)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-200"
          >
            <span className="sr-only">{dict.buttons.view_details}</span>
            <span className="hidden sm:inline text-xs font-medium tracking-wide text-foreground/80 group-hover:text-primary transition-colors">
              {dict.buttons.view_details}
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
