import type { JournalPost } from "@/content/types";

/** Fictional demo articles for template preview. */
export const journalPosts: JournalPost[] = [
  {
    slug: "identity-as-system",
    title: "Identity as a system, not a souvenir",
    excerpt:
      "Why logos alone fail under production pressure — and how to brief for rules that survive.",
    body: [
      "Most identity failures are not aesthetic. They fail when the mark hits a dieline, a CMS field, or a contractor who never saw the guidelines.",
      "We start with constraints: where will this live, who will produce it, what has to remain flexible. The mark is one node in a system of type, colour, crop and behaviour.",
      "A good system makes the next application obvious. A souvenir mark makes every application a negotiation.",
      "If you are writing a brief, ask for exceptions as carefully as you ask for rules. That is where the identity shows its character.",
    ],
    category: "Identity",
    author: "Mira Ellison (demo)",
    date: "2025-09-12",
    readingTime: "6 min",
    related: ["type-under-pressure", "proofing-as-practice"],
    demo: true,
  },
  {
    slug: "type-under-pressure",
    title: "Type under pressure",
    excerpt:
      "Display faces look brave in a PDF. The question is how they behave on a packing slip.",
    body: [
      "We test display type at the sizes where it will actually appear — not only the hero mock.",
      "Pairings matter less than hierarchy. If body and meta collapse into the same grey noise, no amount of ‘interesting’ display will save the layout.",
      "Mono is a tool for captions and codes, not a personality transplant. Use it where precision helps.",
      "When in doubt, print it. Screen zoom lies; paper does not.",
    ],
    category: "Typography",
    author: "Jonah Park (demo)",
    date: "2025-07-03",
    readingTime: "5 min",
    related: ["identity-as-system", "digital-with-print-logic"],
    demo: true,
  },
  {
    slug: "digital-with-print-logic",
    title: "Digital with print logic",
    excerpt:
      "Crop, registration and pacing on the web — borrowing from print without cosplay.",
    body: [
      "Print logic on the web is not about faux paper textures. It is about sequence, margin and the courage to leave space.",
      "Motion should feel like a press sheet aligning — deliberate, brief — not a perpetual decoration layer.",
      "We design components that can hold irregular media ratios. Uniform card grids flatten everything into product tiles.",
      "Reduced motion is part of the craft, not an afterthought stylesheet.",
    ],
    category: "Digital",
    author: "Ada Vesa (demo)",
    date: "2025-05-21",
    readingTime: "7 min",
    related: ["type-under-pressure", "proofing-as-practice"],
    demo: true,
  },
  {
    slug: "proofing-as-practice",
    title: "Proofing as practice",
    excerpt:
      "Why we still gather around physical proofs — and what that does to decision quality.",
    body: [
      "A proof forces decisions that a Figma comment thread can postpone forever.",
      "Colour shifts, paper show-through and binding behaviour change the brief. Ignoring them is how soft digital comps become hard production regrets.",
      "We schedule proof reviews early enough that findings can still reshape the system.",
      "For digital-only projects, we still run a ‘proof’ ritual: printed screenshots, device walkthroughs, and a freeze before launch.",
    ],
    category: "Process",
    author: "Theo Nair (demo)",
    date: "2025-03-08",
    readingTime: "4 min",
    related: ["identity-as-system", "digital-with-print-logic"],
    demo: true,
  },
];
