import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { content } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-20 max-w-6xl">
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance mb-4">
          {content.projects_page.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {content.projects_page.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
