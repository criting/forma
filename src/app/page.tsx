import { CapabilitiesPreview } from "@/components/home/capabilities";
import { EnquiryInvite } from "@/components/home/enquiry-invite";
import { HomeHero } from "@/components/home/hero";
import { JournalHighlights } from "@/components/home/journal-highlights";
import { PointOfView } from "@/components/home/point-of-view";
import { SelectedWork } from "@/components/home/selected-work";
import { Marquee } from "@/components/motion/marquee";
import { disciplines } from "@/content/provider";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee items={disciplines.map((d) => d.label)} />
      <SelectedWork />
      <PointOfView />
      <CapabilitiesPreview />
      <JournalHighlights />
      <EnquiryInvite />
    </>
  );
}
