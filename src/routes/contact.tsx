import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Send, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import {
  DOMAIN,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  programCategories,
} from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | الرواد" },
      {
        name: "description",
        content:
          "تواصل مع أكاديمية الرواد عبر واتساب أو نموذج التسجيل. نصنع روّاد المستقبل — ابدأ رحلتك التعليمية اليوم.",
      },
      { property: "og:title", content: "تواصل معنا | الرواد" },
      {
        property: "og:description",
        content: "سجّل اهتمامك بأكاديمية الرواد وسنتواصل معك في أقرب وقت.",
      },
    ],
  }),
  component: ContactPage,
});

const stages = [
  "المرحلة الابتدائية",
  "المرحلة الإعدادية",
  "المرحلة الثانوية",
  "المرحلة الجامعية",
  "أخرى",
];

function ContactPage() {
  const [stage, setStage] = useState("");
  const [program, setProgram] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !phone) {
      toast.error("يرجى إدخال الاسم ورقم الهاتف");
      return;
    }

    const lines = [
      "طلب تسجيل جديد - أكاديمية الرواد",
      `الاسم: ${name}`,
      `رقم الهاتف: ${phone}`,
      stage ? `المرحلة الدراسية: ${stage}` : "",
      program ? `البرنامج المهتم به: ${program}` : "",
      message ? `الرسالة: ${message}` : "",
    ].filter(Boolean);

    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("تم تجهيز رسالتك! سيتم تحويلك إلى واتساب لإتمام التواصل.");
    form.reset();
    setStage("");
    setProgram("");
  }

  return (
    <>
      <section className="relative overflow-hidden gradient-navy">
        <div className="absolute inset-0 ring-spot" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary-foreground/5 px-4 py-1.5 text-xs font-bold text-gold">
            تواصل معنا
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-balance text-primary-foreground sm:text-5xl">
            ابدأ رحلتك التعليمية معنا
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            املأ النموذج وسنتواصل معك، أو راسلنا مباشرة عبر واتساب لأي استفسار.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          {/* Info */}
          <div>
            <SectionHeading
              eyebrow="معلومات التواصل"
              title="نحن هنا لمساعدتك"
              align="start"
            />
            <p className="mt-4 leading-relaxed text-muted-foreground">
              فريق أكاديمية الرواد جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار البرنامج
              المناسب.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-primary">واتساب</div>
                  <div className="text-sm text-muted-foreground" dir="ltr">
                    {WHATSAPP_NUMBER}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-primary">الموقع الإلكتروني</div>
                  <div className="text-sm text-muted-foreground">{DOMAIN}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-primary">تابعنا على</div>
                  <SocialLinks className="mt-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-8">
            <h2 className="text-2xl font-extrabold text-primary">نموذج التسجيل</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              املأ بياناتك وسنعاود التواصل معك في أقرب وقت ممكن.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم</Label>
                <Input id="name" name="name" placeholder="اكتب اسمك الكامل" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="أدخل رقم هاتفك"
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>المرحلة الدراسية</Label>
                  <Select value={stage} onValueChange={setStage}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المرحلة" />
                    </SelectTrigger>
                    <SelectContent>
                      {stages.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>البرنامج المهتم به</Label>
                  <Select value={program} onValueChange={setProgram}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر البرنامج" />
                    </SelectTrigger>
                    <SelectContent>
                      {programCategories.map((c) => (
                        <SelectItem key={c.id} value={c.title}>
                          {c.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">الرسالة</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="اكتب رسالتك أو استفسارك هنا..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="rotate-180" />
                إرسال
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
