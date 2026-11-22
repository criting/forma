import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("border-b border-rule", className)}>
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
        {eyebrow ? <p className="text-mono mb-4">{eyebrow}</p> : null}
        <Reveal>
          <h1 className="text-display max-w-[14ch] text-5xl tracking-tight md:text-7xl lg:text-8xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">{description}</p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </header>
  );
}
