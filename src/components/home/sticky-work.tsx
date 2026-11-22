"use client";

import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { disciplines } from "@/content/provider";
import type { Project } from "@/content/types";
import { springSoft } from "@/lib/motion";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export function StickyWork({ projects }: { projects: Project[] }) {
  const featured = projects.slice(0, 4);
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-rule bg-paper" aria-labelledby="sticky-work-title">
      <div className="mx-auto max-w-[1500px] px-5 pt-16 md:px-8 md:pt-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="text-mono mb-3">Selected work · cinematic</p>
            <h2
              id="sticky-work-title"
              className="text-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight"
            >
              Proof on the sheet
            </h2>
          </div>
          <Link
            href="/work/"
            className="text-sm font-medium tracking-wide text-muted no-underline transition-colors hover:text-signal"
          >
            Full archive →
          </Link>
        </div>
      </div>

      <div className="relative">
        {featured.map((project, index) => (
          <StickyPlate
            key={project.slug}
            project={project}
            index={index}
            total={featured.length}
            reduce={Boolean(reduce)}
          />
        ))}
      </div>
    </section>
  );
}

function StickyPlate({
  project,
  index,
  total,
  reduce,
}: {
  project: Project;
  index: number;
  total: number;
  reduce: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.85], [0.92, 1, reduce ? 1 : 0.96]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.25, 0.8, 0.95], [0.35, 1, 1, 0.4]);
  const labels = project.disciplines
    .map((d) => disciplines.find((x) => x.slug === d)?.label)
    .filter(Boolean)
    .join(" · ");

  return (
    <article
      ref={ref}
      className="sticky top-[calc(var(--header-h)+0.5rem)] z-[1] min-h-[92svh] border-t border-rule bg-paper px-5 py-8 md:px-8 md:py-10"
      style={{ zIndex: index + 1 }}
    >
      <motion.div style={reduce ? undefined : { scale, opacity }} className="mx-auto max-w-[1500px]">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
          <p className="text-mono m-0">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {project.year} ·
            Demo
          </p>
          <p className="text-mono m-0">{labels}</p>
        </div>

        <Link href={`/work/${project.slug}/`} className="group block no-underline">
          <div className="overflow-hidden shadow-[var(--glow-ink)]">
            <motion.div
              whileHover={reduce ? undefined : { scale: 1.03 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <PlaceholderFrame image={project.hero} />
            </motion.div>
          </div>
          <motion.div
            className="mt-6 flex flex-wrap items-end justify-between gap-4"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={springSoft}
          >
            <div>
              <h3 className="text-display text-[clamp(2rem,5vw,4rem)] tracking-tight transition-colors group-hover:text-signal">
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-lg text-muted">{project.summary}</p>
            </div>
            <span className="text-sm font-medium tracking-wide text-ink">Open case →</span>
          </motion.div>
        </Link>
      </motion.div>
    </article>
  );
}
