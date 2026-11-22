import { PageIntro } from "@/components/layout/page-intro";
import { WorkArchive } from "@/components/work/work-filters";
import { projects } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description: "Archive of fictional demo projects spanning identity, packaging, editorial and digital.",
  path: "/work/",
});

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Archive"
        title="Work"
        description="Eight fictional sample projects for template preview. Filter by discipline or year."
      />
      <WorkArchive projects={projects} />
    </>
  );
}
