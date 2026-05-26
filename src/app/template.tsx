"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (shouldReduceMotion) {
    return (
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <>
      {/* Raised curtain Overlay */}
      <motion.div
        key={`overlay-${pathname}`}
        className="fixed inset-0 z-50 pointer-events-none bg-linear-to-t from-orange-500 via-amber-400 to-orange-200 dark:from-orange-950 dark:via-orange-700 dark:to-amber-500"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        style={{ originY: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* Content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        className="relative z-10 min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}