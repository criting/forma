import { PageIntro } from "@/components/layout/page-intro";
import { contact, site } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "Privacy policy template for FORMA demo site.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy" description="Template policy — replace with counsel-approved text before launch." />
      <div className="mx-auto max-w-3xl space-y-6 px-5 py-12 text-ink-soft md:px-8">
        <p>
          This demo site for {site.name} does not operate a live database. Contact form submissions
          without a configured endpoint are not transmitted to a server.
        </p>
        <p>
          If you connect a form provider, that provider&apos;s privacy policy will apply to enquiry
          data. Analytics, if added later, should be documented here.
        </p>
        <p>
          Questions: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
    </>
  );
}
