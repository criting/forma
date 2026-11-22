import { contact, navigation, site } from "@/content/provider";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-paper-sunken">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-16">
        <div className="md:col-span-5">
          <p className="text-display text-4xl tracking-tight md:text-5xl">{site.wordmark}</p>
          <p className="mt-4 max-w-sm text-muted">{site.tagline}</p>
          <p className="mt-6">
            <a
              href={`mailto:${contact.email}`}
              className="text-lg text-ink underline decoration-rule underline-offset-4 hover:decoration-signal"
            >
              {contact.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-mono mb-4">Navigate</p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-soft no-underline hover:text-signal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-mono mb-4">Elsewhere</p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-ink-soft no-underline hover:text-signal"
                  rel="noreferrer"
                  target="_blank"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
            <Link href="/privacy/" className="no-underline hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms/" className="no-underline hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-5 text-sm text-meta md:flex-row md:items-center md:justify-between md:px-8">
          <p className="m-0">{site.copyright}</p>
          <p className="m-0 text-mono normal-case tracking-normal">{contact.location}</p>
        </div>
      </div>
    </footer>
  );
}
