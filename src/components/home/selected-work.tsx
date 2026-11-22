import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectTile } from "@/components/work/project-tile";
import { ContentProvider } from "@/content/provider";

export function SelectedWork() {
  const featured = ContentProvider.featuredProjects().slice(0, 5);

  return (
    <section className="border-b border-rule" aria-labelledby="selected-work-title">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-mono mb-3">Selected work</p>
            <Reveal>
              <h2 id="selected-work-title" className="text-display text-4xl md:text-5xl">
                Editorial sequence
              </h2>
            </Reveal>
          </div>
          <ButtonLink href="/work/" variant="ghost">
            Full archive →
          </ButtonLink>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
          {featured.map((project, i) => (
            <ProjectTile
              key={project.slug}
              project={project}
              index={i}
              variant={i === 0 ? "featured" : "default"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
