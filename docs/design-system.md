# Rekaz (ركاز) — Extracted Design System

Extracted directly from the Figma source file `ركاز (Copy)` (`8YBCxmYfbypDOOm65oEV5Z`).

## 1. Layout & Grid
- **Primary Desktop Reference**: `1440px`
- **Container Max Width**: `1240px` (100px horizontal inset at 1440px, responsive horizontal padding `px-4 sm:px-6 lg:px-8 xl:px-0`)
- **Section Spacing**: `py-16 md:py-20 lg:py-24`
- **Border Radii**:
  - Cards / Containers: `24px`–`30px` (`rounded-3xl`, `rounded-[24px]`, `rounded-[30px]`)
  - Form inputs / Small icon boxes: `12px`–`14px` (`rounded-xl`, `rounded-[14px]`)
  - Primary CTA Buttons / Pills: `60px` (`rounded-full`)

## 2. Color Tokens (Semantic CSS Variables)

| Semantic Token | Light Theme (`:root`) | Dark Theme (`.dark`) | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `#fcfaf5` (`background/page`) | `#0b0b0b` (`deep`) | Page canvas |
| `--background-elevated` | `#ffffff` (`surface/card`) | `#121310` (`bg`) | Elevated cards, inputs |
| `--surface-subtle` | `#f2efe7` (`surface/subtle`) | `#141414` (`rich`) | Section containers, card fills, FAQ items |
| `--surface-muted` | `#ebe6da` | `#1c1c1c` (`surface`) | Secondary badges, hover states |
| `--foreground` | `#24231f` (`text/primary`) | `#f5f5f5` (`off-white`) | Primary headings & text |
| `--foreground-strong` | `#35342e` (`text/strong`) | `#ffffff` (`Color`) | Strong emphasis labels |
| `--muted-foreground` | `#6d6d6d` (`text/secondary`) | `#cccccc` (`grey`) | Secondary / body descriptions |
| `--primary` | `#efbb54` (`brand/gold`) | `#efbb54` (`primary`) | Primary buttons, gold highlights, icons |
| `--primary-foreground` | `#24231f` | `#121310` | Text on gold buttons |
| `--brand-dark` | `#8a641b` (`brand/dark`) | `#efbb54` | Active nav link, gold text accent |
| `--brand-light` | `#f6dfab` (`brand/light`) | `#a88727` (`primary dark`) | Gold borders, subtle warm dividers |
| `--border` | `#e7e1d4` | `#2a2a2a` | Default card & section borders |
| `--border-gold` | `#f6dfab` | `rgba(239, 187, 84, 0.35)` | Highlighted card & tab borders |
| `--footer-bg` | `#fcfaf5` | `#000000` | Footer container surface |
| `--success` | `#1f8a57` | `#4cc38a` | Success alerts / form confirmation |
| `--destructive` | `#c62a2f` | `#f2555a` | Validation errors |
| `--warning` | `#d9822b` | `#f0a24b` | Warnings |

## 3. Typography
- **Arabic Display / Headings / Nav**: `Thmanyah Serif Text` (exact Figma `thmanyah_serif_text`, loaded via `next/font/local`), weights `400, 500, 700`
- **Arabic Body / UI**: `Thmanyah Sans` (exact Figma `thmanyah_sans`, loaded via `next/font/local`), weights `400, 500, 700`
- **English Display / Headings**: `Playfair Display` (required, loaded via `next/font/google`), weights `500, 600, 700`
- **English Body / UI**: `Inter` (loaded via `next/font/google`), weights `400, 500, 600, 700`

### Type Scale
- **Hero H1**: `44px`–`64px`, line-height `1.2`, bold
- **Page Banner H1**: `48px`–`60px`, bold
- **Section H2**: `32px`–`44px`, line-height `1.25`, bold
- **Card H3**: `20px`–`24px`, bold
- **Body**: `16px`, line-height `1.7` (`28px`)
- **Small / Breadcrumb / Meta**: `14px`, line-height `20px`

## 4. Page Inventory (11 Pages — Light & Dark, Arabic RTL & English LTR)

| # | Route | Arabic Title | English Title | Figma Light ID | Figma Dark ID |
| :- | :--- | :--- | :--- | :--- | :--- |
| 1 | `/` | الرئيسية | Home | `36:592` | `246:2442` |
| 2 | `/about` | من نحن | About Us | `159:617` | `246:2877` |
| 3 | `/services` | خدماتنا | Our Services | `212:437` | `246:3018` |
| 4 | `/services/[slug]` | تفاصيل الخدمة | Service Details | `242:1622` | `246:3830` |
| 5 | `/work` | سابقة أعمالنا | Our Work | `225:5104` | `246:3083` |
| 6 | `/work/[slug]` | تفاصيل المشروع | Project Details | `215:907` | `246:3608` |
| 7 | `/packages` | الباقات | Packages | `225:5557` | `246:3193` |
| 8 | `/contact` | تواصل معنا | Contact Us | `227:7197` | `246:3351` |
| 9 | `/booking` | احجز خدمتك | Book a Service | `227:7596` | `246:3476` |
| 10 | `/booking/studio` | حجز استديو | Book Studio | `230:8493` | `246:3543` |
| 11 | `/privacy` | سياسة الخصوصية | Privacy Policy | `244:2203` | `246:3429` |

## 5. Shared Components
- `Container` (`max-w-[1240px]` centered)
- `Header` (Logo, 5 Nav links, LanguageSwitcher, ThemeToggle, Contact CTA pill, Mobile Sheet menu)
- `Footer` (Top CTA banner "خلّينا نبني حاجة مختلفة مع بعض." + rotated arrow badge, 4-column links/contact/brand + swirl graphic + copyright & policy links)
- `PageHero` (Theme-aware 3D architectural banner light/dark + centered title + breadcrumb)
- `SectionBadge` (Small golden icon + subtitle)
- `ProcessSteps` ("من الفكرة إلى إنجاز يصنع الفرق" — 4 interactive/highlighted steps, reused on Home & Service Details)
- `FaqSection` ("عندك سؤال؟ إحنا هنا لمساعدتك" — Shadcn Accordion + golden wireframe globe, reused on About & Service Details)
- `ProjectCtaBanner` ("جاهز تبدأ مشروعك القادم؟" — Gold gradient card + 3D spheres + CTA, reused on Service Details & Project Details)
- `BookingTabsCard` (Tabbed card shared by `/booking` and `/booking/studio`)
