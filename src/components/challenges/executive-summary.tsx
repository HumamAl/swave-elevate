import Link from "next/link";
import type { ExecutiveSummaryData } from "@/data/challenges";

export function ExecutiveSummary({ commonApproach, differentApproach, accentWord }: ExecutiveSummaryData) {
  const renderDifferentApproach = () => {
    if (!accentWord) return <span>{differentApproach}</span>;
    const escaped = accentWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = differentApproach.split(new RegExp(`(${escaped})`, "i"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === accentWord.toLowerCase() ? (
            <span key={i} className="gradient-text font-semibold">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl p-6 md:p-8 glass-surface"
      style={{
        background: "oklch(0.10 0.02 285 / 0.8)",
        backgroundImage:
          "radial-gradient(ellipse at 20% 50%, oklch(0.55 0.22 285 / 0.12), transparent 65%), radial-gradient(ellipse at 80% 30%, oklch(0.72 0.20 320 / 0.08), transparent 55%)",
      }}
    >
      <p className="text-sm md:text-base leading-relaxed text-white/50">{commonApproach}</p>
      <hr className="my-4 border-white/10" />
      <p className="text-base md:text-lg leading-relaxed font-medium text-white/90">
        {renderDifferentApproach()}
      </p>
      <p className="text-xs text-white/35 mt-4">
        <Link href="/" className="hover:text-white/60 transition-colors underline underline-offset-2">
          See the polish in action →
        </Link>
      </p>
    </div>
  );
}
