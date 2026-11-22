import { Reveal } from "@/components/motion/reveal";
import { ContentProvider } from "@/content/provider";
import Link from "next/link";

export function JournalHighlights() {
  const posts = ContentProvider.journalPosts.slice(0, 3);

  return (
    <section className="border-b border-rule" aria-labelledby="journal-home-title">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-mono mb-3">Journal</p>
            <Reveal>
              <h2 id="journal-home-title" className="text-display text-4xl md:text-5xl">
                Notes from the studio
              </h2>
            </Reveal>
          </div>
          <Link href="/journal/" className="text-sm text-muted no-underline hover:text-signal">
            All posts →
          </Link>
        </div>

        <ul className="m-0 list-none divide-y divide-rule border-y border-rule p-0">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/journal/${post.slug}/`}
                className="group grid gap-3 py-7 no-underline md:grid-cols-12 md:items-baseline"
              >
                <p className="text-mono m-0 md:col-span-2">{post.date}</p>
                <div className="md:col-span-7">
                  <h3 className="text-display m-0 text-2xl transition-colors group-hover:text-signal md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-muted">{post.excerpt}</p>
                </div>
                <p className="text-mono m-0 md:col-span-3 md:text-right">
                  {post.category} · {post.readingTime}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
