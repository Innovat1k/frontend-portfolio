import { getDictionary, type Lang } from "@/lib/content";
import { DictProvider } from "@/components/providers/DictProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/ui/ScrollButton";
import { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Inter } from "next/font/google";

const baseUrl = "https://al-ihmid.vercel.app";
const inter = Inter({ subsets: ["latin"] });

// Generates static routes for the build
export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

// Dynamic SEO by language
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const isEn = lang === "en";

  return {
    metadataBase: new URL("https://al-ihmid.vercel.app"),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
      url: `${baseUrl}/${lang}`,
      siteName: "Heïdi Al Ihmid Jeremia - Portfolio",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: lang === "en" ? "/og-image-en.png" : "/og-image-fr.png",
          width: 1200,
          height: 630,
          alt: "Heïdi Al Ihmid Jeremia - Frontend Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);

  return (
    <html lang={lang} suppressHydrationWarning data-scroll-behavior="smooth">
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

          <Script id="json-ld" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Heïdi Al Ihmid Jeremia",
              jobTitle:
                lang === "en"
                  ? "Frontend React & Next.js Developer"
                  : "Développeur Frontend React & Next.js",
              url: `${baseUrl}/${lang}`,
              sameAs: [
                "https://github.com/Innovat1k",
                "https://linkedin.com/in/al-ihmid",
              ],
              knowsLanguage: ["French", "English"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "MG",
                addressLocality: "Vohémar",
              },
              skills: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Responsive Design",
                "UI/UX Design",
              ],
            })}
          </Script>

          <DictProvider dict={dict}>
            <Header />
            <main className="flex-1 relative">{children}</main>
            <Footer dict={dict} />
            <ScrollButton />
          </DictProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
