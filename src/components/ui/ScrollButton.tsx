"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      // Accurate calculation of y-axis position for footer
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Tolerance margin of 100px before the footer to reverse the arrow
      setIsAtBottom(scrollPosition >= documentHeight - 100);
    };

    // Optimizes scrolling performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.3, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          onClick={handleClick}
          className="fixed bottom-8 right-5 sm:bottom-6 sm:right-6 z-50 group w-12 h-12 flex items-center justify-center rounded-xl 
            bg-background/40 dark:bg-foreground/5 
            border border-border/50 dark:border-white/10 
            backdrop-blur-xl pointer-events-auto
            shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] 
            hover:shadow-[0_6px_20px_rgba(217,121,91,0.25)] 
            hover:border-primary/40 
            hover:bg-primary/5
            active:scale-95
            transition-all duration-300 cursor-pointer"
          aria-label={isAtBottom ? "Remonter en haut" : "Descendre en bas"}
        >
          {/* Animated Toggle Icon Container (Morph) */}
          <div className="relative w-5 h-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isAtBottom ? (
                <motion.div
                  key="up"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute flex items-center justify-center"
                >
                  <ArrowUp className="w-5 h-5 text-muted-foreground/70 group-hover:text-primary transition-colors duration-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="down"
                  initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute flex items-center justify-center"
                >
                  <ArrowDown className="w-5 h-5 text-muted-foreground/70 group-hover:text-primary transition-colors duration-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
