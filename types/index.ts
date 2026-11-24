export type Locale = "ar" | "en";

export type ServiceCategory = "all" | "marketing" | "studio" | "programming" | "branding";

export interface ServiceItem {
  slug: string;
  category: Exclude<ServiceCategory, "all">;
  image: string;
  heroImage: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  introSubtitle: { ar: string; en: string };
  introTitle: { ar: string; en: string };
  introBody1: { ar: string; en: string };
  introBody2: { ar: string; en: string };
}

export interface ProjectItem {
  slug: string;
  category: Exclude<ServiceCategory, "all">;
  image: string;
  heroImage: string;
  gallery: string[];
  year: string;
  title: { ar: string; en: string };
  categoryLabel: { ar: string; en: string };
  client: { ar: string; en: string };
  serviceName: { ar: string; en: string };
  date: { ar: string; en: string };
  type: { ar: string; en: string };
  headline: { ar: string; en: string };
  overview: { ar: string; en: string };
  goals: { ar: string[]; en: string[] };
  methodology: { ar: string; en: string };
}

export interface PricingPlan {
  id: string;
  highlighted?: boolean;
  name: { ar: string; en: string };
  price: { ar: string; en: string };
  description: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
}
