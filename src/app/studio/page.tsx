import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { processSteps, studio } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Studio",
  description: "Philosophy, process and collaboration model for the FORMA creative studio template.",
  path: "/studio/",
});

export default function StudioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Studio"
        title="How we think and work"
        description="A contemporary design practice template — visually literate, experimental, precise. Studio size is yours to set."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-mono">Philosophy</p>
          </div>
          <div className="space-y-8 md:col-span-8">
            {studio.philosophy.map((para) => (
              <Reveal key={para.slice(0, 20)}>
                <p className="text-2xl leading-snug text-ink-soft md:text-3xl">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-raised">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-display text-3xl">Collaboration</h2>
            <p className="mt-5 text-lg text-muted">{studio.collaboration}</p>
            <div className="mt-8">
              <ButtonLink href="/contact/" variant="secondary">
                Start a conversation
              </ButtonLink>
            </div>
          </div>
          <div>
            <h2 className="text-display text-3xl">Capabilities</h2>
            <ul className="mt-5 list-none space-y-3 border-t border-rule p-0">
              {studio.capabilities.map((item) => (
                <li key={item} className="border-b border-rule py-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <h2 className="text-display text-3xl">Practical process</h2>
        <ol className="mt-10 list-none space-y-0 p-0">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="grid gap-4 border-t border-rule py-8 md:grid-cols-12"
            >
              <p className="text-mono text-signal md:col-span-2">{step.number}</p>
              <h3 className="text-xl font-medium md:col-span-3">{step.title}</h3>
              <p className="text-muted md:col-span-7">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
