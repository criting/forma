"use client";

import { cn } from "@/lib/cn";
import { springSnappy } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

const variants = {
  primary:
    "bg-ink text-paper-raised hover:bg-signal shadow-[var(--glow-ink)] hover:shadow-[var(--glow-signal)]",
  secondary:
    "bg-transparent text-ink border border-rule-strong hover:border-ink hover:bg-paper-raised",
  signal: "bg-signal text-paper-raised hover:bg-signal-hover shadow-[var(--glow-signal)]",
  ghost: "bg-transparent text-ink hover:text-signal underline-offset-4 hover:underline",
  inverse:
    "bg-paper-raised text-ink hover:bg-signal hover:text-paper-raised shadow-[var(--glow-ink)]",
} as const;

export function MagneticLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  }

  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -3 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={springSnappy}
      className="inline-flex"
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide transition-[colors,box-shadow,transform] duration-300",
          "rounded-[var(--radius-control)] no-underline will-change-transform",
          variants[variant],
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
