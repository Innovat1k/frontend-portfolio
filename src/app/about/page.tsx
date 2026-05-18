import { content } from "@/lib/content";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">{content.about_page.title}</h1>
      <p className="text-muted-foreground mt-4">
        {content.contact_page.subtitle}
      </p>
    </section>
  );
}
