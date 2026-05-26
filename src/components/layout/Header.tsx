"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { content } from "@/lib/content";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;
  const isHome = pathname === "/";

  const menuItem = {
    closed: { opacity: 0, x: -12 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  // Closing the menu on external click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    }

    if (isOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpened]);

  return (
    <header className="sticky top-0 z-50 w-full h-16 border-b border-stone-200/60 dark:border-stone-800/40 bg-stone-100/80 dark:bg-[#0C0A09]/80 backdrop-blur-md transition-colors duration-500">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* Name */}
        <Link
          href="/"
          className={`
            text-base sm:text-lg font-bold tracking-tight transition-all duration-300 select-none
            ${isHome ? "text-amber-600 dark:text-amber-500 scale-102" : "text-stone-900 dark:text-stone-50 hover:text-amber-600 dark:hover:text-amber-500"}
          `}
        >
          Heïdi Al Ihmid Jeremia
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {[
              { name: content.nav.projects, path: "/projects" },
              { name: content.nav.about, path: "/about" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative text-sm font-medium transition-colors duration-300 py-2 select-none
                  ${isActive(item.path) ? "text-amber-600 dark:text-amber-500" : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"}
                `}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Contact Button (Desktop) */}
            <Link
              href="/contact"
              className={`
                text-sm font-semibold transition-all duration-300 py-2 px-4 rounded-xl border select-none
                ${
                  isActive("/contact")
                    ? "border-amber-500/30 text-amber-600 dark:text-amber-500 bg-amber-500/5 dark:bg-amber-500/10"
                    : "border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:bg-stone-500/5 dark:hover:bg-white/5 hover:border-stone-300 dark:hover:border-white/20"
                }
              `}
            >
              {content.nav.contact}
            </Link>
          </nav>

          <div className="h-4 w-px bg-stone-300 dark:bg-stone-800" />
          <ThemeToggle />
        </div>

        {/* Mobile Browsing Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpened(!isOpened)}
            aria-label="Toggle Menu"
            className="
              flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300
              border-stone-200 bg-stone-100/50 text-stone-800
              dark:border-white/10 dark:bg-white/5 dark:text-stone-200
            "
          >
            <motion.div
              key={isOpened ? "close" : "menu"}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isOpened ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-16 left-0 w-full bg-stone-100/95 dark:bg-[#0C0A09]/95 backdrop-blur-xl border-b border-stone-200/60 dark:border-stone-800/40 shadow-2xl"
            aria-hidden={!isOpened}
          >
            {/* Exclusive Sunset lightline at the top of the dropdown */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />

            <div ref={menuRef} className="px-4 py-4 flex flex-col gap-1.5">
              {/* Mobile Home Lien */}
              <motion.div
                variants={menuItem}
                initial="closed"
                animate="open"
                custom={0}
              >
                <Link
                  href="/"
                  onClick={() => setIsOpened(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all
                    ${
                      isHome
                        ? "bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/20"
                        : "text-stone-600 dark:text-stone-400 hover:bg-stone-500/5 dark:hover:bg-white/5 hover:text-stone-900 dark:hover:text-stone-100 border border-transparent"
                    }`}
                >
                  {content.nav.home}
                  {isHome && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  )}
                </Link>
              </motion.div>

              {/* Other Mobile Links */}
              {[
                { name: content.nav.projects, path: "/projects" },
                { name: content.nav.about, path: "/about" },
                { name: content.nav.contact, path: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={menuItem}
                  initial="closed"
                  animate="open"
                  custom={index + 1}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpened(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all
                      ${
                        isActive(item.path)
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/20"
                          : "text-stone-600 dark:text-stone-400 hover:bg-stone-500/5 dark:hover:bg-white/5 hover:text-stone-900 dark:hover:text-stone-100 border border-transparent"
                      }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
