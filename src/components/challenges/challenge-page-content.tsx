"use client";

import type { ReactNode } from "react";
import { OutcomeStatement } from "./outcome-statement";
import { VizTypographyHierarchy } from "./viz-typography-hierarchy";
import { VizDepthLayers } from "./viz-depth-layers";
import { VizMotionFlow } from "./viz-motion-flow";
import type { ChallengeData } from "@/data/challenges";

interface ChallengeCardProps {
  challenge: ChallengeData;
  index: number;
  visualization: ReactNode;
}

function ChallengeCard({ challenge, index, visualization }: ChallengeCardProps) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <div
      className="rounded-xl p-6 space-y-4"
      style={{
        background: "oklch(0.11 0.01 285 / 0.8)",
        border: "1px solid color-mix(in oklch, var(--primary) 12%, transparent)",
        boxShadow: "0 0 0 1px oklch(1 0 0 / 0.04), inset 0 1px 0 oklch(1 0 0 / 0.06)",
      }}
    >
      <div className="flex items-baseline gap-3">
        <span
          className="font-mono text-sm font-medium w-6 shrink-0 tabular-nums"
          style={{ color: "var(--primary)" }}
        >
          {stepNumber}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-foreground/90">{challenge.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{challenge.description}</p>
        </div>
      </div>

      <div className="pl-9">{visualization}</div>

      <div className="pl-9">
        <OutcomeStatement outcome={challenge.outcome} />
      </div>
    </div>
  );
}

interface ChallengePageContentProps {
  challenges: ChallengeData[];
}

export function ChallengePageContent({ challenges }: ChallengePageContentProps) {
  const visualizations: Record<string, ReactNode> = {
    "challenge-1": <VizTypographyHierarchy />,
    "challenge-2": <VizDepthLayers />,
    "challenge-3": <VizMotionFlow />,
  };

  return (
    <div className="flex flex-col gap-5">
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={challenge.id}
          challenge={challenge}
          index={index}
          visualization={visualizations[challenge.id]}
        />
      ))}
    </div>
  );
}
