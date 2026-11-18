import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { getSector, sectors } from "@/content/sectors";
import { site } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const dynamicParams = false;

type SectorPageProps = {
  params: Promise<{ slug: string }>;
};

const sectorsHref = new URL("/sektorler", site.url).toString();

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: SectorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);

  if (!sector) {
    return constructMetadata({
      title: "Sektör bulunamadı — Emre Bozkurt",
      description: "Aradığınız sektör sayfası bulunamadı.",
      path: `/sektorler/${slug}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${sector.title} — Emre Bozkurt`,
    description: sector.description,
    path: `/sektorler/${sector.slug}`,
  });
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { slug } = await params;
  const sector = getSector(slug);

  if (!sector) {
    notFound();
  }

  const pageUrl = new URL(`/sektorler/${sector.slug}`, site.url).toString();
  const breadcrumb = breadcrumbSchema({
    items: [
      { name: "Ana Sayfa", url: new URL("/", site.url).toString() },
      { name: "Sektörler", url: sectorsHref },
      { name: sector.title, url: pageUrl },
    ],
  });
  const faqSchema = faqPageSchema({ items: sector.faqs });
  const otherSectors = sectors.filter((item) => item.slug !== sector.slug);

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema} />

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
            <Link
              href="/sektorler"
              className="rounded-sm underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Sektörler
            </Link>
          </li>
          <li aria-hidden="true" className="text-border">
            /
          </li>
          <li>
            <span aria-current="page" className="text-foreground">
              {sector.title}
            </span>
          </li>
        </ol>
      </nav>

      <SectionHeading
        className="mt-8"
        as="h1"
        eyebrow="Sektör"
        title={sector.title}
        description={sector.intro}
      />

      <section className="mt-12" aria-labelledby="sektor-detaylari">
        <h2
          id="sektor-detaylari"
          className="text-2xl font-semibold tracking-tight"
        >
          Sitenizde neler yer alır?
        </h2>
        <ul className="mt-5 space-y-3">
          {sector.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <Check
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 text-foreground"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="sektor-sss">
        <h2 id="sektor-sss" className="text-2xl font-semibold tracking-tight">
          Sık sorulan sorular
        </h2>
        <Faq className="mt-5" items={sector.faqs} />
      </section>

      <section className="mt-14 border-t border-border pt-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Sektörünüze uygun bir site konuşalım
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
          İhtiyacınızı kısa bir mesajla anlatın; kapsamı ve sıradaki adımları
          birlikte netleştirelim.
        </p>
        <WhatsAppCta
          className="mt-6"
          label="Sektörünüze Uygun Teklifi Alın"
          message="Merhaba, sektörüme uygun bir web sitesi için teklif almak istiyorum."
        />
      </section>

      {otherSectors.length > 0 ? (
        <nav aria-labelledby="diger-sektorler" className="mt-14">
          <h2
            id="diger-sektorler"
            className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground"
          >
            Diğer sektörler
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {otherSectors.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/sektorler/${item.slug}`}
                  className="rounded-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </main>
  );
}
