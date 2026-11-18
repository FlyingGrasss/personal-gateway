import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { site } from "@/content/site";
import type { Service } from "@/content/services";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export function ServiceDetail({ service }: { service: Service }) {
  const path = `/hizmetler/${service.slug}`;
  const url = new URL(path, site.url).toString();

  const jsonLd = [
    faqPageSchema({ items: service.faqs }),
    breadcrumbSchema({
      items: [
        { name: "Ana Sayfa", url: site.url },
        {
          name: "Hizmetler",
          url: new URL("/hizmetler", site.url).toString(),
        },
        { name: service.title, url },
      ],
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <SectionHeading
          as="h1"
          eyebrow="Hizmet"
          title={service.title}
          description={service.fullIntro}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
          <section aria-labelledby="kapsam">
            <h2 id="kapsam" className="text-xl font-semibold tracking-tight">
              Kapsam
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.scope.map((scopeItem) => (
                <li
                  key={scopeItem}
                  className="flex items-start gap-3 border-t border-border pt-3 text-sm leading-6"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                  />
                  {scopeItem}
                </li>
              ))}
            </ul>
          </section>

          <aside
            aria-labelledby="teklif-al"
            className="h-fit rounded-xl border border-border bg-muted/40 p-6"
          >
            <h2 id="teklif-al" className="text-base font-medium">
              Bu hizmet size uygun mu?
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Projenin kapsamını konuşalım. Fiyatı proje bazlı, görüşmeden sonra
              yazılı net teklif olarak veriyorum.
            </p>
            <WhatsAppCta
              label="Teklif Al"
              message={`Merhaba, ${service.title} hakkında bilgi almak istiyorum.`}
              className="mt-5 w-full"
            />
            <Link
              href="/paketler"
              className="mt-4 flex w-fit items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Paketlere göz at
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </aside>
        </div>

        <section
          aria-labelledby="hizmet-sss"
          className="mt-16 border-t border-border pt-12"
        >
          <SectionHeading
            id="hizmet-sss"
            title="Sık sorulan sorular"
            description="Bu hizmete özel sorular. Aradığınız cevap yoksa WhatsApp'tan yazın."
          />
          <Faq items={service.faqs} className="mt-8" />
        </section>

        <section
          aria-labelledby="hizmet-teklif"
          className="mt-16 rounded-xl border border-border bg-muted/40 p-8 sm:flex sm:items-center sm:justify-between sm:gap-8"
        >
          <div>
            <h2
              id="hizmet-teklif"
              className="text-2xl font-semibold tracking-tight"
            >
              Kapsamı birlikte netleştirelim
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Birkaç cümleyle işinizi anlatın; hangi sayfaların gerektiğini ve
              fiyatı yazılı olarak paylaşayım.
            </p>
          </div>
          <WhatsAppCta
            label="Teklif Al"
            message={`Merhaba, ${service.title} için teklif almak istiyorum.`}
            className="mt-6 shrink-0 sm:mt-0"
          />
        </section>
      </main>
    </>
  );
}
