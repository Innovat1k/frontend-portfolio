import { getProjects } from "@/data/projects";
import { Lang } from "@/lib/content";
import ProjectsClient from "@/components/projects/ProjectsClient";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const projects = getProjects(lang);

  return <ProjectsClient projects={projects} />;
}
