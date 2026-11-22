import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { people } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "People",
  description: "Fictional demo team profiles for the FORMA template. Replace or hide when using real data.",
  path: "/people/",
});

export default function PeoplePage() {
  return (
    <>
      <PageIntro
        eyebrow="Team · demo profiles"
        title="People"
        description="Clearly fictional demo profiles. Replace with your team or remove this section."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-16">
        <ul className="m-0 grid list-none gap-8 p-0 md:grid-cols-2">
          {people.map((person, i) => (
            <li key={person.slug}>
              <Reveal delay={i * 0.05}>
                <Link
                  href={`/people/${person.slug}/`}
                  className="group block overflow-hidden border border-rule no-underline transition-colors hover:border-ink"
                >
                  <div
                    className="aspect-[5/4] relative"
                    style={{ background: person.tone }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <p className="text-mono absolute bottom-4 left-4 text-[color:var(--paper)]/70">
                      Portrait placeholder · Demo
                    </p>
                  </div>
                  <div className="p-6">
                    <h2 className="text-display text-3xl transition-colors group-hover:text-signal">
                      {person.name}
                    </h2>
                    <p className="mt-2 text-muted">{person.role}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
