"use client";

import Link from "next/link";

export function CtaCloser() {
  return (
    <section
      className="rounded-xl p-6"
      style={{
        background: "oklch(0.10 0.02 285 / 0.7)",
        border: "1px solid color-mix(in oklch, var(--primary) 20%, transparent)",
        backgroundImage: "radial-gradient(ellipse at 80% 50%, oklch(0.55 0.22 285 / 0.10), transparent 60%)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-foreground/90 mb-1">
            Want to walk through the approach?
          </h3>
          <p className="text-sm text-muted-foreground max-w-md">
            I&apos;ve mapped the token system and motion language to Swave&apos;s specific UI patterns. Happy to review live or drop a Figma annotation file.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/proposal"
            className="text-sm text-muted-foreground hover:text-foreground/80 transition-colors"
          >
            See the proposal &rarr;
          </Link>
          <span
            className="text-xs font-medium px-3 py-1.5 rounded-lg"
            style={{
              background: "var(--gradient-primary)",
              color: "oklch(0.985 0 0)",
            }}
          >
            Reply on Upwork to start
          </span>
        </div>
      </div>
    </section>
  );
}
