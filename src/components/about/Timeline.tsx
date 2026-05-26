"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar } from "lucide-react";

interface Experience {
  id: string | number;
  role: string;
  period: string;
  company: string;
  description: string;
  current?: boolean;
}

export default function Timeline({ experiences }: { experiences: Experience[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative ml-3 space-y-8">
      {/* Structural bottom line */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-border/40" />
      
      {/* Illuminated progression line when scrolling */}
      <motion.div
        className="absolute left-0 top-2 bottom-2 w-px bg-primary origin-top shadow-[0_0_8px_rgba(234,179,8,0.3)]"
        style={{ scaleY }}
      />

      {experiences.map((exp) => (
        <div key={exp.id} className="group/exp relative pl-8">
          {/* Line node indicator */}
          {exp.current ? (
            <div className="absolute -left-1.25 top-2.5 h-2.75 w-2.75 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary border border-background" />
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute -left-1 top-2.5 h-2.5 w-2.5 rounded-full border border-background bg-muted-foreground/30 transition-colors duration-300 group-hover/exp:bg-primary group-hover/exp:ring-4 group-hover/exp:ring-primary/10"
            />
          )}

          {/* Card container */}
          <div
            className="
              rounded-xl border border-border/30
              bg-card/30 p-5
              transition-all duration-300
              hover:border-border/60
              hover:bg-card/50
              hover:shadow-xl
              hover:shadow-primary/5
            "
          >
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-bold text-foreground transition-colors duration-200 group-hover/exp:text-primary">
                {exp.role}
              </h3>

              <span className="flex w-fit items-center gap-1.5 rounded-md border border-border/30 bg-muted/60 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                <Calendar className="h-3 w-3 text-muted-foreground/70" />
                {exp.period}
              </span>
            </div>

            <p className="mb-3 text-xs font-semibold tracking-wide text-primary/90 uppercase">
              {exp.company}
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground antialiased">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}