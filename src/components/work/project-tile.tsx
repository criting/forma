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
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group",
        variant === "featured" && "md:col-span-2",
        variant === "compact" && "border-b border-rule py-5",
      )}
    >
      <Link href={`/work/${project.slug}/`} className="block no-underline">
        {variant !== "compact" ? (
          <div className="overflow-hidden">
            <motion.div
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <PlaceholderFrame image={project.hero} />
            </motion.div>
          </div>
        ) : null}
        <div className={cn("flex flex-wrap items-end justify-between gap-3", variant !== "compact" && "mt-4")}>
          <div>
            <p className="text-mono m-0">
              {project.year} · Demo
            </p>
            <h3
              className={cn(
                "text-display m-0 mt-1 tracking-tight transition-colors group-hover:text-signal",
                variant === "featured" ? "text-3xl md:text-4xl" : "text-2xl",
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
