import { cookies } from "next/headers";
import type { Locale } from "@/types";
import { arMessages, type Messages } from "@/messages/ar";
import { enMessages } from "@/messages/en";

export const LOCALE_COOKIE = "rekaz_locale";
export const DEFAULT_LOCALE: Locale = "ar";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  if (value === "en" || value === "ar") {
    return value;
  }
  return DEFAULT_LOCALE;
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function getMessages(locale: Locale): Messages {
  return locale === "en" ? enMessages : arMessages;
}

export async function getI18n() {
  const locale = await getLocale();
  const dir = getDirection(locale);
  const t = getMessages(locale);
  return { locale, dir, t };
}
