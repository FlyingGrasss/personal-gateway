import Link from "next/link";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Sayfa Bulunamadı — Emre Bozkurt",
  description:
    "Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col px-6 py-24 sm:py-32">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 w-fit items-center rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
      >
        Ana sayfaya dön
      </Link>
    </main>
  );
}
