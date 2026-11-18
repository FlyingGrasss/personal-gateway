import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { sectors } from "@/content/sectors";
import { site } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: "Sektörlere Göre Web Siteleri — Emre Bozkurt",
  description:
    "Restoran, diş kliniği, güzellik merkezi ve avukat ofisleri için hazırlanmış web sitesi bölümleri: menü, fiyat listesi, randevu ve Google'da bulunma.",
  path: "/sektorler",
});

export default function SectorsHubPage() {
  const breadcrumb = breadcrumbSchema({
    items: [
      { name: "Ana Sayfa", url: new URL("/", site.url).toString() },
      {
        name: "Sektörler",
        url: new URL("/sektorler", site.url).toString(),
      },
    ],
  });

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <JsonLd data={breadcrumb} />

      <nav aria-label="Sayfa yolu" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link
              href="/"
              className="rounded-sm underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Ana Sayfa
            </Link>
          </li>
          <li aria-hidden="true" className="text-border">
            /
          </li>
          <li>
            <span aria-current="page" className="text-foreground">
              Sektörler
            </span>
          </li>
        </ol>
      </nav>

      <div className="mt-8">
        <SectionHeading
          as="h1"
          eyebrow="Sektörler"
          title="Sektörünüze göre kurulan web sitesi"
        />
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Her işin sitesi aynı olmamalı: restoranın menüsü, kliniğin randevusu,
          kuaförün fiyat listesi, avukatın çalışma alanları farklı bölümler
          ister. Aşağıdaki sektör sayfaları her biri için hazırlanmış bölümleri
          anlatıyor. Sizinki listede yoksa da sorun değil; projenizi anlatın,
          size göre kurarım.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {sectors.map((sector) => (
          <li
            key={sector.slug}
            className="rounded-lg border border-border bg-background p-6 transition-colors hover:border-foreground/30"
          >
            <h2 className="text-lg font-semibold">
              <Link
                href={`/sektorler/${sector.slug}`}
                className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
              >
                {sector.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {sector.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-lg border border-border bg-background p-8 text-center">
        <h2 className="text-lg font-semibold">
          Sektörünüz listede yok mu?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Liste sürekli genişliyor. İşinizi birkaç cümleyle anlatın; hangi
          bölümlerin açılacağını birlikte çıkaralım.
        </p>
        <div className="mt-5 flex justify-center">
          <WhatsAppCta label="Projeni Anlat" message="Merhaba, işletmem için web sitesi düşünüyorum." />
        </div>
      </div>
    </main>
  );
}
