"use client";

import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "overflow-hidden border-y border-rule bg-paper-sunken py-4",
        className,
      )}
      aria-hidden
    >
      <div className="marquee-track gap-10 px-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-display inline-flex items-center gap-10 whitespace-nowrap text-2xl tracking-tight text-ink md:text-3xl"
          >
            {item}
            <span className="inline-block h-2 w-2 rounded-full bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
