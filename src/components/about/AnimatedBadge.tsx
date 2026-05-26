"use client";

import { motion } from "framer-motion";

export default function AnimatedBadge({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 16,
        delay: index * 0.03,
      }}
      className="
        rounded-md border border-border/20
        bg-secondary/70 px-2.5 py-0.5
        text-[11px] font-medium tracking-wide
        text-secondary-foreground/90
        inline-block
      "
    >
      {children}
    </motion.span>
  );
}
