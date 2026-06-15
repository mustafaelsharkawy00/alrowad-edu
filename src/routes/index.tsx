import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  MessageCircle,
  Eye,
  UserCheck,
  Sparkles,
  Lightbulb,
  Rocket,
  LayoutGrid,
  Quote,
  Star,
} from "lucide-react";
import logoLight from "@/assets/alrowad-logo-light.png.asset.json";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import {
  GatewayArch,
  KnowledgePath,
  NodeConstellation,
  GoldDivider,
} from "@/components/BrandMotifs";
import { programCategories, WHATSAPP_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الرواد | انطلق نحو مستقبل أفضل" },
      {
        name: "description",
        content:
          "أكاديمية الرواد — برامج تعليمية متكاملة في المواد الدراسية واللغات والمواد الجامعية والكورسات التقنية والإبداعية مع متابعة مستمرة وبيئة احترافية.",
      },
      { property: "og:title", content: "الرواد | انطلق نحو مستقبل أفضل" },
      {
        property: "og:description",
        content: "تعليم اليوم يصنع مستقبل الغد. اكتشف برامج أكاديمية الرواد.",
      },
    ],
  }),
  component: HomePage,
});

const whyCards = [
  { icon: Eye, title: "متابعة مستمرة", text: "تقارير دورية ومتابعة فردية لكل طالب لضمان التقدم المستمر." },
  { icon: UserCheck, title: "مدرسون متخصصون", text: "نخبة من المعلمين الخبراء في مجالاتهم وأساليب التدريس الحديثة." },
  { icon: Sparkles, title: "تعليم حديث", text: "مناهج وأدوات تعليمية متطورة تواكب أحدث المعايير العالمية." },
  { icon: Lightbulb, title: "بيئة محفزة", text: "بيئة تعليمية ملهمة تشجع على التفكير والإبداع والمشاركة." },
  { icon: Rocket, title: "مهارات المستقبل", text: "إعداد الطلاب لمتطلبات سوق العمل ومهارات القرن الحادي والعشرين." },
  { icon: LayoutGrid, title: "تنوع البرامج", text: "برامج شاملة تغطي المواد الدراسية واللغات والتقنية والإبداع." },
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
    name: "ولي أمر — أحمد",
    role: "المرحلة الثانوية",
    text: "تحسّن مستوى ابني بشكل ملحوظ خلال أشهر قليلة. المتابعة المستمرة وأسلوب المعلمين صنعا فارقًا حقيقيًا.",
  },
  {
    name: "طالبة — سارة",
    role: "برنامج اللغات",
    text: "البيئة التعليمية محفّزة ومنظمة، وتعلمت مهارات لم أكن أتخيل الوصول إليها. تجربة احترافية بكل المقاييس.",
  },
  {
    name: "طالب — يوسف",
    role: "الكورسات التقنية",
    text: "تعلمت البرمجة من الصفر حتى بناء مشاريع حقيقية. المحتوى عملي ومواكب لسوق العمل تمامًا.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO — educational gateway concept */}
      <section className="relative overflow-hidden gradient-navy text-primary-foreground">
        {/* Layered brand atmosphere (no stock photo) */}
        <div className="pointer-events-none absolute inset-0 hero-mesh" />
        <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-40" />
        {/* Large gateway arch — the institutional motif from the logo */}
        <GatewayArch className="pointer-events-none absolute left-1/2 top-6 h-[115%] w-auto -translate-x-1/2 text-primary-foreground/[0.07]" />
        {/* Winding knowledge path accents */}
        <KnowledgePath className="pointer-events-none absolute right-4 top-1/2 hidden h-[26rem] w-auto -translate-y-1/2 text-accent/25 lg:block" />
        <KnowledgePath className="pointer-events-none absolute left-4 top-1/2 hidden h-[26rem] w-auto -translate-y-1/2 scale-x-[-1] text-gold/20 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <img
              src={logoLight.url}
              alt="شعار الرواد"
              width={220}
              height={220}
              className="mx-auto h-28 w-auto animate-fade drop-shadow-[0_18px_45px_color-mix(in_oklab,var(--accent)_35%,transparent)] sm:h-36"
            />
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary-foreground/5 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-gold" />
              مؤسسة تعليمية حديثة
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-balance text-primary-foreground sm:text-5xl lg:text-6xl animate-rise">
              انطلق نحو مستقبل أفضل مع الرواد
            </h1>
            <p className="mt-5 text-lg font-semibold text-accent sm:text-xl">
              تعليم اليوم يصنع مستقبل الغد
            </p>
            <GoldDivider className="mt-6" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              نوفر برامج تعليمية متكاملة في المواد الدراسية واللغات والمواد الجامعية والكورسات
              التقنية والإبداعية، مع متابعة مستمرة وبيئة تعليمية احترافية.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <Link to="/contact">
                  سجل الآن
                  <ArrowLeft />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Link to="/contact">تواصل معنا</Link>
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
      <section className="py-20 sm:py-28">
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
              {/* Branded gateway panel — institutional, no stock photo */}
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

      {/* WHY */}
      <section className="relative overflow-hidden surface-soft py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 dot-grid-navy opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="لماذا الرواد؟"
            title="مميزات تجعلنا الخيار الأمثل"
            description="نجمع بين الخبرة الأكاديمية والأساليب الحديثة لنمنح كل طالب تجربة تعليمية استثنائية."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS OVERVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
      <section className="relative overflow-hidden surface-soft py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 dot-grid-navy opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="آراء الطلاب"
            title="قصص نجاح تلهمنا"
            description="كلمات من طلابنا وأولياء أمورهم تعكس أثر التجربة التعليمية في أكاديمية الرواد."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft"
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
                <figcaption className="mt-4 border-t border-border pt-4">
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-navy px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute inset-0 ring-spot" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-balance text-primary-foreground sm:text-4xl">
                ابدأ رحلتك التعليمية معنا اليوم
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/75">
                خطوة واحدة تفصلك عن مستقبل أفضل. انضم إلى أكاديمية الرواد الآن.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                  <Link to="/contact">
                    سجل الآن
                    <ArrowLeft />
                  </Link>
                </Button>
                <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
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
