import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Send, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { GatewayArch, GoldDivider } from "@/components/BrandMotifs";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import {
  DOMAIN,
  WHATSAPP_CHANNEL,
  WHATSAPP_CTA,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | الرواد" },
      {
        name: "description",
        content:
          "تواصل مع أكاديمية الرواد مباشرة عبر واتساب. نصنع روّاد المستقبل — ابدأ رحلتك التعليمية اليوم.",
      },
      { property: "og:title", content: "تواصل معنا | الرواد" },
      {
        property: "og:description",
        content: "تواصل مع أكاديمية الرواد مباشرة عبر واتساب وسنرد عليك في أقرب وقت.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-navy">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-80" />
        <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-40" />
        <GatewayArch className="pointer-events-none absolute left-1/2 top-0 h-[150%] w-auto -translate-x-1/2 text-primary-foreground/[0.07]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary-foreground/5 px-4 py-1.5 text-xs font-bold text-gold">
            تواصل معنا
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-balance text-primary-foreground sm:text-5xl fade-up">
            ابدأ رحلتك التعليمية معنا
          </h1>
          <GoldDivider className="mt-6" />
          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg fade-up"
            style={{ "--fade-delay": "0.2s" } as React.CSSProperties}
          >
            فريق أكاديمية الرواد جاهز للإجابة على استفساراتك. راسلنا مباشرة عبر واتساب لاختيار البرنامج
            الأنسب لك.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
              <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                تواصل عبر واتساب
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                <Send className="rotate-180" />
                انضم إلى القناة
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="معلومات التواصل"
            title="نحن هنا لمساعدتك"
            description="اختر الوسيلة الأنسب للتواصل مع أكاديمية الرواد."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-elevated flex items-center gap-4 p-6"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[16px] border border-gold bg-icon-surface text-primary-2 transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <div className="font-extrabold text-primary">واتساب</div>
                <div className="text-sm text-muted-foreground" dir="ltr">
                  {WHATSAPP_NUMBER}
                </div>
              </div>
            </a>

            <div className="card-elevated flex items-center gap-4 p-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[16px] border border-gold bg-icon-surface text-primary-2">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <div className="font-extrabold text-primary">البريد الإلكتروني</div>
                <div className="text-sm text-muted-foreground" dir="ltr">
                  info@{DOMAIN}
                </div>
              </div>
            </div>

            <div className="card-elevated flex items-center gap-4 p-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[16px] border border-gold bg-icon-surface text-primary-2">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <div className="font-extrabold text-primary">نطاق الخدمة</div>
                <div className="text-sm text-muted-foreground">مصر · الوطن العربي والخليج</div>
              </div>
            </div>

            <div className="card-elevated flex items-center gap-4 p-6">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[16px] border border-gold bg-icon-surface text-primary-2">
                <Send className="h-6 w-6 rotate-180" />
              </div>
              <div>
                <div className="font-extrabold text-primary">تابعنا على</div>
                <SocialLinks className="mt-2" />
              </div>
            </div>
          </div>

          {/* Final WhatsApp CTA */}
          <div className="relative mt-12 overflow-hidden rounded-[2rem] gradient-navy px-6 py-12 text-center shadow-elegant sm:px-10">
            <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-30" />
            <div className="absolute inset-0 hero-mesh opacity-70" />
            <div className="relative mx-auto max-w-xl">
              <h2 className="text-2xl font-extrabold text-balance text-primary-foreground sm:text-3xl">
                جاهز للانطلاق؟ راسلنا الآن
              </h2>
              <p className="mt-3 text-primary-foreground/75">
                اضغط الزر وابدأ محادثة مباشرة مع فريق أكاديمية الرواد.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-7">
                <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer">
                  ابدأ المحادثة
                  <ArrowLeft />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
