"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { MagneticLink } from "@/components/motion/magnetic-link";
import { processSteps, services } from "@/content/provider";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function CapabilitiesPreview() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-rule" aria-labelledby="capabilities-title">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-mono mb-3">Capabilities</p>
            <Reveal>
              <h2
                id="capabilities-title"
                className="text-display text-[clamp(2.4rem,6vw,5rem)]"
              >
                What we take on
              </h2>
            </Reveal>
          </div>
          <Link href="/services/" className="text-sm text-muted no-underline hover:text-signal">
            All services →
          </Link>
        </div>

        <RevealStagger className="grid gap-0 border-t border-rule md:grid-cols-2" stagger={0.07}>
          {services.slice(0, 6).map((service, i) => (
            <RevealItem key={service.slug}>
              <motion.div
                className="group border-b border-rule py-8 md:px-7 md:odd:border-r"
                whileHover={reduce ? undefined : { backgroundColor: "var(--paper-raised)" }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-mono m-0 text-signal">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-display mt-3 text-[clamp(1.6rem,3vw,2.4rem)] transition-colors group-hover:text-signal">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-muted">{service.summary}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-20 grid gap-8 border-t border-rule pt-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="text-mono mb-2">Process</p>
            <h3 className="text-display text-3xl">How engagements move</h3>
          </div>
          <div className="grid gap-6 md:col-span-9 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="border-l-2 border-signal/40 pl-4"
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
              >
                <p className="text-mono m-0 text-signal">{step.number}</p>
                <h4 className="mt-2 text-lg font-medium">{step.title}</h4>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <MagneticLink href="/studio/" variant="secondary">
            Studio philosophy
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
