"use client";

import { ProjectTile } from "@/components/work/project-tile";
import { ContentProvider, disciplines } from "@/content/provider";
import type { DisciplineSlug, Project } from "@/content/types";
import { cn } from "@/lib/cn";
import { useMemo, useState } from "react";

type DisciplineFilter = DisciplineSlug | "all";
type YearFilter = number | "all";

export function WorkArchive({ projects }: { projects: Project[] }) {
  const years = ContentProvider.projectYears();
  const [discipline, setDiscipline] = useState<DisciplineFilter>("all");
  const [year, setYear] = useState<YearFilter>("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const byDiscipline =
        discipline === "all" || p.disciplines.includes(discipline);
      const byYear = year === "all" || p.year === year;
      return byDiscipline && byYear;
    });
  }, [projects, discipline, year]);

  return (
    <div>
      <div className="border-b border-rule bg-paper-raised">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-6 md:flex-row md:items-end md:justify-between md:px-8">
          <fieldset className="m-0 min-w-0 border-0 p-0">
            <legend className="text-mono mb-3 px-0">Discipline</legend>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by discipline">
              <FilterChip
                active={discipline === "all"}
                onClick={() => setDiscipline("all")}
              >
                All
              </FilterChip>
              {disciplines.map((d) => (
                <FilterChip
                  key={d.slug}
                  active={discipline === d.slug}
                  onClick={() => setDiscipline(d.slug)}
                >
                  {d.label}
                </FilterChip>
              ))}
            </div>
          </fieldset>

          <fieldset className="m-0 border-0 p-0">
            <legend className="text-mono mb-3 px-0">Year</legend>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by year">
              <FilterChip active={year === "all"} onClick={() => setYear("all")}>
                All years
              </FilterChip>
              {years.map((y) => (
                <FilterChip key={y} active={year === y} onClick={() => setYear(y)}>
                  {y}
                </FilterChip>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
        <p className="text-mono mb-8" aria-live="polite">
          {filtered.length} project{filtered.length === 1 ? "" : "s"}
          {discipline !== "all" || year !== "all" ? " · filtered" : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="border border-dashed border-rule-strong px-6 py-16 text-center">
            <p className="text-display text-2xl">No projects in this cut</p>
            <p className="mt-3 text-muted">Try another discipline or year.</p>
            <button
              type="button"
              className="mt-6 rounded-[var(--radius-control)] border border-rule-strong px-4 py-2 text-sm hover:border-ink"
              onClick={() => {
                setDiscipline("all");
                setYear("all");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
            {filtered.map((project, i) => (
              <ProjectTile
                key={project.slug}
                project={project}
                index={i}
                variant={i % 5 === 0 ? "featured" : "default"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-[var(--radius-control)] border px-3 py-1.5 text-sm transition-colors",
        active
          ? "border-ink bg-ink text-paper-raised"
          : "border-rule bg-transparent text-ink-soft hover:border-ink",
      )}
    >
      {children}
    </button>
  );
}
