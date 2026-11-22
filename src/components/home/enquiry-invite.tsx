import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { contact } from "@/content/provider";

export function EnquiryInvite() {
  return (
    <section className="bg-ink text-[color:var(--paper)]" aria-labelledby="enquiry-title">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <p className="text-mono mb-4 text-[color:var(--paper)]/55">Enquiry</p>
        <Reveal>
          <h2
            id="enquiry-title"
            className="text-display max-w-[14ch] text-5xl tracking-tight md:text-7xl"
          >
            Bring a brief. We&apos;ll bring a point of view.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-lg text-lg text-[color:var(--paper)]/70">{contact.note}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact/" variant="signal">
            Open enquiry form
          </ButtonLink>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center px-5 py-3 text-sm text-[color:var(--paper)] underline decoration-[color:var(--paper)]/30 underline-offset-4 hover:decoration-[color:var(--signal)]"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
