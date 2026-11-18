import Link from "next/link";

import { Nav } from "@/components/nav";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="rounded-md text-base font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
        >
          {site.name}
          <span className="hidden font-normal text-muted-foreground lg:inline">
            {" "}
            — Freelance Web Geliştirici
          </span>
        </Link>

        <Nav />
      </div>
    </header>
  );
}
