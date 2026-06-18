import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  MessageCircle,
  Eye,
  UserCheck,
  Sparkles,
  Layers,
  Rocket,
  Cpu,
  Quote,
  Star,
} from "lucide-react";
import logoLight from "@/assets/alrowad-logo-light.png.asset.json";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { IconTile } from "@/components/IconTile";
import {
  GatewayArch,
  KnowledgePath,
  NodeConstellation,
  GoldDivider,
} from "@/components/BrandMotifs";
import { programCategories, audienceItems, WHATSAPP_CTA } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الرواد | مؤسسة تعليمية حديثة تصنع روّاد المستقبل" },
      {
        name: "description",
        content:
          "أكاديمية الرواد — مؤسسة تعليمية حديثة تخدم المناهج المصرية ومدارس اللغات والمدارس التجريبية وطلاب الجامعات والمهارات المهنية داخل مصر والوطن العربي والخليج.",
      },
      { property: "og:title", content: "الرواد | مؤسسة تعليمية حديثة تصنع روّاد المستقبل" },
      {
        property: "og:description",
        content: "تعليم اليوم يصنع مستقبل الغد. اكتشف برامج أكاديمية الرواد.",
      },
    ],
  }),
  component: HomePage,
});

const whyCards = [
  { icon: Eye, title: "متابعة أكاديمية مستمرة", text: "تقارير دورية ومتابعة فردية لكل طالب لضمان التقدم المستمر." },
  { icon: UserCheck, title: "مدرسون متخصصون", text: "نخبة من المعلمين الخبراء في مجالاتهم وأساليب التدريس الحديثة." },
  { icon: Sparkles, title: "أساليب تعلّم حديثة", text: "مناهج وأدوات تعليمية متطورة تواكب أحدث المعايير العالمية." },
  { icon: Layers, title: "تنوع تعليمي شامل", text: "برامج تغطي المراحل الدراسية واللغات والمواد الجامعية والمهارات." },
  { icon: Cpu, title: "تكامل مع التقنية", text: "توظيف التقنية في التعلّم لإعداد الطلاب لمتطلبات المستقبل." },
  { icon: Rocket, title: "مهارات المستقبل", text: "إعداد الطلاب لمتطلبات سوق العمل ومهارات القرن الحادي والعشرين." },
];

const aboutParagraphs = [
  "أكاديمية الرواد مؤسسة تعليمية حديثة تهدف إلى تقديم تجربة تعليمية متكاملة تجمع بين التميز الأكاديمي، وتنمية المهارات، والاستعداد لمتطلبات المستقبل.",
  "نؤمن أن التعليم لا يقتصر على تحصيل الدرجات فقط، بل يشمل بناء الشخصية، وتنمية التفكير، واكتساب المهارات التي تمكّن الطلاب من النجاح في الدراسة والحياة العملية.",
  "تقدم أكاديمية الرواد برامج تعليمية متنوعة تشمل المواد الدراسية، واللغات، والمواد الجامعية، والكورسات التقنية والإبداعية، من خلال بيئة تعليمية احترافية تعتمد على المتابعة المستمرة والتطوير الدائم.",
  "نسعى إلى إعداد جيل قادر على التعلم، والابتكار، والمنافسة بثقة في عالم سريع التغير.",
];

const stats = [
  { value: "+7", label: "مجالات تعليمية" },
  { value: "+40", label: "برنامج ومسار" },
  { value: "100%", label: "متابعة مستمرة" },
  { value: "∞", label: "طموح بلا حدود" },
];

