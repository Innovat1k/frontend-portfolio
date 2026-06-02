"use client";

import { motion } from "framer-motion";
import { useLangSwitcher } from "./useLangSwitcher";

const SUNSET_EASE = [0.16, 1, 0.3, 1] as const;

export default function LangSwitcher() {
  const { switchLang, currentLang } = useLangSwitcher();

  const isFR = currentLang === "fr";
  const targetLang = isFR ? "en" : "fr";
  const labelText = isFR ? "English" : "Français";

  return (
    <motion.button
      onClick={() => switchLang(targetLang)}
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.25, ease: SUNSET_EASE }}
      className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md
        transition-all duration-300 cursor-pointer select-none bg-white/60 dark:bg-white/3 border-stone-200/70 dark:border-white/10
        text-stone-600 dark:text-stone-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/30 dark:hover:border-amber-500/30
        hover:bg-amber-500/6 dark:hover:bg-amber-500/5 shadow-sm hover:shadow-md"
      aria-label={`Switch to ${labelText}`}
      title={`Switch to ${labelText}`}
      type="button"
    >
      {/* Active lang indicator */}
      <span
        className={`
          w-2 h-2 rounded-full shrink-0 transition-all duration-300
          ${isFR ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"}
        `}
      />

      {/* Flag */}
      <span className="text-sm leading-none transition-transform duration-300 group-hover:scale-110">
        {isFR ? "🇫🇷" : "🇬🇧"}
      </span>

      {/* Text */}
      <span className="uppercase tracking-wider text-[10px] font-semibold opacity-80">
        {targetLang}
      </span>

      {/* Subtle animated glow */}
      <motion.span
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: SUNSET_EASE }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(245,158,11,0.12), transparent 70%)",
        }}
      />
    </motion.button>
  );
}
