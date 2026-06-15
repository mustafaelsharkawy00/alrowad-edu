import {
  Languages,
  FlaskConical,
  ScrollText,
  GraduationCap,
  Building2,
  Code2,
  Palette,
  type LucideIcon,
} from "lucide-react";

export interface ProgramCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const programCategories: ProgramCategory[] = [
  {
    id: "languages",
    icon: Languages,
    title: "اللغات",
    description: "إتقان أهم اللغات العالمية بأساليب تعليمية حديثة تركز على المحادثة والكتابة.",
    items: ["اللغة العربية", "English Language", "Français", "Deutsch"],
  },
  {
    id: "science",
    icon: FlaskConical,
    title: "المواد العلمية",
    description: "فهم عميق للمفاهيم العلمية مع التطبيق العملي والتجارب التفاعلية.",
    items: ["رياضيات & Math", "علوم & Science", "فيزياء & Physics", "كيمياء & Chemistry", "أحياء & Biology"],
  },
  {
    id: "literary",
    icon: ScrollText,
    title: "المواد الأدبية",
    description: "بناء وعي ثقافي وفكري متكامل عبر العلوم الإنسانية والاجتماعية.",
    items: ["التاريخ", "الجغرافيا", "الفلسفة", "الدراسات الاجتماعية", "التربية الإسلامية"],
  },
  {
    id: "foundation",
    icon: GraduationCap,
    title: "برامج التأسيس",
    description: "أساس متين للطلاب يجمع بين المهارات الأكاديمية والقيم الراسخة.",
    items: [
      "برامج التأسيس للمواد الدراسية",
      "UC Math",
      "الحساب الذهني",
      "القرآن الكريم",
      "التجويد",
      "التفسير",
    ],
  },
  {
    id: "university",
    icon: Building2,
    title: "المواد الجامعية",
    description: "دعم متخصص لطلاب الجامعات في المقررات النظرية والتطبيقية المتقدمة.",
    items: [
      "التفاضل والتكامل",
      "الفيزياء",
      "الميكانيكا",
      "الرياضيات المتقدمة",
      "علوم الحاسب",
      "الإحصاء",
    ],
  },
  {
    id: "technical",
    icon: Code2,
    title: "الكورسات التقنية",
    description: "مهارات تقنية مطلوبة في سوق العمل من البرمجة إلى تحليل البيانات.",
    items: [
      "ICDL",
      "Python",
      "C++",
      "Front-End Development",
      "C#",
      "Flutter",
      "Networking",
      "Data Analysis",
    ],
  },
  {
    id: "creative",
    icon: Palette,
    title: "الكورسات الإبداعية والمهنية",
    description: "إطلاق الطاقات الإبداعية وبناء حضور احترافي في عالم المحتوى الرقمي.",
    items: ["Graphic Design", "Video Editing", "Digital Marketing"],
  },
];

export const WHATSAPP_NUMBER = "+20 106 313 5997";
export const WHATSAPP_LINK = "https://wa.me/201063135997";
export const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb7PPM7Dp2Q5JYANRW0P";
export const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=61590912205880";
export const INSTAGRAM_LINK = "https://www.instagram.com/alrowad_edu";
export const TIKTOK_LINK = "https://www.tiktok.com/@alrowad.edu";
export const DOMAIN = "alrowad.edu";
