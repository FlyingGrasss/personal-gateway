import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { mailtoLink, site, waLink } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "İletişim — Emre Bozkurt",
  description:
    "Web sitesi projeniz için WhatsApp veya e-posta ile Emre Bozkurt'a ulaşın.",
  path: "/iletisim",
});

const breadcrumb = breadcrumbSchema({
  items: [
    { name: "Ana Sayfa", url: new URL("/", site.url).toString() },
    { name: "İletişim", url: new URL("/iletisim", site.url).toString() },
  ],
});

export default function IletisimPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <JsonLd data={breadcrumb} />

      <SectionHeading
        as="h1"
        eyebrow="Doğrudan iletişim"
        title="İletişim"
        description="Form doldurmanıza gerek yok; projenizi birkaç cümleyle anlatmanız yeterli. Elinizdeki malzeme (logo, metin, fotoğraf) ve sitenin amacı ne kadar netse teklif de o kadar hızlı ve net olur."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={waLink(
            "Merhaba, bir web sitesi projesi hakkında konuşmak istiyorum.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground"
          >
            <MessageCircle className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-base font-medium">WhatsApp</h2>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
            Kısa bir mesajla projenizi anlatın; kapsamı birlikte netleştirelim.
          </p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 group-hover:text-muted-foreground group-hover:underline">
            WhatsApp&apos;tan yazın
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </span>
        </a>

        <a
          href={mailtoLink()}
          className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground"
          >
            <Mail className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-base font-medium">E-posta</h2>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
            Detayları, dosyaları veya referansları e-posta ile paylaşmayı tercih
            ediyorsanız buradan yazın.
          </p>
          <span className="mt-5 inline-flex items-center gap-1 break-all text-sm font-medium underline-offset-4 group-hover:text-muted-foreground group-hover:underline">
            {site.email}
          </span>
        </a>
      </div>
    </main>
  );
}
