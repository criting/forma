import { PageIntro } from "@/components/layout/page-intro";
import { contact, site } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms of use template for FORMA demo site.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms" description="Template terms — replace before commercial launch." />
      <div className="mx-auto max-w-3xl space-y-6 px-5 py-12 text-ink-soft md:px-8">
        <p>
          {site.name} demo content (projects, people, journal) is fictional and provided for
          template evaluation only. It does not represent real clients, results or endorsements.
        </p>
        <p>
          Use of this template software is governed by your licence with the template vendor.
          Website visitors should treat sample case studies as illustrative.
        </p>
        <p>
          Contact: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
    </>
  );
}
