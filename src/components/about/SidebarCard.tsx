"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Globe, Download } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Content } from "@/lib/content";

export default function SidebarCard({ content }: { content: Content }) {
  return (
    <aside
      className="
        relative overflow-hidden rounded-2xl p-6 space-y-6
        bg-background/40 dark:bg-card/30
        backdrop-blur-2xl
        border border-border/50
        hover:border-primary/30
        shadow-xl shadow-black/5 dark:shadow-black/20
        transition-all duration-500
      "
    >
      {/* Glass Reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent dark:via-white/10" />

      {/* Availability */}
      <div className="group flex items-start gap-4 border-b border-border/30 pb-4">
        <div className="rounded-xl border border-primary/10 bg-primary/10 p-2.5 text-primary">
          <CheckCircle2 className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        </div>
        <div className="space-y-0.5">
          <span className="block text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase">
            {content.about.availability_title}
          </span>
          <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {content.about.availability}
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="group flex items-start gap-4 border-b border-border/30 pb-4">
        <div className="rounded-xl border border-border/40 bg-muted/40 p-2.5 text-muted-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary">
          <MapPin className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        </div>
        <div className="space-y-0.5">
          <span className="block text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase">
            {content.about.location_title}
          </span>
          <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {content.about.location}
          </p>
        </div>
      </div>

      {/* Languages */}
      <div className="group flex items-start gap-4">
        <div className="rounded-xl border border-border/40 bg-muted/40 p-2.5 text-muted-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary">
          <Globe className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        </div>
        <div className="space-y-0.5">
          <span className="block text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase">
            {content.about.languages_title}
          </span>
          <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {content.about.languages}
          </p>
        </div>
      </div>

      {/* CV Button */}
      <div className="pt-2">
        <Button
          asChild
          variant="outline"
          className="
            group h-11 w-full rounded-xl
            border-border/60 bg-background/50
            font-bold tracking-wider uppercase
            text-foreground/80
            transition-all duration-300
            hover:border-primary/40
            hover:bg-primary/5
            hover:text-primary
          "
        >
          <a
            href="/cv.pdf"
            download="CV_Heïdi_Al_Ihmid_Jeremia.pdf"
            className="flex items-center justify-center text-xs"
          >
            <motion.div
              variants={{
                hover: {
                  y: [0, 3, -1, 0],
                  transition: { duration: 0.45, ease: "easeInOut" },
                },
              }}
              className="mr-2"
            >
              <Download className="h-4 w-4" />
            </motion.div>
            {content.buttons.download_cv}
          </a>
        </Button>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-3 pt-1">
        <motion.a
          href="https://github.com/Innovat1k"
          target="_blank"
          rel="noreferrer"
          aria-label="Voir mon profil GitHub"
          whileHover={{ scale: 1.06, rotate: -6 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 350, damping: 12 }}
          className="rounded-xl border border-border/40 bg-muted/30 p-2.5 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
        >
          <LuGithub className="h-5 w-5" />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noreferrer"
          aria-label="Voir mon profil LinkedIn"
          whileHover={{ scale: 1.06, rotate: 6 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 350, damping: 12 }}
          className="rounded-xl border border-border/40 bg-muted/30 p-2.5 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
        >
          <LuLinkedin className="h-5 w-5" />
        </motion.a>
      </div>
    </aside>
  );
}
