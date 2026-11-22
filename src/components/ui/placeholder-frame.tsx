import { cn } from "@/lib/cn";
import type { ProjectImage } from "@/content/types";

const aspectClass: Record<ProjectImage["aspect"], string> = {
  hero: "aspect-[16/10] md:aspect-[21/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function PlaceholderFrame({
  image,
  className,
  priority,
}: {
  image: ProjectImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("group relative overflow-hidden bg-ink", className)}>
      <div
        className={cn("relative w-full", aspectClass[image.aspect])}
        style={{ background: image.tone }}
        data-priority={priority ? "true" : undefined}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(135deg, transparent 0%, rgb(0 0 0 / 0.25) 100%),
              repeating-linear-gradient(
                -12deg,
                transparent,
                transparent 18px,
                rgb(255 255 255 / 0.04) 18px,
                rgb(255 255 255 / 0.04) 19px
              )
            `,
          }}
        />
        <div
          aria-hidden
          className="absolute left-4 top-4 h-3 w-3 rounded-full border border-[color:var(--signal)] opacity-70 transition-transform duration-500 group-hover:translate-x-1"
        />
        <div
          aria-hidden
          className="absolute bottom-4 right-4 h-3 w-3 border border-[color:var(--paper)] opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
          <p className="text-mono text-[color:var(--paper)]/70">Placeholder</p>
          <p className="mt-1 max-w-md font-[family-name:var(--font-display)] text-2xl leading-none tracking-tight text-[color:var(--paper)] md:text-3xl">
            {image.label}
          </p>
        </div>
      </div>
      {image.caption ? (
        <figcaption className="text-mono mt-2 px-0.5">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
