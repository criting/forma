"use client";

import { MagneticLink } from "@/components/motion/magnetic-link";
import { site } from "@/content/provider";
import { easeOutExpo, springCinematic, springSoft } from "@/lib/motion";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const plateY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const plateScale = useTransform(scrollYProgress, [0, 1], [1.08, reduce ? 1.08 : 1.22]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.55], [1, reduce ? 1 : 0.15]);
  const signalX = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);

  return (
    <section
      ref={ref}
      className="grain relative min-h-[calc(100svh-var(--header-h))] overflow-hidden bg-ink text-paper-raised"
      aria-labelledby="home-hero-title"
    >
      <motion.div className="absolute inset-0" style={{ y: plateY, scale: plateScale }}>
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(70% 55% at 78% 18%, rgb(225 47 28 / 0.42), transparent 58%),
              radial-gradient(55% 45% at 12% 88%, rgb(239 230 217 / 0.12), transparent 55%),
              linear-gradient(155deg, #0f0d0c 0%, #1a1612 42%, #2a1c18 68%, #0f0d0c 100%)
            `,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                -18deg,
                transparent,
                transparent 22px,
                rgb(255 255 255 / 0.035) 22px,
                rgb(255 255 255 / 0.035) 23px
              )
            `,
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-var(--header-h))] max-w-[1500px] flex-col justify-end px-5 pb-12 pt-16 md:px-8 md:pb-16 lg:pb-20">
        <motion.p
          className="text-mono mb-6 text-paper-raised/45"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { ...springSoft, delay: 0.05 }}
        >
          Independent creative studio · Demo template
        </motion.p>

        <motion.div style={{ y: wordY, opacity: wordOpacity }}>
          <motion.p
            className="text-mega text-[clamp(4.8rem,18vw,13.5rem)] text-paper-raised"
            initial={reduce ? false : { opacity: 0, y: 48, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={
              reduce ? { duration: 0 } : { duration: 1.15, ease: easeOutExpo, delay: 0.08 }
            }
          >
            {site.wordmark}
          </motion.p>
          <motion.div
            className="signal-bar mt-4 md:mt-6"
            style={{ x: signalX }}
            initial={reduce ? false : { scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={reduce ? { duration: 0 } : { ...springCinematic, delay: 0.35 }}
          />
        </motion.div>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
          <motion.div
            className="md:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { ...springSoft, delay: 0.28 }}
          >
            <h1
              id="home-hero-title"
              className="text-display max-w-[14ch] text-[clamp(2rem,5.5vw,4.25rem)] leading-[0.98] tracking-[-0.04em] text-paper-raised"
            >
              Identity with graphic spine
            </h1>
          </motion.div>

          <motion.div
            className="md:col-span-5 md:justify-self-end"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { ...springSoft, delay: 0.4 }}
          >
            <p className="max-w-sm text-[1.05rem] leading-relaxed text-paper-raised/70 md:ml-auto md:text-right">
              Brand systems, packaging, editorial and digital for teams who care how things
              look under production pressure.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 md:justify-end">
              <MagneticLink href="/work/" variant="inverse">
                View work
              </MagneticLink>
              <MagneticLink
                href="/contact/"
                variant="secondary"
                className="border-paper-raised/30 text-paper-raised hover:border-paper-raised hover:bg-paper-raised/10"
              >
                Start an enquiry
              </MagneticLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 hidden items-center justify-between border-t border-paper-raised/15 pt-5 text-mono text-paper-raised/40 md:flex"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.55 }}
        >
          <span>01 / Opening plate</span>
          <span>Scroll for selected work</span>
          <span>Print logic · Digital spine</span>
        </motion.div>
      </div>

      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-[18%] left-[8%] h-28 w-28 border border-paper-raised/20"
          animate={{ x: [0, 10, 0], y: [0, -8, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
    </section>
  );
}
