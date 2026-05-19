"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
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
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight sm:text-xl">
          Heïdi Al Ihmid Jeremia
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-6">
            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {content.nav.projects}
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {content.nav.about}
            </Link>

            <Button asChild variant="outline" size="sm">
              <Link href="/contact">{content.nav.contact}</Link>
            </Button>
          </nav>

          {/* Theme Toggle Desktop */}
          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle Mobile */}
          <ThemeToggle />

          {/* Mobile Button */}
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

      {/* Mobile Menu */}
      {isOpened && (
        <div className="md:hidden">
          <div
            ref={menuRef}
            className="
              absolute left-4 right-4 top-20 z-50
              overflow-hidden rounded-2xl
              border border-border/50
              bg-background/95
              shadow-2xl
              backdrop-blur-xl
            "
          >
            <div className="flex flex-col p-3">
              <Link
                href="/projects"
                onClick={() => setIsOpened(false)}
                className="
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-colors
                  hover:bg-muted
                "
              >
                {content.nav.projects}
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpened(false)}
                className="
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-colors
                  hover:bg-muted
                "
              >
                {content.nav.about}
              </Link>

              <div className="mt-2 border-t border-border/50 pt-3">
                <Button asChild className="w-full rounded-xl" size="sm">
                  <Link href="/contact" onClick={() => setIsOpened(false)}>
                    {content.nav.contact}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
