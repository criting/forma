"use client";

import { MagneticLink } from "@/components/motion/magnetic-link";
import { contact } from "@/content/provider";
import { easeOutExpo } from "@/lib/motion";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function EnquiryInvite() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.02]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink text-paper-raised"
      aria-labelledby="enquiry-title"
    >
      <motion.div
        aria-hidden
        className="absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-signal/30 blur-3xl"
        style={reduce ? undefined : { y, scale }}
      />
      <div className="relative mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-32">
        <p className="text-mono mb-5 text-paper-raised/45">Enquiry</p>
        <motion.h2
          id="enquiry-title"
          className="text-mega max-w-[11ch] text-[clamp(3.2rem,10vw,7.5rem)]"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          Bring a brief.
        </motion.h2>
        <p className="mt-6 max-w-lg text-xl text-paper-raised/65">{contact.note}</p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <MagneticLink href="/contact/" variant="signal">
            Open enquiry form
          </MagneticLink>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-paper-raised/70 underline decoration-paper-raised/25 underline-offset-4 hover:decoration-signal"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
