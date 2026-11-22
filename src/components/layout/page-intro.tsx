"use client";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";
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
  const reduce = useReducedMotion();

  return (
    <header className={cn("border-b border-rule", className)}>
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-8 md:py-24">
        {eyebrow ? <p className="text-mono mb-5">{eyebrow}</p> : null}
        <Reveal>
          <h1 className="text-mega max-w-[12ch] text-[clamp(3.2rem,11vw,8rem)] tracking-tight">
            {title}
          </h1>
        </Reveal>
        <motion.div
          className="signal-bar mt-6"
          initial={reduce ? false : { scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
        {description ? (
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-lg text-muted md:text-xl">{description}</p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </header>
  );
}
