import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { processSteps, services } from "@/content/provider";
import Link from "next/link";

export function CapabilitiesPreview() {
  return (
    <section className="border-b border-rule" aria-labelledby="capabilities-title">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-mono mb-3">Capabilities</p>
            <Reveal>
              <h2 id="capabilities-title" className="text-display text-4xl md:text-5xl">
                What we take on
              </h2>
            </Reveal>
          </div>
          <Link href="/services/" className="text-sm text-muted no-underline hover:text-signal">
            All services →
          </Link>
        </div>

        <RevealStagger className="grid gap-0 border-t border-rule md:grid-cols-2">
          {services.slice(0, 6).map((service, i) => (
            <RevealItem key={service.slug}>
              <div className="border-b border-rule py-7 md:px-6 md:odd:border-r">
                <p className="text-mono m-0">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-display mt-2 text-2xl md:text-3xl">{service.title}</h3>
                <p className="mt-3 max-w-md text-muted">{service.summary}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-16 grid gap-6 border-t border-rule pt-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-mono mb-2">Process</p>
            <h3 className="text-display text-2xl">How engagements move</h3>
          </div>
          {processSteps.map((step) => (
            <div key={step.number} className="border-l border-rule pl-4">
              <p className="text-mono m-0 text-signal">{step.number}</p>
              <h4 className="mt-2 text-lg font-medium">{step.title}</h4>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
