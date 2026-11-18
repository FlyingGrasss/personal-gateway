import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  ctaLabel?: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  ctaLabel = "Detayları gör",
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border border-border bg-background p-6",
        className,
      )}
    >
      {icon ? (
        <div
          aria-hidden="true"
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground"
        >
          {icon}
        </div>
      ) : null}

      <h3 className="text-base font-medium">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {href ? (
        <Link
          href={href}
          className="mt-5 inline-flex w-fit items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
        >
          {ctaLabel}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      ) : null}
    </article>
  );
}
