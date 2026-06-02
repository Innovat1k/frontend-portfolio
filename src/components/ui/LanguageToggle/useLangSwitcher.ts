// "use client";

// Handles language switching and localized routing in Next.js with client-side navigation
import { useRouter, usePathname } from "next/navigation";
import type { Lang } from "@/lib/content";

export function useLangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract language safely, fallback to a default if needed
  const currentLang = (pathname.split("/")[1] || "en") as Lang;

  const switchLang = (newLang: Lang) => {
    const segments = pathname.split("/");
    segments[1] = newLang;

    // Clean up empty segments or trailing slashes to avoid "//" or "/en/"
    const newPath = segments.join("/").replace(/\/+$/, "") || "/";
    router.push(newPath);
  };

  const localePath = (path: string): string => {
    // Ensure the path always starts with a single slash
    const safePath = path.startsWith("/") ? path : `/${path}`;
    return `/${currentLang}${safePath === "/" ? "" : safePath}`;
  };

  return { switchLang, currentLang, localePath };
}
