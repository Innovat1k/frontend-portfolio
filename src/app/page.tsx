import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {content.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {content.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">{content.hero.cta_primary}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">{content.hero.cta_secondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
