import { PageIntro } from "@/components/layout/page-intro";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { processSteps, services } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description: "Brand strategy, identity, art direction, packaging, editorial, digital and creative development.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capabilities"
        title="Services"
        description="Outcomes in plain language — from positioning to production-ready systems."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
        <RevealStagger className="divide-y divide-rule border-y border-rule">
          {services.map((service, i) => (
            <RevealItem key={service.slug}>
              <article className="grid gap-6 py-10 md:grid-cols-12 md:gap-8">
                <p className="text-mono m-0 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="md:col-span-4">
                  <h2 className="text-display text-3xl md:text-4xl">{service.title}</h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-lg text-ink-soft">{service.summary}</p>
                  <ul className="mt-5 list-none space-y-2 p-0">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3 text-muted">
                        <span className="text-signal" aria-hidden>
                          —
                        </span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="border-t border-rule bg-paper-raised">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
          <Reveal>
            <h2 className="text-display text-4xl">Process</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="border-t border-rule pt-5">
                <p className="text-mono text-signal">{step.number}</p>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/contact/" variant="primary">
              Enquire about a project
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
