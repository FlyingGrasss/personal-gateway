import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { packageFaqs } from "@/content/faqs";
import {
  packageComparisonRows,
  packageRenewalNote,
  packages,
} from "@/content/packages";
import { site, waLink } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Web Sitesi Paketleri — Başlangıç, Profesyonel, Kurumsal",
  description:
    "Web sitesi paketleri: Başlangıç, Profesyonel ve Kurumsal. Yıllık abonelik yok, gizli kalem yok. Kapsamı karşılaştırın, proje bazlı yazılı teklif alın.",
  path: "/paketler",
});

export default function PaketlerPage() {
  const jsonLd = [
    faqPageSchema({ items: packageFaqs }),
    breadcrumbSchema({
      items: [
        { name: "Ana Sayfa", url: site.url },
        {
          name: "Paketler",
          url: new URL("/paketler", site.url).toString(),
        },
      ],
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <SectionHeading
          as="h1"
          eyebrow="Paketler"
          title="Web Sitesi Paketleri"
          description="Yıllık abonelik yok, gizli kalem yok: kapsam net, teklif yazılı."
        />

        <section aria-labelledby="paket-kartlari" className="mt-12">
          <h2 id="paket-kartlari" className="sr-only">
            Paketler
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((packageItem) => (
              <article
                key={packageItem.slug}
                id={packageItem.slug}
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

                <div className="mt-4 border-y border-border py-3">
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
                </div>

                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {packageItem.scope.map((scopeItem) => (
                    <li key={scopeItem} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                      />
                      {scopeItem}
                    </li>
                  ))}
                </ul>

                <WhatsAppCta
                  label="Teklif Al"
                  message={`Merhaba, ${packageItem.name} paketi için teklif almak istiyorum.`}
                  className="mt-6 w-full"
                />
              </article>
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            {packageRenewalNote}
          </p>
        </section>

        <section
          aria-labelledby="karsilastirma"
          className="mt-16 border-t border-border pt-12"
        >
          <SectionHeading
            id="karsilastirma"
            title="Kapsam karşılaştırması"
            description="Paketler aynı işin farklı isimleri değil. Aşağıdaki satırlarda neyin değiştiğini görebilirsiniz."
          />

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Başlangıç, Profesyonel ve Kurumsal paketlerin kapsam
                karşılaştırması
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th
                    scope="col"
                    className="py-3 pr-4 font-medium text-muted-foreground"
                  >
                    Kapsam
                  </th>
                  {packages.map((packageItem) => (
                    <th
                      key={packageItem.slug}
                      scope="col"
                      className="px-4 py-3 font-medium"
                    >
                      {packageItem.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <th
                    scope="row"
                    className="py-3 pr-4 font-normal text-muted-foreground"
                  >
                    Kimler için
                  </th>
                  {packages.map((packageItem) => (
                    <td key={packageItem.slug} className="px-4 py-3">
                      {packageItem.audience}
                    </td>
                  ))}
                </tr>
                {packageComparisonRows.map((row) => (
                  <tr key={row.key}>
                    <th
                      scope="row"
                      className="py-3 pr-4 font-normal text-muted-foreground"
                    >
                      {row.label}
                    </th>
                    {packages.map((packageItem) => (
                      <td key={packageItem.slug} className="px-4 py-3">
                        {packageItem.comparison[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 max-w-3xl text-xs leading-5 text-muted-foreground">
            Hosting, yedekleme ve destek süresi paket kapsamına dahil değildir.
            Fiyatlar proje bazlıdır; görüşmeden sonra yazılı net teklif
            veriyorum.
          </p>
        </section>

        <section
          aria-labelledby="paket-sss"
          className="mt-16 border-t border-border pt-12"
        >
          <SectionHeading
            id="paket-sss"
            eyebrow="SSS"
            title="Paketlerle ilgili sorular"
            description="Fiyat, kapsam ve sahiplikle ilgili merak edilenler."
          />
          <Faq items={packageFaqs} className="mt-8" />
        </section>

        <section
          aria-labelledby="paket-teklif"
          className="mt-16 rounded-xl border border-border bg-muted/40 p-8 sm:flex sm:items-center sm:justify-between sm:gap-8"
        >
          <div>
            <h2
              id="paket-teklif"
              className="text-2xl font-semibold tracking-tight"
            >
              Hangi paketin size uyduğunu birlikte bulalım
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              İşinizi birkaç cümleyle anlatın. Kapsamı netleştirip fiyatı yazılı
              olarak paylaşayım.
            </p>
          </div>
          <WhatsAppCta
            label="Teklif Al"
            message="Merhaba, paketler hakkında bilgi almak istiyorum."
            className="mt-6 shrink-0 sm:mt-0"
          />
        </section>
      </main>
    </>
  );
}
