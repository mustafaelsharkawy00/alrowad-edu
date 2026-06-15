import { Link } from "@tanstack/react-router";
import { MessageCircle, MapPin, Send } from "lucide-react";
import logo from "@/assets/alrowad-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { DOMAIN, WHATSAPP_CHANNEL, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      {/* Community join band */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-right lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">انضم إلى مجتمع الرواد</h2>
            <p className="mt-2 text-primary-foreground/70">
              كن أول من يعرف عن البرامج الجديدة والمحتوى التعليمي المميز عبر قناتنا على واتساب.
            </p>
          </div>
          <Button asChild variant="whatsapp" size="lg">
            <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
              <Send className="rotate-180" />
              انضم إلى قناة الواتساب
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <img
            src={logo.url}
            alt="شعار الرواد"
            className="h-16 w-auto brightness-0 invert"
            width={140}
            height={140}
          />
          <p className="mt-4 max-w-sm leading-relaxed text-primary-foreground/70">
            نصنع روّاد المستقبل. مؤسسة تعليمية حديثة تجمع بين التميز الأكاديمي وتنمية المهارات
            والاستعداد لمتطلبات المستقبل.
          </p>
          <SocialLinks variant="dark" className="mt-6" />
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold">روابط سريعة</h3>
          <ul className="mt-4 space-y-3 text-primary-foreground/75">
            <li>
              <Link to="/" className="transition-colors hover:text-primary-foreground">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/programs" className="transition-colors hover:text-primary-foreground">
                البرامج التعليمية
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary-foreground">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold">تواصل معنا</h3>
          <ul className="mt-4 space-y-3 text-primary-foreground/75">
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
                dir="ltr"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                {WHATSAPP_NUMBER}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {DOMAIN}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} الرواد. جميع الحقوق محفوظة.</p>
          <p>نصنع روّاد المستقبل</p>
        </div>
      </div>
    </footer>
  );
}
