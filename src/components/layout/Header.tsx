"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Header() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Helper to check if a link is active
  const isActive = (path: string) => pathname === path;
  const isHome = pathname === "/";

  // Close menu on external click
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Nom (Link to Home) */}
        <Link
          href="/"
          className={`
            text-lg font-bold tracking-tight transition-all duration-300 sm:text-lg
            ${isHome ? "text-primary scale-105" : "text-foreground hover:text-primary"}
          `}
        >
          Heïdi Al Ihmid Jeremia
        </Link>

        {/* Desktop Navigation */}
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
                  relative text-sm font-medium transition-colors duration-300 py-2
                  ${isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {item.name}
                {/* Visual indicator: Animated underline bar */}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in slide-in-from-bottom-1 duration-300" />
                )}
              </Link>
            ))}

            {/* Contact Button (Desktop) */}
            <Link
              href="/contact"
              className={`
                relative text-sm font-medium transition-colors duration-300 py-2 px-3 rounded-lg border border-border/50
                ${isActive("/contact") ? "border-primary/50 text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}
              `}
            >
              {content.nav.contact}
            </Link>
          </nav>

          {/* Theme Toggle Desktop */}
          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpened(!isOpened)}
            aria-label="Toggle Menu"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl border border-border/50
              bg-background/80 shadow-sm
              backdrop-blur-xl
              transition-colors
              hover:bg-muted
            "
          >
            {isOpened ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpened && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div
            ref={menuRef}
            className="container mx-auto px-4 py-4 flex flex-col gap-2"
          >
            {/* Home link on Mobile */}
            <Link
              href="/"
              onClick={() => setIsOpened(false)}
              className={`
                flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all
                ${
                  isHome
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                }
              `}
            >
              {content.nav.home}
              {isHome && <span className="w-2 h-2 rounded-full bg-primary" />}
            </Link>

            {[
              { name: content.nav.projects, path: "/projects" },
              { name: content.nav.about, path: "/about" },
              { name: content.nav.contact, path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpened(false)}
                className={`
                  flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all
                  ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                  }
                `}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="w-2 h-2 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
