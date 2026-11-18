import { mailtoLink, site, waLink } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium">
            {site.name} — Freelance Web Geliştirici
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Bu sitede çerez veya izleme yok.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
          >
            WhatsApp
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </a>
          <a
            href={mailtoLink()}
            className="rounded-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
