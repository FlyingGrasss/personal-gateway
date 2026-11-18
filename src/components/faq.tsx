import { Plus } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export type FaqProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function Faq({ items, className }: FaqProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={cn("divide-y divide-border border-y border-border", className)}>
      {items.map((item, index) => (
        <details key={`${index}-${item.question}`} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-sm font-medium transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563eb] [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <Plus
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45 motion-reduce:transition-none"
            />
          </summary>
          <div className="pb-4 pr-8 text-sm leading-6 text-muted-foreground">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
