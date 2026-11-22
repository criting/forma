"use client";

import { WordFill } from "@/components/motion/word-fill";
import { studio } from "@/content/provider";
import { motion, useReducedMotion } from "motion/react";

export function PointOfView() {
  const reduce = useReducedMotion();
  const manifesto = studio.philosophy.join(" ");

  return (
    <section
      className="border-b border-rule bg-paper-raised"
      aria-labelledby="pov-title"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-4">
          <p className="text-mono mb-4">Studio point of view</p>
          <motion.h2
            id="pov-title"
            className="text-display text-[clamp(2.2rem,5vw,4rem)]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Made for production, not decks
          </motion.h2>
          <div className="signal-bar mt-6" />
        </div>
        <div className="md:col-span-8">
          <WordFill
            text={manifesto}
            className="text-display text-[clamp(1.55rem,3.4vw,2.75rem)] leading-[1.2] tracking-[-0.03em] text-ink"
          />
        </div>
      </div>
    </section>
  );
}
