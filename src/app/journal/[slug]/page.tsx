import { ShareActions } from "@/components/journal/share-actions";
import { ContentProvider, journalPosts, site } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = ContentProvider.getJournalPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}/`,
  });
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = ContentProvider.getJournalPost(slug);
  if (!post) notFound();
  const related = ContentProvider.relatedJournal(post.slug);
  const shareUrl = `${site.url.replace(/\/$/, "")}/journal/${post.slug}/`;

  return (
    <article>
      <header className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
          <p className="text-mono mb-4">
            {post.category} · {post.date} · {post.readingTime} · Demo
          </p>
          <h1 className="text-display text-4xl tracking-tight md:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg text-muted">{post.excerpt}</p>
          <p className="mt-6 text-sm text-meta">By {post.author}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-6 px-5 py-12 md:px-8 md:py-16">
        {post.body.map((para) => (
          <p key={para.slice(0, 32)} className="text-lg leading-relaxed text-ink-soft md:text-xl">
            {para}
          </p>
        ))}
      </div>

      <ShareActions url={shareUrl} title={post.title} />

      {related.length ? (
        <section className="border-t border-rule bg-paper-raised">
          <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
            <h2 className="text-display text-2xl">Related stories</h2>
            <ul className="mt-6 list-none space-y-4 p-0">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/journal/${r.slug}/`}
                    className="text-lg no-underline hover:text-signal"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}
