"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  distance = 16,
}: FadeInProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -12% 0px",
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.215, 0.61, 0.355, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
