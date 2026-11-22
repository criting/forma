import { disciplines } from "@/content/data/disciplines";
import { journalPosts } from "@/content/data/journal";
import { people } from "@/content/data/people";
import { projects } from "@/content/data/projects";
import { processSteps, services } from "@/content/data/services";
import { contact, navigation, site, studio } from "@/content/data/site";
import type {
  DisciplineSlug,
  JournalPost,
  Person,
  Project,
  Service,
} from "@/content/types";

/**
 * ContentProvider — typed local content boundary.
 * Swap this module for a CMS/Nextly adapter later without rewriting UI.
 */
export const ContentProvider = {
  site,
  navigation,
  contact,
  studio,
  disciplines,
  services,
  processSteps,
  projects,
  people,
  journalPosts,

  getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
  },

  getPerson(slug: string): Person | undefined {
    return people.find((p) => p.slug === slug);
  },

  getJournalPost(slug: string): JournalPost | undefined {
    return journalPosts.find((p) => p.slug === slug);
  },

  getService(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
  },

  featuredProjects(): Project[] {
    return projects.filter((p) => p.featured);
  },

  filterProjects(opts: {
    discipline?: DisciplineSlug | "all";
    year?: number | "all";
  }): Project[] {
    return projects.filter((p) => {
      const byDiscipline =
        !opts.discipline ||
        opts.discipline === "all" ||
        p.disciplines.includes(opts.discipline);
      const byYear = !opts.year || opts.year === "all" || p.year === opts.year;
      return byDiscipline && byYear;
    });
  },

  projectYears(): number[] {
    return [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a);
  },

  relatedProjects(slug: string, limit = 3): Project[] {
    const current = this.getProject(slug);
    if (!current) return projects.filter((p) => p.slug !== slug).slice(0, limit);
    const scored = projects
      .filter((p) => p.slug !== slug)
      .map((p) => ({
        project: p,
        score: p.disciplines.filter((d) => current.disciplines.includes(d)).length,
      }))
      .sort((a, b) => b.score - a.score || b.project.year - a.project.year);
    return scored.slice(0, limit).map((s) => s.project);
  },

  adjacentProjects(slug: string): { prev?: Project; next?: Project } {
    const index = projects.findIndex((p) => p.slug === slug);
    if (index < 0) return {};
    return {
      prev: projects[index - 1],
      next: projects[index + 1],
    };
  },

  relatedJournal(slug: string, limit = 2): JournalPost[] {
    const current = this.getJournalPost(slug);
    if (!current) return journalPosts.filter((p) => p.slug !== slug).slice(0, limit);
    const related = current.related
      .map((r) => this.getJournalPost(r))
      .filter((p): p is JournalPost => Boolean(p));
    if (related.length >= limit) return related.slice(0, limit);
    const extras = journalPosts.filter(
      (p) => p.slug !== slug && !related.some((r) => r.slug === p.slug),
    );
    return [...related, ...extras].slice(0, limit);
  },
};

export {
  site,
  navigation,
  contact,
  studio,
  disciplines,
  services,
  processSteps,
  projects,
  people,
  journalPosts,
};
