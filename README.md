# Kişisel Gateway — Emre Bozkurt

Freelance web geliştirici için SEO odaklı, tek amaçlı site: ziyaretçiyi WhatsApp/e-posta
üzerinden teklif istemeye dönüştürmek. Statik Next.js (App Router), tüm sayfalar SSG.

## Sayfalar

- `/` — ana sayfa (hero, hizmetler, süreç, paket özeti, SSS)
- `/hizmetler` + 3 hizmet detayı — kurumsal / e-ticaret / tanıtım
- `/paketler` — paket karşılaştırma tablosu (fiyatlar boşsa "Fiyat için yazın")
- `/sektorler` + 4 sektör — restoran, diş kliniği, güzellik merkezi, avukat
- `/calismalar`, `/hakkimda`, `/iletisim`

SEO: sayfa başına metadata + canonical, OpenGraph, JSON-LD (ProfessionalService, FAQPage,
BreadcrumbList, Person), `sitemap.xml`, `robots.txt`.

## Çalıştırma

```bash
pnpm install
cp .env.local.example .env.local   # NEXT_PUBLIC_SITE_URL
pnpm dev                           # http://localhost:3000
```

## Yayın

Vercel: repo push → otomatik deploy. `NEXT_PUBLIC_SITE_URL` production ortamında
gerçek alan adı olmalı; aksi halde canonical/OG/sitemap adresleri yanlış üretilir.

```bash
vercel env add NEXT_PUBLIC_SITE_URL production
```

## İçerik

Tüm metin ve veriler `src/content/` altında tipli dosyalarda: `site.ts`, `services.ts`,
`faqs.ts`, `process.ts`, `packages.ts`, `projects.ts`, `sectors.ts`.
`[KULLANICI ONAYI]` işaretleri yayına çıkmadan önce doldurulmalı.
