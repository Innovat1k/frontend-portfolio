import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Heïdi Al Ihmid Jeremia.{" "}
          {content.footer.all_rights}
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Innovat1k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {content.footer.github}
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {content.footer.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
