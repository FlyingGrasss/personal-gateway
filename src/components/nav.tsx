"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function isCurrentSection(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function closeDisclosure(event: MouseEvent<HTMLAnchorElement>): void {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Ana menü">
      <ul className="hidden items-center gap-1 md:flex">
        {site.nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isCurrentSection(pathname, item.href) ? "page" : undefined}
              className={cn(
                "inline-flex h-9 items-center rounded-md px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2",
                isCurrentSection(pathname, item.href)
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <details className="group relative md:hidden">
        <summary className="inline-flex h-10 cursor-pointer list-none items-center gap-2 rounded-md border border-border px-3 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
          Menü
          <ChevronDown
            aria-hidden="true"
            className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 motion-reduce:transition-none"
          />
        </summary>

        <ul className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-border bg-background p-2 shadow-lg">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeDisclosure}
                aria-current={isCurrentSection(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2",
                  isCurrentSection(pathname, item.href)
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
