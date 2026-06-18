import { Link } from "@tanstack/react-router";
import { MessageCircle, MapPin, Send, Mail } from "lucide-react";
import logoLight from "@/assets/logowb.png.asset.json";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { GatewayArch, GoldDivider } from "@/components/BrandMotifs";
import {
  DOMAIN,
  WHATSAPP_CHANNEL,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "@/lib/site-data";

const quickLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/programs", label: "البرامج التعليمية" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#021338] text-primary-foreground border-t-2 border-gold">
      <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-25" />
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-40" />
      <GatewayArch className="pointer-events-none absolute -bottom-16 left-1/2 h-80 w-auto -translate-x-1/2 text-primary-foreground/[0.05]" />

      {/* Community join band */}
      <div className="relative border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-right">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">انضم إلى مجتمع الرواد</h2>
            <p className="mt-2 text-primary-foreground/70">
              كن أول من يعرف عن البرامج الجديدة والمحتوى التعليمي المميز عبر قناتنا على واتساب.
            </p>
          </div>
          <Button asChild variant="whatsapp" size="lg" className="shrink-0">
            <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
              <Send className="rotate-180" />
              انضم إلى قناة الواتساب
            </a>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr_1.2fr] lg:px-8">
        {/* Brand */}
        <div>
          <img
            src={logoLight.url}
            alt="شعار الرواد"
            className="h-24 w-auto"
            width={200}
            height={200}
          />
          <p className="mt-5 max-w-sm leading-relaxed text-primary-foreground/70">
            مؤسسة تعليمية حديثة تخدم مختلف الأنظمة التعليمية والمسارات الأكاديمية، من المراحل
            الدراسية الأولى وحتى الدراسة الجامعية والمهارات المهنية — داخل مصر والوطن العربي والخليج.
          </p>
          <div className="mt-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">تابعنا</span>
            <SocialLinks variant="dark" className="mt-3" />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold">
            <span className="h-px w-6 bg-gold/60" />
            روابط سريعة
          </h3>
          <ul className="mt-5 space-y-3 text-on-navy">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold">
            <span className="h-px w-6 bg-gold/60" />
            معلومات التواصل
          </h3>
          <ul className="mt-5 space-y-4 text-on-navy">
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-gold"
                dir="ltr"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/10 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <MessageCircle className="h-4 w-4" />
                </span>
                {WHATSAPP_NUMBER}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/10 text-gold">
                <Mail className="h-4 w-4" />
              </span>
              <span dir="ltr">info@{DOMAIN}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/10 text-gold">
                <MapPin className="h-4 w-4" />
              </span>
              مصر · الوطن العربي والخليج
            </li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <GoldDivider className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />
        <div className="mx-auto mt-2 flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} الرواد · {DOMAIN} · جميع الحقوق محفوظة.</p>
          <p className="font-semibold text-gold/90">نصنع روّاد المستقبل</p>
        </div>
      </div>
    </footer>
  );
}