const testimonials = [
  {
    name: "أحمد محمد",
    role: "الصف الثالث الثانوي",
    text: "المتابعة كانت منتظمة طوال السنة، والمدرسين بيشرحوا بأسلوب مبسّط. مستواي في المواد العلمية اتحسّن بشكل واضح قبل الثانوية العامة.",
  },
  {
    name: "مريم خالد",
    role: "الصف الثاني الإعدادي",
    text: "بقيت أفهم الدروس أول بأول، والواجبات بتتراجع باستمرار. حسّيت إن فيه اهتمام حقيقي بمستواي وتقدّمي.",
  },
  {
    name: "يوسف علي",
    role: "كلية الحاسبات",
    text: "ساعدوني في مواد الجامعة الصعبة زي البرمجة والرياضيات، والشرح كان عملي وبيوصّل الفكرة بسرعة.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO — educational gateway concept */}
      <section className="relative overflow-hidden gradient-navy text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 hero-mesh" />
        <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-40" />
        <GatewayArch className="pointer-events-none absolute left-1/2 top-6 h-[115%] w-auto -translate-x-1/2 text-primary-foreground/[0.08]" />
        <KnowledgePath className="pointer-events-none absolute right-6 top-1/2 hidden h-[26rem] w-auto -translate-y-1/2 text-accent/25 lg:block float-soft" />
        <KnowledgePath className="pointer-events-none absolute left-6 top-1/2 hidden h-[26rem] w-auto -translate-y-1/2 scale-x-[-1] text-gold/20 lg:block float-soft" />
        <NodeConstellation className="pointer-events-none absolute right-10 top-14 hidden h-20 w-auto text-accent/20 lg:block" />
        <NodeConstellation className="pointer-events-none absolute bottom-16 left-10 hidden h-20 w-auto scale-x-[-1] text-gold/15 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <img
              src={logoLight.url}
              alt="شعار الرواد"
              width={240}
              height={240}
              className="mx-auto h-28 w-auto animate-fade drop-shadow-[0_22px_55px_color-mix(in_oklab,var(--accent)_40%,transparent)] sm:h-40"
            />
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary-foreground/5 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-gold" />
              مؤسسة تعليمية حديثة
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-balance text-primary-foreground sm:text-5xl lg:text-6xl animate-rise">
              انطلق نحو مستقبل أفضل مع الرواد
            </h1>
            <p className="mt-5 text-lg font-semibold text-on-navy sm:text-xl animate-rise-delay">
              تعليم اليوم يصنع مستقبل الغد
            </p>
            <GoldDivider className="mt-6" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              نوفر برامج تعليمية متكاملة في المواد الدراسية واللغات والمواد الجامعية والكورسات
              التقنية والإبداعية، مع متابعة مستمرة وبيئة تعليمية احترافية.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer">
                  ابدأ رحلتك
                  <ArrowLeft />
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <a href={WHATSAPP_CTA} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  تواصل معنا
                </a>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-5 text-center backdrop-blur-sm transition-colors hover:border-gold/30"
              >
                <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-l from-transparent via-gold/60 to-transparent" />
                <div className="text-2xl font-extrabold text-gold sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="من نحن"
                title="مؤسسة تعليمية حديثة تصنع الفارق"
                align="start"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {aboutParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link to="/programs">
                  اكتشف برامجنا
                  <ArrowLeft />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent/10 to-gold/10 blur-2xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] gradient-navy shadow-elegant">
                <div className="absolute inset-0 dot-grid-light opacity-30" />
                <div className="absolute inset-0 hero-mesh opacity-70" />
                <GatewayArch className="absolute left-1/2 top-6 h-[105%] w-auto -translate-x-1/2 text-primary-foreground/15" />
                <KnowledgePath className="absolute left-1/2 top-8 h-[78%] w-auto -translate-x-1/2 text-accent/70 float-soft" />
                <NodeConstellation className="absolute bottom-6 left-6 h-16 w-auto text-gold/40" />
                <div className="absolute bottom-7 right-7 text-right">
                  <div className="text-sm font-semibold text-gold">بوابة المعرفة</div>
                  <div className="text-xs text-primary-foreground/70">رحلة تعلّم متصاعدة</div>
                </div>
              </div>
              <div className="absolute -bottom-6 right-6 rounded-2xl border border-border bg-card px-6 py-4 shadow-float">
                <div className="text-2xl font-extrabold text-primary">رؤية</div>
                <div className="text-sm text-muted-foreground">إعداد روّاد المستقبل</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE — educational systems & tracks we serve */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 dot-grid-navy opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="من نخدم"
            title="نخدم مختلف الأنظمة التعليمية والمسارات الأكاديمية"
            description="صُممت برامج الرواد لتواكب احتياجات الطلاب باختلاف أنظمتهم التعليمية وأهدافهم الأكاديمية، من المراحل الدراسية الأولى وحتى الدراسة الجامعية والمهارات المهنية، مع خدمات تعليمية تصل إلى المتعلمين داخل مصر وخارجها."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audienceItems.map(({ icon, title }) => (
              <div
                key={title}
                className="group card-elevated flex items-center gap-4 p-5"
              >
                <IconTile icon={icon} />
                <span className="text-base font-extrabold text-primary">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="لماذا الرواد؟"
            title="مميزات تجعلنا الخيار الأمثل"
            description="نجمع بين الخبرة الأكاديمية والأساليب الحديثة لنمنح كل طالب تجربة تعليمية استثنائية."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map(({ icon, title, text }) => (
              <div
                key={title}
                className="group card-premium rounded-3xl border border-border bg-card p-7 shadow-soft hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elegant"
              >
                <IconTile icon={icon} size="lg" />
                <h3 className="mt-5 text-lg font-extrabold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS OVERVIEW */}
      <section className="relative overflow-hidden surface-soft py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 dot-grid-navy opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="برامجنا"
            title="برامج تعليمية تغطي كل مسار"
            description="من المواد الدراسية واللغات إلى الكورسات التقنية والإبداعية — كل ما يحتاجه الطالب في مكان واحد."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programCategories.map((category) => (
              <ProgramCard key={category.id} category={category} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">
                عرض كل البرامج
                <ArrowLeft />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="surface-blue py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="آراء الطلاب"
            title="قصص نجاح من طلابنا"
            description="كلمات من طلابنا تعكس أثر المتابعة الأكاديمية والأساليب الحديثة في رحلتهم التعليمية."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="group card-premium flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elegant"
              >
                <Quote className="h-8 w-8 text-accent/40" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                  {t.text}
                </blockquote>
                <div className="mt-5 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold text-primary">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-navy px-6 py-16 text-center shadow-elegant sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-30" />
            <div className="absolute inset-0 hero-mesh opacity-80" />
            <GatewayArch className="pointer-events-none absolute left-1/2 top-0 h-[140%] w-auto -translate-x-1/2 text-primary-foreground/[0.07]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-balance text-primary-foreground sm:text-4xl">
                ابدأ رحلتك التعليمية معنا اليوم
              </h2>
              <GoldDivider className="mt-5" />
              <p className="mt-5 text-lg text-primary-foreground/75">
                خطوة واحدة تفصلك عن مستقبل أفضل. تواصل معنا مباشرة عبر واتساب.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
