// No "use client" — pure display, no hooks
import { ArrowRight } from "lucide-react";

interface FlowNode {
  id: string;
  label: string;
  sublabel: string;
  type: "trigger" | "physics" | "haptic" | "visual";
}

const nodes: FlowNode[] = [
  { id: "gesture", label: "User Gesture", sublabel: "Swipe / Long-press / Tap", type: "trigger" },
  { id: "spring", label: "Spring Physics", sublabel: ".spring(response: 0.3, dampingFraction: 0.7)", type: "physics" },
  { id: "haptic", label: "Haptic Trigger", sublabel: "UIImpactFeedbackGenerator .medium", type: "haptic" },
  { id: "render", label: "Visual Result", sublabel: "Bubble slide-in, burn glow, reply tray", type: "visual" },
];

const typeStyles: Record<FlowNode["type"], { bg: string; border: string; text: string }> = {
  trigger: {
    bg: "color-mix(in oklch, var(--primary) 12%, transparent)",
    border: "color-mix(in oklch, var(--primary) 25%, transparent)",
    text: "var(--primary)",
  },
  physics: {
    bg: "color-mix(in oklch, var(--accent) 10%, transparent)",
    border: "color-mix(in oklch, var(--accent) 20%, transparent)",
    text: "var(--accent-foreground)",
  },
  haptic: {
    bg: "color-mix(in oklch, var(--warning) 10%, transparent)",
    border: "color-mix(in oklch, var(--warning) 25%, transparent)",
    text: "var(--warning)",
  },
  visual: {
    bg: "color-mix(in oklch, var(--success) 10%, transparent)",
    border: "color-mix(in oklch, var(--success) 25%, transparent)",
    text: "var(--success)",
  },
};

const interactionExamples = [
  { action: "Tap send", spring: "response: 0.28", damping: "0.72", haptic: ".light", result: "Bubble launches with overshoot" },
  { action: "Swipe-to-reply", spring: "response: 0.35", damping: "0.65", haptic: ".medium", result: "Reply tray springs in" },
  { action: "Long-press menu", spring: "response: 0.4", damping: "0.8", haptic: ".heavy", result: "Context menu blooms from press point" },
  { action: "Burn countdown", spring: "response: 0.2", damping: "1.0", haptic: ".soft (pulse)", result: "Timer ring pulses with urgency" },
];

export function VizMotionFlow() {
  return (
    <div className="space-y-4">
      {/* Flow diagram */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap">
        {nodes.map((node, i) => {
          const style = typeStyles[node.type];
          return (
            <div key={node.id} className="flex items-center gap-2">
              <div
                className="rounded-lg px-3 py-2 text-left"
                style={{
                  background: style.bg,
                  border: `1px solid ${style.border}`,
                  minWidth: "120px",
                }}
              >
                <p className="text-xs font-semibold" style={{ color: style.text }}>{node.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{node.sublabel}</p>
              </div>
              {i < nodes.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 hidden sm:block" />
              )}
            </div>
          );
        })}
      </div>

      {/* Spring parameter table */}
      <div
        className="rounded-lg overflow-hidden"
        style={{ border: "1px solid color-mix(in oklch, var(--primary) 10%, transparent)" }}
      >
        <div
          className="grid grid-cols-4 px-3 py-2 text-[10px] uppercase tracking-widest text-muted-foreground font-mono gap-2"
          style={{ background: "oklch(1 0 0 / 0.03)", borderBottom: "1px solid color-mix(in oklch, var(--primary) 10%, transparent)" }}
        >
          <span>Action</span>
          <span>response</span>
          <span className="hidden sm:block">damping</span>
          <span>Result</span>
        </div>
        {interactionExamples.map((ex) => (
          <div
            key={ex.action}
            className="grid grid-cols-4 px-3 py-2.5 gap-2 items-center"
            style={{ borderBottom: "1px solid oklch(1 0 0 / 0.04)" }}
          >
            <span className="text-xs text-foreground/80 font-medium">{ex.action}</span>
            <span
              className="text-[10px] font-mono px-1.5 py-0.5 rounded w-fit"
              style={{
                background: "color-mix(in oklch, var(--primary) 8%, transparent)",
                color: "var(--primary)",
              }}
            >
              {ex.spring}
            </span>
            <span className="hidden sm:block text-[10px] font-mono text-muted-foreground">{ex.damping}</span>
            <span className="text-[10px] text-muted-foreground leading-snug">{ex.result}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
