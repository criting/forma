"use client";

import { cn } from "@/lib/cn";
import { navigation, site } from "@/content/provider";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navPath, setNavPath] = useState(pathname);
  const reduce = useReducedMotion();

  if (pathname !== navPath) {
    setNavPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, "")) || pathname === href;
  };

  const onInkHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background,border-color,backdrop-filter,color,box-shadow] duration-300",
        scrolled || open
          ? "border-b border-rule bg-paper/92 text-ink shadow-[0_12px_40px_-24px_rgb(15_13_12/0.35)] backdrop-blur-md"
          : onInkHero
            ? "border-b border-transparent bg-ink text-paper-raised"
            : "border-b border-transparent bg-paper/80 text-ink backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1500px] items-center justify-between gap-6 px-5 md:px-8">
        <Link
          href="/"
          className="text-display text-[1.45rem] tracking-[-0.05em] no-underline"
        >
          {site.wordmark}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm tracking-wide no-underline transition-colors",
                isActive(item.href)
                  ? "text-signal"
                  : onInkHero
                    ? "text-paper-raised/75 hover:text-paper-raised"
                    : "text-ink-soft hover:text-signal",
              )}
            >
              {item.label}
              {isActive(item.href) ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-signal"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-2 rounded-[var(--radius-control)] border px-3 py-2 text-sm lg:hidden",
            onInkHero ? "border-paper-raised/30" : "border-rule-strong",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-mono m-0 normal-case tracking-normal">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="border-t border-rule bg-paper text-ink lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-[1500px] flex-col gap-1 px-5 py-8"
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-display block py-3 text-4xl tracking-tight no-underline",
                      isActive(item.href) ? "text-signal" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
