import { ArrowRight, Building2, Megaphone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services, type Service } from "@/content/services";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Web Sitesi Hizmetleri — Kurumsal, E-Ticaret ve Tanıtım",
  description:
    "Kurumsal web sitesi, e-ticaret kurulumu ve tanıtım sitesi hizmetleri. Kapsamı baştan yazılı, mobil uyumlu ve temel SEO ayarları yapılmış siteler.",
  path: "/hizmetler",
});

const serviceIcons: Record<Service["slug"], ReactNode> = {
  "kurumsal-web-sitesi": (
    <Building2 aria-hidden="true" className="h-5 w-5" />
  ),
  "e-ticaret-sitesi": <ShoppingCart aria-hidden="true" className="h-5 w-5" />,
  "tanitim-sitesi": <Megaphone aria-hidden="true" className="h-5 w-5" />,
};

export default function HizmetlerPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <SectionHeading
        as="h1"
        eyebrow="Hizmetler"
        title="Web Sitesi Hizmetleri"
        description="Kurumsal siteler, e-ticaret kurulumu ve tanıtım siteleri. Her birinde kapsam baştan yazılı, tasarım işinize uygun ve site telefonda okunabilir."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <div className="mt-12 flex flex-col gap-5 rounded-xl border border-border bg-muted/40 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-medium">Kapsamı paketlerle karşılaştırın</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Hangi paketin size uyduğundan emin değilseniz üç başlangıç noktasına
            göz atın. Fiyatlar proje bazlı; teklifi yazılı veriyorum.
          </p>
        </div>
        <Link
          href="/paketler"
          className="inline-flex h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
        >
          Paketleri incele
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
