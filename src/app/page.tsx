import { ArrowRight, Building2, Check, Megaphone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { homeFaqs } from "@/content/faqs";
import { packages } from "@/content/packages";
import { processSteps } from "@/content/process";
import { services, type Service } from "@/content/services";
import { site, waLink } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";
import { faqPageSchema, professionalServiceSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Uygun Fiyatlı Web Sitesi Tasarımı — Freelance Web Geliştirici",
  description:
    "Kurumsal, e-ticaret ve tanıtım siteleri. WhatsApp'tan anlatın, proje bazlı yazılı net teklif alın. Mobil uyumlu, temel SEO ayarları yapılmış siteler.",
  path: "/",
});

const features = [
  "Kurumsal site",
  "E-ticaret",
  "Tanıtım sitesi",
  "Mobil uyumlu",
  "Google uyumlu",
  "Hızlı sayfalar",
  "Temel SEO",
  "Türkçe destek",
] as const;

const serviceIcons: Record<Service["slug"], ReactNode> = {
  "kurumsal-web-sitesi": (
    <Building2 aria-hidden="true" className="h-5 w-5" />
  ),
  "e-ticaret-sitesi": <ShoppingCart aria-hidden="true" className="h-5 w-5" />,
  "tanitim-sitesi": <Megaphone aria-hidden="true" className="h-5 w-5" />,
};

export default function HomePage() {
  const jsonLd = [
    professionalServiceSchema({
      name: site.name,
      description:
        "Kurumsal web siteleri, e-ticaret ve tanıtım siteleri geliştiren freelance web geliştirici.",
      url: site.url,
      email: site.email,
      telephone: `+${site.whatsappNumber}`,
      areaServed: "Türkiye",
      services: services.map((service) => ({
        name: service.title,
        description: service.shortIntro,
        url: new URL(`/hizmetler/${service.slug}`, site.url).toString(),
      })),
    }),
    faqPageSchema({ items: homeFaqs }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <main>
        <section className="mx-auto w-full max-w-5xl px-6 pb-14 pt-16 sm:pt-24">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Freelance web geliştirici
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            İşiniz İçin Uygun Fiyatlı, Hızlı ve Dürüst Bir Web Sitesi
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Bir ajansla değil, doğrudan web geliştiriciyle çalışıyorsunuz:
            projenizi WhatsApp&apos;tan birkaç cümleyle anlatıyorsunuz, ben de
            işinize uygun, hızlı açılan ve Google aramalarında bulunabilen bir
            site kuruyorum.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta
              label="Teklif Al"
              message="Merhaba, web sitesi için teklif almak istiyorum."
            />
            <Link
              href="/calismalar"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Örnek Çalışmaları İncele
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section aria-labelledby="hizmet-ozeti" className="mx-auto w-full max-w-5xl px-6">
          <h2 id="hizmet-ozeti" className="sr-only">
            Hizmet özeti
          </h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 border-y border-border py-5 text-sm sm:grid-cols-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="nasil-calisir"
          className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20"
        >
          <SectionHeading
            id="nasil-calisir"
            eyebrow="Süreç"
            title="Nasıl çalışır?"
            description="Uzun bir brief yerine birkaç mesajla başlıyoruz. Her adımda ne olacağını önceden biliyorsunuz."
          />
          <ProcessSteps steps={processSteps} className="mt-10" />
        </section>

        <section
          aria-labelledby="hizmetler"
          className="mx-auto w-full max-w-5xl px-6 pb-16 sm:pb-20"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="hizmetler"
              eyebrow="Hizmetler"
              title="Hangi site size uygun?"
              description="Kurumsal bir site, ürün satan bir e-ticaret ya da tek sayfalık bir tanıtım. Kapsamı birlikte seçiyoruz."
            />
            <Link
              href="/hizmetler"
              className="inline-flex w-fit items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Tüm hizmetler
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortIntro}
                href={`/hizmetler/${service.slug}`}
                ctaLabel="Hizmeti incele"
                icon={serviceIcons[service.slug]}
              />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="paketler"
          className="mx-auto w-full max-w-5xl px-6 pb-16 sm:pb-20"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="paketler"
              eyebrow="Paketler"
              title="Sade paketler, net kapsam"
              description="Kapsamı baştan netleştiren üç başlangıç noktası. Fiyatı projeye göre, yazılı teklifle veriyorum."
            />
            <Link
              href="/paketler"
              className="inline-flex w-fit items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Tüm paketler
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {packages.map((packageItem) => (
              <article
                key={packageItem.slug}
                className="flex h-full flex-col rounded-xl border border-border bg-background p-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {packageItem.audience}
                </p>
                <h3 className="mt-3 text-lg font-medium tracking-tight">
                  {packageItem.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {packageItem.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-sm">
                  {packageItem.scope.slice(0, 4).map((scopeItem) => (
                    <li key={scopeItem} className="flex items-start gap-2">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground"
                      />
                      {scopeItem}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1 border-t border-border pt-4">
                  {packageItem.price ? (
                    <p className="text-base font-medium">{packageItem.price}</p>
                  ) : (
                    <a
                      href={waLink(
                        `Merhaba, ${packageItem.name} paketi hakkında bilgi almak istiyorum.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
                    >
                      Fiyat için yazın
                      <span className="sr-only"> (yeni sekmede açılır)</span>
                    </a>
                  )}
                  <Link
                    href="/paketler"
                    className="mt-3 flex w-fit items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
                  >
                    Detaylar
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="sss"
          className="mx-auto w-full max-w-5xl px-6 pb-16 sm:pb-20"
        >
          <SectionHeading
            id="sss"
            eyebrow="SSS"
            title="Sık sorulan sorular"
            description="Merak edilenlerin çoğu burada. Cevabını bulamadığınız bir konu olursa WhatsApp'tan yazın."
          />
          <Faq items={homeFaqs} className="mt-8" />
        </section>

        <section
          aria-labelledby="teklif"
          className="mx-auto w-full max-w-5xl px-6 pb-20"
        >
          <div className="rounded-xl border border-border bg-muted/40 p-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h2 id="teklif" className="text-2xl font-semibold tracking-tight">
                Projenizi birkaç cümleyle anlatın
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                Kapsamı ve fiyatı yazılı netleştirelim. İlk görüşme için form
                doldurmanız gerekmiyor; WhatsApp yeterli.
              </p>
            </div>
            <WhatsAppCta
              label="Teklif Al"
              message="Merhaba, projemi anlatmak ve teklif almak istiyorum."
              className="mt-6 shrink-0 sm:mt-0"
            />
          </div>
        </section>
      </main>
    </>
  );
}
