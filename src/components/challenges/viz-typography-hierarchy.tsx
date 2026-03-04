"use client";

import { useState } from "react";

export function VizTypographyHierarchy() {
  const [view, setView] = useState<"before" | "after">("before");

  return (
    <div className="space-y-3">
      {/* Toggle */}
      <div
        className="inline-flex rounded-lg p-0.5 gap-0.5"
        style={{ background: "color-mix(in oklch, var(--primary) 8%, transparent)", border: "1px solid color-mix(in oklch, var(--primary) 15%, transparent)" }}
      >
        <button
          onClick={() => setView("before")}
          className="px-4 py-1.5 text-xs font-medium rounded-md transition-all"
          style={
            view === "before"
              ? { background: "color-mix(in oklch, var(--destructive) 15%, transparent)", color: "var(--destructive)", borderColor: "color-mix(in oklch, var(--destructive) 25%, transparent)", borderWidth: "1px", borderStyle: "solid" }
              : { color: "var(--muted-foreground)" }
          }
        >
          Before — Flat
        </button>
        <button
          onClick={() => setView("after")}
          className="px-4 py-1.5 text-xs font-medium rounded-md transition-all"
          style={
            view === "after"
              ? { background: "color-mix(in oklch, var(--success) 12%, transparent)", color: "var(--success)", borderColor: "color-mix(in oklch, var(--success) 25%, transparent)", borderWidth: "1px", borderStyle: "solid" }
              : { color: "var(--muted-foreground)" }
          }
        >
          After — Hierarchy
        </button>
      </div>

      {/* Mock message list */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid color-mix(in oklch, var(--primary) 12%, transparent)", background: "oklch(0.10 0.01 285 / 0.6)" }}
      >
        {/* Status bar */}
        <div className="flex justify-between items-center px-4 py-1.5" style={{ background: "oklch(0.08 0.01 285 / 0.9)" }}>
          <span className="text-[10px] text-white/40 font-mono">9:41</span>
          <span className="text-[10px] text-white/40">Swave</span>
          <span className="text-[10px] text-white/40 font-mono">●●●</span>
        </div>

        {/* Thread list */}
        <div className="divide-y divide-white/5">
          {[
            { name: "Maya K.", preview: "🔥 this expires in 30s", time: "just now", unread: 3, incognito: true },
            { name: "Dev Team", preview: "Build review at 3pm?", time: "12m ago", unread: 0, incognito: false },
            { name: "Jordan", preview: "Message burned", time: "1h ago", unread: 0, incognito: false },
          ].map((thread) => (
            <div key={thread.name} className="flex items-center gap-3 px-4 py-3">
              {/* Avatar */}
              <div
                className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                {thread.name.charAt(0)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {view === "before" ? (
                  // FLAT — no hierarchy
                  <>
                    <div className="text-xs text-white/80">{thread.name}</div>
                    <div className="text-xs text-white/80 truncate">{thread.preview}</div>
                    <div className="text-xs text-white/80">{thread.time}</div>
                  </>
                ) : (
                  // HIERARCHY — proper type scale
                  <>
                    <div className="flex items-baseline justify-between gap-2">
                      <span
                        className="text-sm font-semibold text-white/95 truncate"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {thread.name}
                      </span>
                      <span className="text-[10px] text-white/35 font-mono shrink-0">{thread.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {thread.incognito && (
                        <span className="text-[9px] uppercase tracking-widest font-medium px-1 py-0.5 rounded" style={{ background: "color-mix(in oklch, var(--primary) 15%, transparent)", color: "var(--primary)" }}>
                          incognito
                        </span>
                      )}
                      <span className="text-xs text-white/40 truncate">{thread.preview}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Unread badge */}
              {thread.unread > 0 && (
                <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white gradient-fill">
                  {thread.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-muted-foreground text-center">
        {view === "before"
          ? "Flat typography — all text at similar size/weight, no clear priority"
          : "Type hierarchy — name, preview, metadata at distinct weights and opacity levels"}
      </p>
    </div>
  );
}
