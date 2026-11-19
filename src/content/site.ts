export type NavItem = {
  label: string;
  href: string;
};

const FALLBACK_URL = "http://localhost:3000";

export const site = {
  name: "Emre Bozkurt",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_URL,
  email: "emreb.programming@gmail.com",
  whatsappNumber: "905453404925",
  nav: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Çalışmalar", href: "/calismalar" },
    { label: "Hakkımda", href: "/hakkimda" },
    { label: "İletişim", href: "/iletisim" },
  ] satisfies NavItem[],
  contentUpdatedAt: "2026-11-18",
} as const;

export function waLink(message?: string): string {
  const url = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}

export function mailtoLink(subject?: string): string {
  const url = `mailto:${site.email}`;
  return subject ? `${url}?subject=${encodeURIComponent(subject)}` : url;
}
