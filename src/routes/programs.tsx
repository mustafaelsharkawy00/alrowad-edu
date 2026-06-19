import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { Reveal } from "@/components/Reveal";
import { GatewayArch } from "@/components/BrandMotifs";
import { programCategories, WHATSAPP_CTA } from "@/lib/site-data";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "البرامج التعليمية | الرواد" },
      {
        name: "description",
        content:
          "تعرّف على برامج أكاديمية الرواد: اللغات، المواد العلمية والأدبية، التأسيس، المواد الجامعية، الكورسات التقنية والإبداعية.",
      },
      { property: "og:title", content: "البرامج التعليمية | الرواد" },
      {
        property: "og:description",
        content: "برامج متكاملة تغطي كل المراحل والمجالات التعليمية في أكاديمية الرواد.",
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-navy">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-80" />
        <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-40" />
        <GatewayArch className="pointer-events-none absolute left-1/2 top-0 h-[150%] w-auto -translate-x-1/2 text-primary-foreground/[0.07]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary-foreground/5 px-4 py-1.5 text-xs font-bold text-gold">
            البرامج التعليمية
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-balance text-primary-foreground sm:text-5xl fade-up">
            مسارات تعليمية متكاملة لكل طموح
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg fade-up"
            style={{ "--fade-delay": "0.2s" } as React.CSSProperties}
          >
            صممنا برامجنا لتلبي احتياجات الطلاب في مختلف المراحل والمجالات، من التأسيس إلى الاحتراف،
            بأساليب حديثة ومتابعة مستمرة.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programCategories.map((category, i) => (
              <Reveal key={category.id} delay={(i % 3) * 0.1} className="h-full">
                <ProgramCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-navy px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute inset-0 ring-spot" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-extrabold text-balance text-primary-foreground sm:text-3xl">
                لم تجد ما تبحث عنه؟ تواصل معنا
              </h2>
              <p className="mt-4 text-primary-foreground/75">
                فريقنا جاهز لمساعدتك في اختيار البرنامج الأنسب لاحتياجاتك التعليمية.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                  <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer">
                    ابدأ رحلتك
                    <ArrowLeft />
                  </a>
                </Button>
                <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
                  <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                    تواصل عبر واتساب
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
