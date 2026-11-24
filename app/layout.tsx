import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ScrollProgressBar } from "@/components/motion/motion-primitives";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getI18n } from "@/lib/i18n";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-english-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-english-sans",
  display: "swap",
});

const thmanyahSerif = localFont({
  src: [
    {
      path: "./fonts/thmanyah-serif-text-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/thmanyah-serif-text-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/thmanyah-serif-text-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-arabic-serif",
  display: "swap",
});

const thmanyahSans = localFont({
  src: [
    {
      path: "./fonts/thmanyah-sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/thmanyah-sans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/thmanyah-sans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-arabic-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return {
    title: {
      default: t.meta.siteTitle,
      template: `%s | ${t.meta.siteName}`,
    },
    description: t.meta.siteDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, dir, t } = await getI18n();

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${inter.variable} ${thmanyahSerif.variable} ${thmanyahSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MotionProvider>
            <ScrollProgressBar />
            <Header locale={locale} t={t.nav} siteName={t.meta.siteName} />
            <main className="flex-1 overflow-x-clip">{children}</main>
            <Footer locale={locale} t={t.footer} siteName={t.meta.siteName} />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
