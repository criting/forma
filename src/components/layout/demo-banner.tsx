import { site } from "@/content/provider";

export function DemoBanner() {
  return (
    <div className="border-b border-rule bg-paper-sunken px-4 py-2 text-center">
      <p className="text-mono m-0 tracking-[0.06em] text-muted normal-case">
        {site.demoNotice}
      </p>
    </div>
  );
}
