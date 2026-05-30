"use client";

import { Content } from "@/lib/content";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export function ContactInfoCard({ content }: { content: Content }) {
  return (
    <div className="p-6 bg-card/50 border border-border/40 rounded-2xl space-y-6 backdrop-blur-xs shadow-xs">
      {/* Section Email Direct */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {content.contact.direct_label}
        </h3>

        <a
          href="mailto:ihmid59@gmail.com"
          className="flex items-center gap-4 text-foreground/90 hover:text-primary transition-colors group py-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-xl bg-background border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-muted/50 transition-all duration-300 shadow-2xs"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>

          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-wide group-hover:underline decoration-primary/40 underline-offset-4">
              ihmid59@gmail.com
            </span>
            <span className="text-[11px] text-muted-foreground flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
              {content.contact.direct_email}{" "}
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </a>
      </div>

      {/* Socials */}
      <div className="pt-5 border-t border-border/30">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
          {content.contact.networks_label}
        </h3>

        <div className="flex gap-3">
          <motion.a
            href="https://github.com/Innovat1k"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, rotate: -6 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            className="w-11 h-11 rounded-xl bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors shadow-2xs"
            aria-label="GitHub"
          >
            <LuGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/al-ihmid"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, rotate: 6 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            className="w-11 h-11 rounded-xl bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors shadow-2xs"
            aria-label="LinkedIn"
          >
            <LuLinkedin className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
