import { getDictionary, type Lang } from "@/lib/content";
import { DictProvider } from "@/components/providers/DictProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/ui/ScrollButton";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <DictProvider dict={dict}>
      <Header />
      <main className="flex-1 relative">{children}</main>
      <Footer dict={dict} />
      <ScrollButton />
    </DictProvider>
  );
}
