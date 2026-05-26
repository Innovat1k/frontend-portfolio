"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { content } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9 rounded-xl relative group overflow-hidden cursor-pointer select-none flex items-center justify-center
        transition-colors duration-300 outline-hidden
        border border-stone-200 bg-stone-100/50 text-stone-800
        hover:bg-stone-200/50 hover:border-amber-500/30 hover:shadow-[0_4px_12px_rgba(245,158,11,0.1)]
        dark:border-white/10 dark:bg-white/5 dark:text-stone-200
        dark:hover:bg-white/10 dark:hover:border-amber-500/30 dark:hover:shadow-[0_4px_12px_rgba(245,158,11,0.15)]"
      aria-label={content.buttons.toggle_theme || "Changer le thème"}
    >
      {!mounted ? (
        <span className="w-[1.15rem] h-[1.15rem] block opacity-0" />
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute flex items-center justify-center text-amber-500"
            >
              <Sun className="h-[1.15rem] w-[1.15rem]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute flex items-center justify-center text-indigo-400 dark:text-indigo-300"
            >
              <Moon className="h-[1.15rem] w-[1.15rem]" />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Interactive light halo when hovering */}
      <span className="absolute inset-0 bg-radial from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.button>
  );
}
