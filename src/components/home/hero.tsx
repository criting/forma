"use client";

import { MaskedLines } from "@/components/motion/masked-lines";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/content/provider";
import { easeOut } from "@/lib/motion";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const shift = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 48]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0.35]);

  return (
    <section
      ref={ref}
      className="grain relative overflow-hidden border-b border-rule"
      aria-labelledby="home-hero-title"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24 lg:py-28">
        <motion.div className="relative z-10 md:col-span-7" style={{ opacity: fade }}>
          <p className="text-mono mb-6">Independent creative studio · Demo</p>
          <MaskedLines
            as="h1"
            className="text-display text-[clamp(3.2rem,10vw,7.5rem)]"
            lines={["Identity with", "graphic spine"]}
          />
          <p id="home-hero-title" className="sr-only">
            {site.tagline}
          </p>
          <motion.p
            className="mt-8 max-w-md text-lg text-muted md:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: easeOut }}
          >
            Brand systems, packaging, editorial and digital for teams who care how things
            look under production pressure.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65, ease: easeOut }}
          >
            <ButtonLink href="/work/" variant="primary">
              View work
            </ButtonLink>
            <ButtonLink href="/contact/" variant="secondary">
              Start an enquiry
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative md:col-span-5"
          style={{ y: shift }}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9, ease: easeOut }}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-ink md:mt-8">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(160deg, #1a1612 0%, #2c241c 48%, #e23d28 48%, #e23d28 52%, #f2ebe1 52%, #f2ebe1 100%)
                `,
              }}
            />
            <div
              aria-hidden
              className="absolute left-[12%] top-[18%] h-4 w-4 rounded-full border border-[color:var(--signal)]"
            />
            <div
              aria-hidden
              className="absolute right-[14%] top-[22%] h-px w-16 bg-[color:var(--paper)] opacity-60"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-mono text-[color:var(--paper)]/70">Art direction mark</p>
              <p className="text-display mt-2 text-3xl text-[color:var(--paper)] md:text-4xl">
                Crop · Rule · Signal
              </p>
            </div>
            <motion.div
              aria-hidden
              className="absolute left-[20%] top-[40%] h-24 w-24 border border-[color:var(--paper)]/30"
              animate={
                reduce
                  ? undefined
                  : { x: [0, 6, 0], y: [0, -4, 0], rotate: [0, 1.5, 0] }
              }
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
