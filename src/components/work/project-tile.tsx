"use client";

import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { disciplines } from "@/content/provider";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function ProjectTile({
  project,
  variant = "default",
  index = 0,
}: {
  project: Project;
  variant?: "default" | "featured" | "compact";
  index?: number;
}) {
  const reduce = useReducedMotion();
  const labels = project.disciplines
    .map((d) => disciplines.find((x) => x.slug === d)?.label)
    .filter(Boolean)
    .join(" · ");

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 0.75,
        delay: Math.min(index * 0.07, 0.35),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group",
        variant === "featured" && "md:col-span-2",
        variant === "compact" && "border-b border-rule py-5",
      )}
    >
      <Link href={`/work/${project.slug}/`} className="block no-underline">
        {variant !== "compact" ? (
          <div className="overflow-hidden shadow-[0_24px_60px_-36px_rgb(15_13_12/0.55)]">
            <motion.div
              whileHover={reduce ? undefined : { scale: 1.045 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <PlaceholderFrame image={project.hero} />
            </motion.div>
          </div>
        ) : null}
        <div
          className={cn(
            "flex flex-wrap items-end justify-between gap-3",
            variant !== "compact" && "mt-5",
          )}
        >
          <div>
            <p className="text-mono m-0">{project.year} · Demo</p>
            <h3
              className={cn(
                "text-display m-0 mt-1 tracking-tight transition-colors group-hover:text-signal",
                variant === "featured"
                  ? "text-[clamp(1.8rem,4vw,3.25rem)]"
                  : "text-[clamp(1.4rem,3vw,2.2rem)]",
              )}
            >
              {project.title}
            </h3>
            <p className="mt-2 max-w-prose text-muted">{project.summary}</p>
          </div>
          <p className="text-mono m-0 max-w-[18ch] text-right">{labels}</p>
        </div>
      </Link>
    </motion.article>
  );
}
