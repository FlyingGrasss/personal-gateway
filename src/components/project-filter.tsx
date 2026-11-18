"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ProjectFilterItem = {
  id: string;
  category: string;
  content: ReactNode;
};

export type ProjectFilterProps = {
  categories: readonly string[];
  items: readonly ProjectFilterItem[];
  allLabel?: string;
  countLabel?: string;
  emptyMessage?: string;
  className?: string;
};

export function ProjectFilter({
  categories,
  items,
  allLabel = "Tümü",
  countLabel = "proje",
  emptyMessage = "Bu kategoride henüz çalışma yok.",
  className,
}: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const visibleCount =
    activeCategory === null
      ? items.length
      : items.filter((item) => item.category === activeCategory).length;

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="group"
          aria-label="Çalışmaları kategoriye göre filtrele"
          className="flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={activeCategory === null}
            onClick={() => setActiveCategory(null)}
            className={pillClass(activeCategory === null)}
          >
            {allLabel}
          </button>

          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={pillClass(isActive)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p
          aria-live="polite"
          aria-atomic="true"
          className="text-sm text-muted-foreground"
        >
          {visibleCount} {countLabel}
        </p>
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item) => {
          const isHidden =
            activeCategory !== null && item.category !== activeCategory;

          return (
            <li key={item.id} hidden={isHidden} className="min-w-0">
              {item.content}
            </li>
          );
        })}
      </ul>

      {visibleCount === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">{emptyMessage}</p>
      ) : null}
    </div>
  );
}

function pillClass(isActive: boolean): string {
  return cn(
    "inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2",
    isActive
      ? "border-foreground bg-foreground text-background"
      : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground",
  );
}
