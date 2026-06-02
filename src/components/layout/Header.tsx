"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import LangSwitcher from "../ui/LanguageToggle/LangSwitcher";
import { useDict } from "../providers/DictProvider";
import { useLangSwitcher } from "../ui/LanguageToggle/useLangSwitcher";

// Smooth Sunset Bézier Curve
const SUNSET_EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const dict = useDict();
  const { currentLang, localePath } = useLangSwitcher();

  const isActive = (path: string) => pathname === path;
  const isHome = pathname === `/${currentLang}`;

  // Waterfall animation for mobile menu
  const menuItemVariants = {
    closed: { opacity: 0, x: -8, filter: "blur(4px)" },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.04,
        duration: 0.4,
        ease: SUNSET_EASE,
      },
    }),
  };

  // Exterior click closure
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    }
    if (isOpened) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpened]);

  return (
    <header className="sticky top-0 z-50 w-full h-16 border-b border-amber-500/10 dark:border-amber-500/5 bg-stone-50/80 dark:bg-[#090706]/80 backdrop-blur-md transition-colors duration-500">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* Name */}
        <Link
          href={localePath("/")}
          className={`text-base sm:text-lg font-bold tracking-tight transition-all duration-300 select-none
            ${
              isHome
                ? "text-amber-600 dark:text-amber-500 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]"
                : "text-stone-900 dark:text-stone-100 hover:text-amber-600 dark:hover:text-amber-500"
            }`}
        >
          {dict.about.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {[
              { name: dict.nav.projects, path: "/projects" },
              { name: dict.nav.about, path: "/about" },
            ].map((item) => (
              <Link
                key={localePath(item.path)}
                href={localePath(item.path)}
                className={`relative text-sm font-medium transition-colors duration-300 py-1.5 select-none px-1
                  ${
                    isActive(localePath(item.path))
                      ? "text-amber-600 dark:text-amber-500"
                      : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                  }`}
              >
                {item.name}
                {isActive(localePath(item.path)) && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 dark:bg-amber-500 rounded-full shadow-[0_1px_6px_rgba(245,158,11,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Contact Button (Desktop) */}
            <Link
              href={localePath("/contact")}
              className={`text-sm font-semibold transition-all duration-300 py-2 px-4 rounded-xl border select-none
                ${
                  isActive(localePath("/contact"))
                    ? "border-amber-500/30 text-amber-600 dark:text-amber-500 bg-amber-500/5 dark:bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.05)]"
                    : "border-stone-200 dark:border-white/5 text-stone-700 dark:text-stone-300 bg-stone-500/2 dark:bg-white/1 hover:bg-amber-500/4 dark:hover:bg-amber-500/4 hover:border-amber-500/20 dark:hover:border-amber-500/20"
                }`}
            >
              {dict.nav.contact}
            </Link>
          </nav>

          <div className="h-4 w-px bg-stone-200 dark:bg-stone-800" />
          <ThemeToggle />
          <LangSwitcher />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpened(!isOpened)}
            aria-label="Toggle Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300
              border-stone-200 bg-stone-50/50 text-stone-800
              dark:border-white/5 dark:bg-white/5 dark:text-stone-200 hover:border-amber-500/20"
          >
            <motion.div
              key={isOpened ? "close" : "menu"}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isOpened ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drop-down menu */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, y: -4, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: SUNSET_EASE }}
            className="md:hidden absolute top-16 left-0 w-full bg-stone-50/95 dark:bg-[#090706]/95 backdrop-blur-xl border-b border-amber-500/10 dark:border-amber-500/5 shadow-2xl"
            aria-hidden={!isOpened}
          >
            <div className="h-px w-full bg-linear-to-r from-transparent via-amber-500/30 dark:via-amber-500/20 to-transparent" />

            <div ref={menuRef} className="px-4 pt-4 pb-5 flex flex-col gap-1.5">
              <motion.div
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                custom={0}
              >
                <Link
                  href={localePath("/")}
                  onClick={() => setIsOpened(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all
                    ${
                      isHome
                        ? "bg-amber-500/[0.07] text-amber-600 dark:text-amber-500 border border-amber-500/10"
                        : "text-stone-600 dark:text-stone-400 hover:bg-stone-500/5 dark:hover:bg-white/5 hover:text-stone-900 dark:hover:text-stone-100 border border-transparent"
                    }`}
                >
                  {dict.nav.home}
                  {isHome && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  )}
                </Link>
              </motion.div>

              {[
                { name: dict.nav.projects, path: "/projects" },
                { name: dict.nav.about, path: "/about" },
                { name: dict.nav.contact, path: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  custom={index + 1}
                >
                  <Link
                    href={localePath(item.path)}
                    onClick={() => setIsOpened(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all
                      ${
                        isActive(localePath(item.path))
                          ? "bg-amber-500/[0.07] text-amber-600 dark:text-amber-500 border border-amber-500/10"
                          : "text-stone-600 dark:text-stone-400 hover:bg-stone-500/5 dark:hover:bg-white/5 hover:text-stone-900 dark:hover:text-stone-100 border border-transparent"
                      }`}
                  >
                    {item.name}
                    {isActive(localePath(item.path)) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile LangSwitcher Button */}
              <motion.div
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                custom={5}
                className="mt-3 pt-3 border-t border-stone-200/60 dark:border-stone-800/60 flex items-center justify-end px-2"
              >
                <div className="inline-flex items-center bg-stone-200/40 dark:bg-white/2 p-1 rounded-xl border border-stone-200/50 dark:border-white/5">
                  <LangSwitcher />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
