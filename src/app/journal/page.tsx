import { PageIntro } from "@/components/layout/page-intro";
import { journalPosts } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Journal",
  description: "Demo editorial notes on identity systems, type, digital craft and process.",
  path: "/journal/",
});

export default function JournalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Journal · demo articles"
        title="Notes from making"
        description="Four fictional demo articles. Replace with your studio writing."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-10 md:px-8 md:py-14">
        <ul className="m-0 list-none divide-y divide-rule border-y border-rule p-0">
          {journalPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/journal/${post.slug}/`}
                className="group grid gap-3 py-8 no-underline md:grid-cols-12 md:items-baseline"
              >
                <p className="text-mono m-0 md:col-span-2">{post.date}</p>
                <div className="md:col-span-7">
                  <p className="text-mono m-0 mb-2">{post.category}</p>
                  <h2 className="text-display m-0 text-3xl transition-colors group-hover:text-signal md:text-4xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-muted">{post.excerpt}</p>
                </div>
                <p className="text-mono m-0 md:col-span-3 md:text-right">
                  {post.readingTime} · {post.author}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
