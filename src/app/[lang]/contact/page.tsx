import { getDictionary, Lang } from "@/lib/content";
import ContactForm from "@/components/contact/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <section className="container mx-auto px-4 pt-10 md:pt-12 pb-12 md:pb-20 max-w-6xl relative min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Infos & Animated Text */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <div className="space-y-4 text-center md:text-left">
            <FadeIn delay={0}>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance leading-tight">
                {dict.contact.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed antialiased">
                {dict.contact.subtitle}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.16}>
            <ContactInfoCard content={dict} />
          </FadeIn>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 relative group/form w-full">
          <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/5 rounded-full blur-[90px] -z-10 group-hover/form:bg-primary/8 transition-colors duration-500 pointer-events-none" />

          <FadeIn delay={0.24}>
            <div className="bg-card/30 border border-border/40 rounded-2xl p-1 md:p-2 backdrop-blur-xs">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
