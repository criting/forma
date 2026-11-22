import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-center px-5 py-20 md:px-8">
      <p className="text-mono text-signal">404</p>
      <h1 className="text-display mt-4 max-w-[10ch] text-6xl md:text-8xl">Page not on the sheet</h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        This route doesn&apos;t exist in the FORMA template. Head back to work or home.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="primary">
          Home
        </ButtonLink>
        <ButtonLink href="/work/" variant="secondary">
          Work archive
        </ButtonLink>
      </div>
    </section>
  );
}
