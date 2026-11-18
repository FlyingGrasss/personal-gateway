import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { site } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Hakkımda — Emre Bozkurt",
  description:
    "Freelance web geliştirici Emre Bozkurt hakkında: geliştirdiği açık projeler ve doğrudan iletişim bilgileri.",
  path: "/hakkimda",
});

const breadcrumb = breadcrumbSchema({
  items: [
    { name: "Ana Sayfa", url: new URL("/", site.url).toString() },
    { name: "Hakkımda", url: new URL("/hakkimda", site.url).toString() },
  ],
});

export default function HakkimdaPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <JsonLd data={breadcrumb} />
      <JsonLd
        data={personSchema({
          name: "Emre Bozkurt",
          jobTitle: "Freelance Web Geliştirici",
          url: site.url,
          sameAs: ["https://github.com/FlyingGrasss"],
        })}
      />

      <SectionHeading
        as="h1"
        eyebrow="Hakkımda"
        title="Ben Emre Bozkurt, Freelancer Web Geliştirici"
      />

      <div className="mt-8 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
        <p>
          Merhaba!{" "}
          <span className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            [KULLANICI ONAYI: 2-3 cümle gerçek geçmiş — ne zamandır yazılımla
            uğraşıyorsun, nasıl başladın.]
          </span>
        </p>
        <p>
          GitHub&apos;da açıkta duran, canlı olarak kullanılan projeler üretmeyi
          seviyorum; okul yönetim yazılımından konferans panellerine kadar kendi
          ürünlerimi geliştiriyorum. Bu site dahil gördüğünüz her şeyin kodunu
          kendim yazıyorum.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <WhatsAppCta
          label="WhatsApp'tan Yazın"
          message="Merhaba, sizinle bir web sitesi projesi hakkında konuşmak istiyorum."
        />
        <a
          href="https://github.com/FlyingGrasss"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
        >
          GitHub profili
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only"> (yeni sekmede açılır)</span>
        </a>
        <Link
          href="/calismalar"
          className="inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
        >
          Çalışmalara göz atın
        </Link>
      </div>
    </main>
  );
}
