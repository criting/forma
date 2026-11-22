import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { studio } from "@/content/provider";

export function PointOfView() {
  return (
    <section className="border-b border-rule bg-paper-raised" aria-labelledby="pov-title">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-4">
          <p className="text-mono mb-3">Studio point of view</p>
          <Reveal>
            <h2 id="pov-title" className="text-display text-4xl md:text-5xl">
              Made for production, not decks
            </h2>
          </Reveal>
        </div>
        <RevealStagger className="md:col-span-8 space-y-8">
          {studio.philosophy.map((para) => (
            <RevealItem key={para.slice(0, 24)}>
              <p className="max-w-2xl text-xl leading-relaxed text-ink-soft md:text-2xl md:leading-snug">
                {para}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
