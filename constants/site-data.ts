import type { PricingPlan, ProjectItem, ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    slug: "digital-development",
    category: "programming",
    image: "/images/services/icon-dev.png",
    heroImage: "/images/services/service-detail-hero.png",
    title: {
      ar: "التطوير الرقمي",
      en: "Digital Development",
    },
    description: {
      ar: "نصمم ونطور مواقع وتطبيقات وحلولاً رقمية تلبي احتياجات أعمالك.",
      en: "We design and build websites, apps, and custom digital platforms tailored to your business.",
    },
    introSubtitle: {
      ar: "عن الخدمة",
      en: "About the Service",
    },
    introTitle: {
      ar: "مواقع وتطبيقات مصممة لتنمو معك",
      en: "Websites and apps engineered to grow with you",
    },
    introBody1: {
      ar: "نصمم ونطور مواقع وتطبيقات وحلولاً رقمية تلبي احتياجات أعمالك، بتجربة استخدام واضحة وأداء سريع وكود نظيف قابل للتوسع.",
      en: "We craft fast, intuitive websites, mobile applications, and custom digital solutions built with clean, scalable architecture.",
    },
    introBody2: {
      ar: "نبدأ بفهم هدف مشروعك، ثم نبني الحل خطوة بخطوة مع متابعة مستمرة حتى الإطلاق وما بعده.",
      en: "We start by deeply understanding your business objective, then execute step by step with ongoing support through launch and beyond.",
    },
  },
  {
    slug: "digital-marketing",
    category: "marketing",
    image: "/images/services/icon-marketing.png",
    heroImage: "/images/services/service-detail-hero.png",
    title: {
      ar: "التسويق الرقمي",
      en: "Digital Marketing",
    },
    description: {
      ar: "استراتيجيات تسويقية مدروسة وحملات إعلانية تضاعف وصولك ومبيعاتك.",
      en: "Data-driven marketing strategies and performance campaigns that accelerate reach and revenue.",
    },
    introSubtitle: {
      ar: "عن الخدمة",
      en: "About the Service",
    },
    introTitle: {
      ar: "حملات رقمية تصنع نمواً حقيقياً لعلامتك",
      en: "Performance campaigns built for measurable brand growth",
    },
    introBody1: {
      ar: "نخطط وننفذ حملات إعلانية متكاملة عبر منصات التواصل ومحركات البحث لرفع الوعي وزيادة التحويلات.",
      en: "We plan and manage full-funnel campaigns across social platforms and search engines to boost awareness and conversions.",
    },
    introBody2: {
      ar: "نعتمد على تحليل البيانات وتطوير المحتوى الإبداعي لضمان أفضل عائد على الاستثمار في كل حملة.",
      en: "Every campaign combines analytics with compelling creative storytelling to maximize your return on investment.",
    },
  },
  {
    slug: "visual-identity",
    category: "branding",
    image: "/images/services/icon-branding.png",
    heroImage: "/images/services/service-detail-hero.png",
    title: {
      ar: "الهوية البصرية",
      en: "Visual Identity",
    },
    description: {
      ar: "نصمم هويات بصرية متكاملة تعكس قيم علامتك التجارية وتمنحها حضوراً لا يُنسى.",
      en: "Distinctive brand identities and guidelines that express your values and make you unforgettable.",
    },
    introSubtitle: {
      ar: "عن الخدمة",
      en: "About the Service",
    },
    introTitle: {
      ar: "هوية بصرية تحكي قصة علامتك بثقة",
      en: "Visual systems that tell your brand story with authority",
    },
    introBody1: {
      ar: "من الشعار ولوحة الألوان إلى دليل الاستخدام الكامل، نبني هوية متناسقة تميزك في السوق.",
      en: "From logo marks and color palettes to complete brand guidelines, we craft cohesive systems that set you apart.",
    },
    introBody2: {
      ar: "نركز على التفاصيل الدقيقة التي تترك انطباعاً احترافياً دائماً لدى جمهورك المستهدف.",
      en: "Every typographic and visual choice is engineered to leave a lasting impression across digital and print.",
    },
  },
  {
    slug: "media-production",
    category: "studio",
    image: "/images/services/icon-media.png",
    heroImage: "/images/services/service-detail-hero.png",
    title: {
      ar: "الإنتاج الإعلامي",
      en: "Media Production",
    },
    description: {
      ar: "تصوير منتجات، إعلانات تجارية، وتسجيل بودكاست في استديو مجهز بأعلى المواصفات.",
      en: "Product photography, commercial films, and podcast production in our fully equipped studio.",
    },
    introSubtitle: {
      ar: "عن الخدمة",
      en: "About the Service",
    },
    introTitle: {
      ar: "إنتاج مرئي وصوتي بجودة سينمائية",
      en: "Cinema-grade visual and audio production",
    },
    introBody1: {
      ar: "نوفر فريقاً إبداعياً ومعدات تصوير وإضاءة وصوت احترافية لإنتاج محتوى يرتقي بصورة علامتك.",
      en: "Our creative crew and studio gear deliver polished visual and audio content that elevates your brand perception.",
    },
    introBody2: {
      ar: "سواء كنت تطلق منتجاً جديداً أو تسجل بودكاست، نرافقك من كتابة الفكرة حتى المونتاج النهائي.",
      en: "Whether launching a product or recording a podcast series, we handle everything from concept to final cut.",
    },
  },
  {
    slug: "ui-ux-design",
    category: "programming",
    image: "/images/services/icon-branding.png",
    heroImage: "/images/services/service-detail-hero.png",
    title: {
      ar: "تصميم تجربة المستخدم",
      en: "UI/UX Design",
    },
    description: {
      ar: "تصميم واجهات رقمية عصرية وتجارب استخدام سلسة ترفع رضا عملائك.",
      en: "Modern digital interfaces and intuitive user journeys crafted to delight your customers.",
    },
    introSubtitle: {
      ar: "عن الخدمة",
      en: "About the Service",
    },
    introTitle: {
      ar: "تجارب رقمية مبنية على فهم المستخدم",
      en: "Human-centered interfaces designed for clarity",
    },
    introBody1: {
      ar: "نحلل سلوك المستخدم ونبني نماذج تفاعلية وأنظمة تصميم متكاملة تجعل منتجك سهلاً وممتعاً.",
      en: "We research user journeys, build interactive prototypes, and create scalable design systems.",
    },
    introBody2: {
      ar: "هدفنا الجمع بين الجمال البصري وسهولة الوصول لتحويل الزوار إلى عملاء دائمين.",
      en: "We balance refined aesthetics with effortless usability to turn visitors into loyal users.",
    },
  },
  {
    slug: "ecommerce-solutions",
    category: "programming",
    image: "/images/services/icon-dev.png",
    heroImage: "/images/services/service-detail-hero.png",
    title: {
      ar: "حلول التجارة الإلكترونية",
      en: "E-Commerce Solutions",
    },
    description: {
      ar: "بناء متاجر إلكترونية سريعة ومربوطة ببوابات الدفع والشحن لتعظيم مبيعاتك.",
      en: "High-converting online stores integrated with payments and logistics to scale your sales.",
    },
    introSubtitle: {
      ar: "عن الخدمة",
      en: "About the Service",
    },
    introTitle: {
      ar: "متاجر إلكترونية مصممة لزيادة المبيعات",
      en: "Online stores engineered for higher conversion",
    },
    introBody1: {
      ar: "نطور متاجر إلكترونية متكاملة مع لوحات تحكم سهلة وتجربة شراء سريعة عبر جميع الأجهزة.",
      en: "We build complete storefronts with effortless admin dashboards and frictionless mobile checkout.",
    },
    introBody2: {
      ar: "ندعم التكامل مع شركات الشحن وبوابات الدفع وأدوات التحليل لمتابعة نمو متجرك لحظة بلحظة.",
      en: "Seamless integration with payment gateways, shipping carriers, and analytics keeps you in full control.",
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "dream-baby-store",
    category: "programming",
    image: "/images/work/project-card.png",
    heroImage: "/images/work/project-hero.png",
    gallery: [
      "/images/work/project-hero.png",
      "/images/work/project-thumb.png",
      "/images/work/project-card.png",
      "/images/work/project-thumb.png",
      "/images/work/project-hero.png",
    ],
    year: "2025",
    title: {
      ar: "موقع دريم بيبي",
      en: "Dream Baby Website",
    },
    categoryLabel: {
      ar: "تصميم",
      en: "Design",
    },
    client: {
      ar: "متجر دريم بيبي",
      en: "Dream Baby Store",
    },
    serviceName: {
      ar: "تصميم المواقع الإلكترونية",
      en: "Website Design & Development",
    },
    date: {
      ar: "12 مايو 2025",
      en: "May 12, 2025",
    },
    type: {
      ar: "متجر إلكتروني",
      en: "E-Commerce",
    },
    headline: {
      ar: "بناء العلامة التجارية الشخصية وموقع الويب",
      en: "Building the Personal Brand & Flagship Website",
    },
    overview: {
      ar: "تعاونت وكالتنا مع محترف إبداعي لتصميم موقع إلكتروني عصري وجذاب لعرض أعماله الشخصية، يعكس هويته التجارية الفريدة وخبرته.",
      en: "Our agency collaborated to design and engineer a modern, high-impact digital storefront showcasing products with a distinctive visual identity and seamless customer journey.",
    },
    goals: {
      ar: [
        "إنشاء هوية بصرية مميزة تعكس العلامة التجارية.",
        "تصميم معرض أعمال ومنتجات سهل التصفح ومتوافق مع الهواتف.",
        "تشجيع الجهات المحتملة على التواصل من خلال أزرار واضحة لاتخاذ الإجراء.",
        "تحسين الموقع لمحركات البحث لزيادة الظهور والوصول إلى الجمهور المستهدف.",
      ],
      en: [
        "Create a distinctive visual identity reflecting the core brand personality.",
        "Design an intuitive, mobile-first showcase and browsing experience.",
        "Drive inquiries and conversions with clear, strategic calls to action.",
        "Optimize technical SEO and performance to reach the target audience.",
      ],
    },
    methodology: {
      ar: "تعاون فريق ركاز لتصميم موقع عصري وجذاب بصرياً يعكس الهوية والخبرة بشكل مميز. ركزنا على بناء تجربة رقمية متكاملة لا تكتفي بعرض المنتجات، بل تنقل شخصية العلامة وتبرز قيمتها بأسلوب يعبر عنها.",
      en: "The Rekaz team worked closely from discovery to launch to craft a cohesive digital experience that goes beyond displaying products — communicating brand character and trust at every touchpoint.",
    },
  },
  {
    slug: "cutter-ploter-platform",
    category: "branding",
    image: "/images/work/project-card.png",
    heroImage: "/images/work/project-hero.png",
    gallery: [
      "/images/work/project-hero.png",
      "/images/work/project-thumb.png",
      "/images/work/project-card.png",
      "/images/work/project-thumb.png",
      "/images/work/project-hero.png",
    ],
    year: "2025",
    title: {
      ar: "تصميم موقع شركة cutter ploter",
      en: "Cutter Ploter Corporate Website",
    },
    categoryLabel: {
      ar: "تصميم",
      en: "Design",
    },
    client: {
      ar: "شركة Cutter Ploter",
      en: "Cutter Ploter Co.",
    },
    serviceName: {
      ar: "الهوية البصرية وتطوير الويب",
      en: "Branding & Web Development",
    },
    date: {
      ar: "04 أبريل 2025",
      en: "April 04, 2025",
    },
    type: {
      ar: "موقع شركة",
      en: "Corporate",
    },
    headline: {
      ar: "تطوير منصة رقمية متكاملة وهوية عصرية",
      en: "Crafting a Modern Corporate Platform & Identity",
    },
    overview: {
      ar: "إعادة تصميم شاملة للموقع الإلكتروني والهوية الرقمية لتقديم تجربة تصفح سريعة تبرز جودة المعدات والحلول الصناعية.",
      en: "A comprehensive digital redesign delivering fast navigation and a refined presentation of industrial equipment and solutions.",
    },
    goals: {
      ar: [
        "تحديث الهوية البصرية لتواكب التوسع الإقليمي.",
        "تبسيط طلبات عروض الأسعار والاستشارات الفنية.",
        "تحسين سرعة التحميل وتجربة الهاتف المحمول.",
      ],
      en: [
        "Modernize the visual identity to support regional expansion.",
        "Streamline technical consultation and quote requests.",
        "Boost loading speed and mobile responsiveness.",
      ],
    },
    methodology: {
      ar: "اعتمدنا على نظام تصميم مرن ومكونات قابلة لإعادة الاستخدام مع بنية برمجية سريعة تضمن استقرار المنصة وسهولة تحديثها.",
      en: "We established a modular design system paired with a high-performance frontend architecture for effortless scalability.",
    },
  },
  {
    slug: "aura-media-campaign",
    category: "marketing",
    image: "/images/work/project-card.png",
    heroImage: "/images/work/project-hero.png",
    gallery: [
      "/images/work/project-hero.png",
      "/images/work/project-thumb.png",
      "/images/work/project-card.png",
      "/images/work/project-thumb.png",
      "/images/work/project-hero.png",
    ],
    year: "2025",
    title: {
      ar: "حملة تسويق علامة أورا",
      en: "Aura Brand Growth Campaign",
    },
    categoryLabel: {
      ar: "تسويق",
      en: "Marketing",
    },
    client: {
      ar: "أورا للمنتجات الفاخرة",
      en: "Aura Luxury Goods",
    },
    serviceName: {
      ar: "التسويق الرقمي",
      en: "Digital Marketing",
    },
    date: {
      ar: "18 مارس 2025",
      en: "March 18, 2025",
    },
    type: {
      ar: "حملة رقمية",
      en: "Campaign",
    },
    headline: {
      ar: "استراتيجية إطلاق متكاملة عبر المنصات الرقمية",
      en: "Full-Funnel Digital Launch Strategy",
    },
    overview: {
      ar: "تخطيط وتنفيذ حملة إطلاق متعددة القنوات حققت نمواً بنسبة 320% في التفاعل والمبيعات خلال الربع الأول.",
      en: "A multi-channel launch campaign that achieved 320% growth in qualified engagement and sales during Q1.",
    },
    goals: {
      ar: [
        "بناء وعي سريع بالعلامة التجارية في السوق المستهدف.",
        "رفع معدل التحويل وخفض تكلفة الاستحواذ على العميل.",
        "إنتاج محتوى إعلاني مرئي عالي الجودة.",
      ],
      en: [
        "Build rapid brand awareness across target segments.",
        "Increase conversion rates while lowering acquisition cost.",
        "Produce high-impact visual ad creatives.",
      ],
    },
    methodology: {
      ar: "دمجنا بين التصوير الإبداعي في الاستديو واختبارات A/B المستمرة للإعلانات لتحقيق أفضل أداء أسبوعاً بعد أسبوع.",
      en: "We combined in-house studio creative production with continuous A/B testing to optimize performance every week.",
    },
  },
  {
    slug: "rekaz-studio-showcase",
    category: "studio",
    image: "/images/work/project-card.png",
    heroImage: "/images/work/project-hero.png",
    gallery: [
      "/images/work/project-hero.png",
      "/images/work/project-thumb.png",
      "/images/work/project-card.png",
      "/images/work/project-thumb.png",
      "/images/work/project-hero.png",
    ],
    year: "2025",
    title: {
      ar: "إنتاج إعلاني وتصوير منتجات فاخرة",
      en: "Luxury Product Studio Production",
    },
    categoryLabel: {
      ar: "استديو",
      en: "Studio",
    },
    client: {
      ar: "نخبة للعطور",
      en: "Nokhba Perfumes",
    },
    serviceName: {
      ar: "الإنتاج الإعلامي والاستديو",
      en: "Media & Studio Production",
    },
    date: {
      ar: "02 فبراير 2025",
      en: "February 02, 2025",
    },
    type: {
      ar: "تصوير وإنتاج",
      en: "Production",
    },
    headline: {
      ar: "إخراج بصري فاخر يبرز فخامة المنتجات",
      en: "Luxury Art Direction & Commercial Production",
    },
    overview: {
      ar: "جلسة تصوير منتجات وإعلان تجاري قصير بإضاءة سينمائية دافئة وهوية بصرية متناغمة مع طابع العلامة.",
      en: "A commercial product shoot and short film featuring warm cinema lighting tailored to the brand's luxury positioning.",
    },
    goals: {
      ar: [
        "إبراز تفاصيل العبوات والخامات بدقة فائقة.",
        "توفير مكتبة صور وفيديوهات جاهزة للحملات الإعلانية.",
      ],
      en: [
        "Showcase packaging craftsmanship and textures in crisp detail.",
        "Deliver a complete campaign-ready photo and video library.",
      ],
    },
    methodology: {
      ar: "عمل فريق الإخراج والإضاءة على تصميم ديكور مخصص داخل استديو ركاز مع معالجة لونية دقيقة بعد التصوير.",
      en: "Our art direction and lighting crew built bespoke sets inside Rekaz Studio, followed by precision color grading.",
    },
  },
  {
    slug: "horizon-fintech-app",
    category: "programming",
    image: "/images/work/project-card.png",
    heroImage: "/images/work/project-hero.png",
    gallery: [
      "/images/work/project-hero.png",
      "/images/work/project-thumb.png",
      "/images/work/project-card.png",
      "/images/work/project-thumb.png",
      "/images/work/project-hero.png",
    ],
    year: "2025",
    title: {
      ar: "تطبيق أفق للحلول المالية",
      en: "Horizon FinTech Platform",
    },
    categoryLabel: {
      ar: "برمجة",
      en: "Development",
    },
    client: {
      ar: "شركة أفق للتقنية المالية",
      en: "Horizon FinTech",
    },
    serviceName: {
      ar: "التطوير الرقمي",
      en: "Digital Development",
    },
    date: {
      ar: "20 يناير 2025",
      en: "January 20, 2025",
    },
    type: {
      ar: "تطبيق ويب وموبايل",
      en: "Web & Mobile App",
    },
    headline: {
      ar: "تجربة مالية ذكية وآمنة وسهلة الاستخدام",
      en: "Smart, Secure, and Intuitive Financial Experience",
    },
    overview: {
      ar: "تطوير لوحة تحكم وتطبيق عملاء متكامل لإدارة الفواتير والمدفوعات بتصميم واضح وسرعة استجابة عالية.",
      en: "End-to-end client application and dashboard for managing invoices and payments with clarity and speed.",
    },
    goals: {
      ar: [
        "تبسيط العمليات المالية اليومية للشركات الصغيرة.",
        "ضمان أعلى معايير الأمان وتجربة مستخدم سلسة.",
      ],
      en: [
        "Simplify daily financial workflows for SMBs.",
        "Ensure top security standards with effortless usability.",
      ],
    },
    methodology: {
      ar: "اعتمدنا منهجية تطوير مرنة مع اختبارات مستمرة لتجربة المستخدم قبل الإطلاق الرسمي.",
      en: "We followed an agile sprint methodology with continuous usability validation ahead of launch.",
    },
  },
  {
    slug: "masar-brand-identity",
    category: "branding",
    image: "/images/work/project-card.png",
    heroImage: "/images/work/project-hero.png",
    gallery: [
      "/images/work/project-hero.png",
      "/images/work/project-thumb.png",
      "/images/work/project-card.png",
      "/images/work/project-thumb.png",
      "/images/work/project-hero.png",
    ],
    year: "2025",
    title: {
      ar: "هوية بصرية كاملة لشركة مسار",
      en: "Masar Complete Brand Identity",
    },
    categoryLabel: {
      ar: "هوية تجارية",
      en: "Branding",
    },
    client: {
      ar: "مسار للاستشارات",
      en: "Masar Consulting",
    },
    serviceName: {
      ar: "الهوية البصرية",
      en: "Visual Identity",
    },
    date: {
      ar: "10 يناير 2025",
      en: "January 10, 2025",
    },
    type: {
      ar: "هوية تجارية",
      en: "Brand Identity",
    },
    headline: {
      ar: "بناء هوية مؤسسية تعكس الثقة والريادة",
      en: "Crafting an Authoritative Corporate Identity",
    },
    overview: {
      ar: "تصميم هوية بصرية شاملة تتضمن الشعار والخطوط والمطبوعات وقوالب العروض التقديمية والتواصل الرقمي.",
      en: "A full corporate identity covering logo system, typography, stationery, pitch decks, and digital templates.",
    },
    goals: {
      ar: [
        "ترسيخ صورة احترافية متسقة عبر كل نقاط التواصل.",
        "تزويد الفريق بدليل استخدام عملي وسهل التطبيق.",
      ],
      en: [
        "Establish a consistent executive image across every touchpoint.",
        "Deliver a practical, easy-to-apply brand manual.",
      ],
    },
    methodology: {
      ar: "بدأنا بورشة عمل استراتيجية لتحديد شخصية العلامة ثم ترجمناها إلى نظام بصري متكامل.",
      en: "We began with a brand strategy workshop before translating insights into a cohesive visual language.",
    },
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "standard",
    name: { ar: "أساسي", en: "Standard" },
    price: { ar: "٩٫٩٩ دولار/شهر", en: "$9.99/mo" },
    description: {
      ar: "للمستقلين والفرق الصغيرة الباحثة عن مزيد من الحرية والمرونة.",
      en: "For freelancers and small teams looking for greater freedom and flexibility.",
    },
    features: {
      ar: [
        "حتى ٥٠ مشروعاً سحابياً",
        "تصدير بدقة 4K",
        "أدوات تحرير متقدمة",
        "تعاون الفريق (حتى ٥ أعضاء)",
        "مكتبة قوالب مميزة",
      ],
      en: [
        "Up to 50 cloud projects",
        "4K high-resolution exports",
        "Advanced editing tools",
        "Team collaboration (up to 5 members)",
        "Premium template library",
      ],
    },
  },
  {
    id: "pro",
    name: { ar: "احترافي", en: "Pro" },
    price: { ar: "١٩٫٩٩ دولار/شهر", en: "$19.99/mo" },
    description: {
      ar: "للشركات النامية والفرق الإبداعية التي تحتاج إلى قدرات متقدمة ودعم أسرع.",
      en: "For growing businesses and creative teams requiring advanced capabilities and priority support.",
    },
    features: {
      ar: [
        "مشاريع سحابية غير محدودة",
        "تصدير بدقة 4K وما فوق",
        "أدوات تحرير وإنتاج متقدمة",
        "تعاون الفريق (حتى ١٥ عضواً)",
        "دعم فني ذو أولوية ومكتبة كاملة",
      ],
      en: [
        "Unlimited cloud projects",
        "4K & studio-grade exports",
        "Pro editing & production suite",
        "Team collaboration (up to 15 members)",
        "Priority support & full asset library",
      ],
    },
  },
  {
    id: "free",
    highlighted: true,
    name: { ar: "مجاني", en: "Free" },
    price: { ar: "مجاني", en: "Free" },
    description: {
      ar: "للمبدعين في خطواتهم الأولى لاكتشاف خدماتنا والانطلاق سريعاً.",
      en: "For creators taking their first steps and exploring our workflow.",
    },
    features: {
      ar: [
        "حتى ٣ مشاريع سحابية",
        "تصدير الصور بدقة ١٠٨٠ بكسل",
        "أدوات تحرير أساسية",
        "قوالب وأيقونات مجانية",
        "الوصول عبر الويب وتطبيق الجوال",
      ],
      en: [
        "Up to 3 cloud projects",
        "1080p HD image exports",
        "Essential editing tools",
        "Free templates & icons",
        "Web and mobile app access",
      ],
    },
  },
];

export const TECH_STACK_ICONS = [
  { name: "Figma", src: "/icons/tech/figma.svg" },
  { name: "React", src: "/icons/tech/react.svg" },
  { name: "VS Code", src: "/icons/tech/vscode.svg" },
  { name: "HTML5", src: "/icons/tech/html5.svg" },
  { name: "Node.js", src: "/icons/tech/nodejs.svg" },
  { name: "GitHub", src: "/icons/tech/github.svg" },
  { name: "Visual Studio", src: "/icons/tech/visualstudio.svg" },
  { name: "PHP", src: "/icons/tech/php.svg" },
  { name: "CSS3", src: "/icons/tech/css3.svg" },
  { name: "Bootstrap", src: "/icons/tech/reactbootstrap.svg" },
];
