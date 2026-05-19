"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9 rounded-xl border border-border/50 bg-card/50 hover:bg-muted/80 hover:border-primary/30 hover:shadow-sunset-sm transition-all duration-300 relative group overflow-hidden cursor-pointer"
      aria-label={content.buttons.toggle_theme || "Changer le thème"}
    >
      {/* Sun: Visible in Light, turns and disappears in Dark */}
      <Sun className="h-[1.15rem] w-[1.15rem] text-amber-500 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rotate-0 scale-100 dark:-rotate-90 dark:scale-0 absolute" />

      {/* Moon : Hidden in Light, appears and turns in Dark */}
      <Moon className="h-[1.15rem] w-[1.15rem] text-indigo-400 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] rotate-90 scale-0 dark:rotate-0 dark:scale-100 absolute" />

      <span className="absolute inset-0 bg-radial from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Button>
  );
}
