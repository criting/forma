import { Reveal } from "@/components/motion/reveal";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { ProjectTile } from "@/components/work/project-tile";
import { ContentProvider, disciplines } from "@/content/provider";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";
import Link from "next/link";

export function CaseStudy({ project }: { project: Project }) {
  const related = ContentProvider.relatedProjects(project.slug, 2);
  const { prev, next } = ContentProvider.adjacentProjects(project.slug);
  const labels = project.disciplines
    .map((d) => disciplines.find((x) => x.slug === d)?.label)
    .filter(Boolean);

  return (
    <article>
      <header className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
          <p className="text-mono mb-4">
            {project.year} · {project.client} · Fictional demo
          </p>
          <Reveal>
            <h1 className="text-mega max-w-[12ch] text-[clamp(3rem,10vw,7.5rem)] tracking-tight">
              {project.title}
            </h1>
          </Reveal>
          <div className="signal-bar mt-6" />
          <p className="mt-6 max-w-2xl text-xl text-muted">{project.summary}</p>
          <ul className="mt-8 flex list-none flex-wrap gap-2 p-0">
            {labels.map((label) => (
              <li
                key={label}
                className="rounded-[var(--radius-control)] border border-rule px-3 py-1 text-mono normal-case tracking-normal text-meta"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto max-w-[1600px]">
          <PlaceholderFrame image={project.hero} priority className="border-y border-rule" />
        </div>
      </header>

      <section
        className={cn(
          "mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20",
          project.layout === "editorial" && "grid gap-12 md:grid-cols-12",
          project.layout === "spread" && "space-y-14",
          project.layout === "stack" && "max-w-3xl space-y-12",
          project.layout === "grid" && "space-y-12",
        )}
      >
        {project.layout === "editorial" ? (
          <>
            <div className="md:col-span-4">
              <h2 className="text-mono text-signal">Overview</h2>
            </div>
            <div className="space-y-10 md:col-span-8">
              <Block title="Challenge" body={project.challenge} />
              <Block title="Approach" body={project.approach} />
              <Block title="Outcome" body={project.outcome} />
            </div>
          </>
        ) : (
          <div className="grid gap-10 md:grid-cols-3">
            <Block title="Challenge" body={project.challenge} />
            <Block title="Approach" body={project.approach} />
            <Block title="Outcome" body={project.outcome} />
          </div>
        )}
      </section>

      <section className="border-y border-rule bg-paper-raised">
        <div
          className={cn(
            "mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-16",
            project.layout === "grid"
              ? "grid gap-6 md:grid-cols-2"
              : project.layout === "spread"
                ? "grid gap-8 md:grid-cols-2"
                : "space-y-8",
          )}
        >
          <h2 className="text-mono md:col-span-full">Gallery · placeholders</h2>
          {project.gallery.map((image) => (
            <PlaceholderFrame key={image.id} image={image} />
          ))}
        </div>
      </section>

      {project.applications?.length ? (
        <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8">
          <h2 className="text-display mb-8 text-3xl">Identity applications</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {project.applications.map((image) => (
              <PlaceholderFrame key={image.id} image={image} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-12 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-mono mb-4">Credits</h2>
            <ul className="m-0 list-none space-y-2 p-0">
              {project.credits.map((c) => (
                <li key={`${c.role}-${c.name}`} className="flex justify-between gap-4 border-b border-rule py-2">
                  <span className="text-muted">{c.role}</span>
                  <span>{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-mono mb-4">Disciplines</h2>
            <p className="text-lg">{labels.join(" · ")}</p>
            <p className="mt-4 text-sm text-meta">
              This case study is fictional demo content for the FORMA template.
            </p>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8">
            <h2 className="text-display mb-8 text-3xl">Related projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {related.map((p, i) => (
                <ProjectTile key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <nav
        aria-label="Case study pagination"
        className="border-t border-rule bg-ink text-[color:var(--paper)]"
      >
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.slug}/`}
              className="border-b border-[color:var(--paper)]/15 px-5 py-8 no-underline transition-colors hover:bg-[color:var(--paper)]/5 md:border-b-0 md:border-r md:px-8"
            >
              <p className="text-mono m-0 text-[color:var(--paper)]/50">Previous</p>
              <p className="text-display mt-2 text-2xl">{prev.title}</p>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}/`}
              className="px-5 py-8 text-right no-underline transition-colors hover:bg-[color:var(--paper)]/5 md:px-8"
            >
              <p className="text-mono m-0 text-[color:var(--paper)]/50">Next</p>
              <p className="text-display mt-2 text-2xl">{next.title}</p>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="text-mono text-signal">{title}</h2>
      <p className="mt-3 text-lg leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
