"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";
import { content } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/animations/stagger";

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 pt-10 md:pt-12 pb-12 md:pb-20 max-w-6xl">
      <FadeIn className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-center md:text-left">
          {content.projects.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl text-center md:text-left">
          {content.projects.subtitle}
        </p>
      </FadeIn>

      <FadeIn>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={staggerItem}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </FadeIn>
    </section>
  );
}
