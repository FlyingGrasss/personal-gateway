import { cn } from "@/lib/cn";

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProcessStepsProps = {
  steps: readonly ProcessStep[];
  className?: string;
};

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <ol className={cn("grid gap-x-8 gap-y-8 sm:grid-cols-2", className)}>
      {steps.map((step, index) => (
        <li key={`${index}-${step.title}`} className="border-t border-border pt-5">
          <span className="text-xs font-medium tabular-nums tracking-[0.12em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-base font-medium">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
