"use client";

import { Reveal } from "@/components/motion/reveal";
import { ContentProvider } from "@/content/provider";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function JournalHighlights() {
  const posts = ContentProvider.journalPosts.slice(0, 3);
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-rule" aria-labelledby="journal-home-title">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-mono mb-3">Journal</p>
            <Reveal>
              <h2
                id="journal-home-title"
                className="text-display text-[clamp(2.4rem,6vw,5rem)]"
              >
                Notes from the studio
              </h2>
            </Reveal>
          </div>
          <Link href="/journal/" className="text-sm text-muted no-underline hover:text-signal">
            All posts →
          </Link>
        </div>

        <ul className="m-0 list-none divide-y divide-rule border-y border-rule p-0">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
              >
                <Link
                  href={`/journal/${post.slug}/`}
                  className="group grid gap-3 py-8 no-underline md:grid-cols-12 md:items-baseline md:py-10"
                >
                  <p className="text-mono m-0 md:col-span-2">{post.date}</p>
                  <div className="md:col-span-7">
                    <h3 className="text-display m-0 text-[clamp(1.5rem,3vw,2.5rem)] transition-colors group-hover:text-signal">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-muted">{post.excerpt}</p>
                  </div>
                  <p className="text-mono m-0 md:col-span-3 md:text-right">
                    {post.category} · {post.readingTime}
                  </p>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
