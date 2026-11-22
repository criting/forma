import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-ink text-paper-raised hover:bg-signal focus-visible:outline-signal",
  secondary:
    "bg-transparent text-ink border border-rule-strong hover:border-ink hover:bg-paper-raised",
  signal: "bg-signal text-paper-raised hover:bg-signal-hover",
  ghost: "bg-transparent text-ink hover:text-signal underline-offset-4 hover:underline",
} as const;

export function ButtonLink({
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
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-300",
        "rounded-[var(--radius-control)] no-underline",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
