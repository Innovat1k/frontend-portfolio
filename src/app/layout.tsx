import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { content } from "@/lib/content";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ScrollButton from "@/components/ui/ScrollButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  authors: [{ name: "Heïdi Al Ihmid Jeremia" }],
  keywords: content.meta.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased relative overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10
              w-full max-w-200 h-112.5 rounded-full blur-[120px] 
              transition-all duration-1000 ease-in-out select-none will-change-transform
              animate-float-sunset opacity-25 bg-linear-to-b from-amber-500/25 via-orange-400/10 to-amber-500/0
              dark:opacity-40 dark:bg-linear-to-b dark:from-orange-500/30 dark:via-amber-500/10 dark:to-orange-500/0"
            aria-hidden="true"
          />

          <Header />
          <main className="flex-1 relative">{children}</main>
          <Footer />
          <ScrollButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
