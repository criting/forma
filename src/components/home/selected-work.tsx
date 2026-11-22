import { StickyWork } from "@/components/home/sticky-work";
import { ContentProvider } from "@/content/provider";

/** Homepage work sequence — cinematic sticky plates. */
export function SelectedWork() {
  return <StickyWork projects={ContentProvider.featuredProjects()} />;
}
