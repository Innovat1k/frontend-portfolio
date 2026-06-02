"use client";

import { Content } from "@/lib/content";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLangSwitcher } from "./LanguageToggle/useLangSwitcher";

function BackButton({ dict }: { dict: Content }) {
  const { localePath } = useLangSwitcher();

  return (
    <div className="absolute left-0 top-1 sm:relative sm:top-auto sm:left-auto sm:shrink-0">
      <Link
        href={localePath("/projects")}
        className="
                  inline-flex items-center justify-center gap-2 text-sm font-medium 
                  text-muted-foreground hover:text-foreground transition-all duration-300
                  w-9 h-9 rounded-lg bg-muted/10 border border-border/30 backdrop-blur-md
                  sm:w-auto sm:h-auto sm:bg-transparent sm:border-none sm:backdrop-blur-none sm:py-1 sm:px-0 group
                "
        aria-label={dict.buttons.back}
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
        <span className="hidden sm:inline">{dict.buttons.back}</span>
      </Link>
    </div>
  );
}

export default BackButton;
