"use client";

import { useState } from "react";

export function ShareActions({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const shareText = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-wrap gap-3 border-t border-rule px-5 py-8 md:px-8">
      <p className="text-mono mr-2 self-center">Share</p>
      <a
        className="rounded-[var(--radius-control)] border border-rule px-3 py-1.5 text-sm no-underline hover:border-ink"
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
      >
        X / Twitter
      </a>
      <a
        className="rounded-[var(--radius-control)] border border-rule px-3 py-1.5 text-sm no-underline hover:border-ink"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <button
        type="button"
        className="rounded-[var(--radius-control)] border border-rule px-3 py-1.5 text-sm hover:border-ink"
        onClick={copyLink}
      >
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
