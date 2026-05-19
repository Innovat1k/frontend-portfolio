import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { content } from "@/lib/content";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  authors: [{ name: content.meta.author }],
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
            className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-200 h-125 rounded-full blur-[140px] opacity-40 pointer-events-none transition-colors duration-700 ease-in-out -z-10
            bg-linear-to-b from-primary/30 via-transparent to-transparent 
          dark:from-orange-500/10 dark:via-transparent dark:to-transparent"
          />

          <Header />
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
