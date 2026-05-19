import { content } from "@/lib/content";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, ArrowRight } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl relative min-h-screen">
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/10 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Infos & Text */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-tight">
              {content.contact_page.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed antialiased">
              {content.contact_page.subtitle}
            </p>
          </div>

          {/* Coordinates map */}
          <div className="p-6 bg-card/50 border border-border/40 rounded-2xl space-y-6 backdrop-blur-xs shadow-xs">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {content.contact_page.direct_label}
              </h3>

              <a
                href="mailto:ihmid59@gmail.com"
                className="flex items-center gap-4 text-foreground/90 hover:text-primary transition-colors group py-2"
              >
                <div className="w-11 h-11 rounded-xl bg-background border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-muted/50 transition-all duration-300 shadow-2xs">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm sm:text-base tracking-wide group-hover:underline decoration-primary/40 underline-offset-4">
                    ihmid59@gmail.com
                  </span>
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                    {content.contact_page.direct_email}{" "}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            </div>

            {/* Social Networks Section*/}
            <div className="pt-5 border-t border-border/30">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                {content.contact_page.networks_label}
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Innovat1k"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-2xs"
                  aria-label="GitHub"
                >
                  <LuGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-2xs"
                  aria-label="LinkedIn"
                >
                  <LuLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 relative group/form w-full">
          {/* Glow effect */}
          <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/5 rounded-full blur-[90px] -z-10 group-hover/form:bg-primary/8 transition-colors duration-500 pointer-events-none" />

          <div className="bg-card/30 border border-border/40 rounded-2xl p-1 md:p-2 backdrop-blur-xs">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
