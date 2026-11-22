import { ContactForm } from "@/components/forms/contact-form";
import { PageIntro } from "@/components/layout/page-intro";
import { contact } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Enquire about a branding, packaging, editorial or digital project.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell us about the brief"
        description={contact.note}
      />

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-12 md:grid-cols-12 md:px-8 md:py-16">
        <aside className="md:col-span-4">
          <p className="text-mono mb-3">Direct</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-2xl text-ink underline decoration-rule underline-offset-4 hover:decoration-signal"
          >
            {contact.email}
          </a>
          <p className="mt-6 text-muted">{contact.location}</p>
          <p className="mt-8 text-sm text-meta">
            Prefer email? Same details — no invented phone numbers or addresses in this template.
          </p>
        </aside>
        <div className="md:col-span-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
