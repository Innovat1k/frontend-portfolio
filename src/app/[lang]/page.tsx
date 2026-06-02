import { getProjects } from "@/data/projects";
import HomeClient from "@/components/home/HomeClient";
import { Lang } from "@/lib/content";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const projects = getProjects(lang);

  return <HomeClient projects={projects} />;
}
