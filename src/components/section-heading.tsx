import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  id?: string;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  as = "h2",
  align = "left",
  id,
  className,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-semibold tracking-tight",
          eyebrow && "mt-3",
          as === "h1"
            ? "text-4xl sm:text-5xl"
            : "text-2xl sm:text-3xl",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
