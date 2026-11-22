import { PageIntro } from "@/components/layout/page-intro";
import { ProjectTile } from "@/components/work/project-tile";
import { ContentProvider, people, projects } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = ContentProvider.getPerson(slug);
  if (!person) return {};
  return pageMetadata({
    title: person.name,
    description: person.bio,
    path: `/people/${person.slug}/`,
  });
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = ContentProvider.getPerson(slug);
  if (!person) notFound();

  const work = projects.filter((p) => person.selectedWork.includes(p.slug));

  return (
    <>
      <PageIntro eyebrow="People · demo profile" title={person.name} description={person.role} />

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-12 md:grid-cols-12 md:px-8">
        <div
          className="aspect-[4/5] md:col-span-5"
          style={{ background: person.tone }}
          aria-label={`${person.name} portrait placeholder`}
        />
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-ink-soft md:text-xl">{person.bio}</p>
          {person.socials?.length ? (
            <ul className="mt-8 flex list-none gap-4 p-0">
              {person.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm underline decoration-rule underline-offset-4 hover:decoration-signal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <p className="text-mono mt-8 normal-case tracking-normal text-meta">
            Fictional demo profile for template preview.
          </p>
        </div>
      </section>

      {work.length ? (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8">
            <h2 className="text-display mb-8 text-3xl">Selected work</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {work.map((p, i) => (
                <ProjectTile key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
