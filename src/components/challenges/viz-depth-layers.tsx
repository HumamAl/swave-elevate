// No "use client" — pure display, no hooks

interface DepthLayer {
  level: number;
  name: string;
  swiftuiMaterial: string;
  blur: string;
  opacity: string;
  shadow: string;
  example: string;
}

const layers: DepthLayer[] = [
  {
    level: 0,
    name: "Background Canvas",
    swiftuiMaterial: ".background",
    blur: "none",
    opacity: "100%",
    shadow: "none",
    example: "App background, chat wallpaper",
  },
  {
    level: 1,
    name: "Glass Nav Bar",
    swiftuiMaterial: ".ultraThinMaterial",
    blur: "blur(20px)",
    opacity: "8% white",
    shadow: "0 1px 0 white/10",
    example: "Tab bar, navigation header",
  },
  {
    level: 2,
    name: "Content Panels",
    swiftuiMaterial: ".thinMaterial",
    blur: "blur(12px)",
    opacity: "12% white",
    shadow: "0 2px 8px black/30",
    example: "Thread list rows, message bubbles",
  },
  {
    level: 3,
    name: "Floating Elements",
    swiftuiMaterial: ".regularMaterial",
    blur: "blur(24px)",
    opacity: "18% white",
    shadow: "0 4px 16px black/40",
    example: "Burn timer overlay, action sheet",
  },
  {
    level: 4,
    name: "Modal / Sheet",
    swiftuiMaterial: ".thickMaterial",
    blur: "blur(32px)",
    opacity: "24% white",
    shadow: "0 20px 40px black/60",
    example: "Incognito mode sheet, privacy settings",
  },
];

export function VizDepthLayers() {
  return (
    <div className="space-y-1.5">
      {/* Layer header */}
      <div className="grid grid-cols-[2rem_1fr_auto] md:grid-cols-[2rem_1fr_1fr_auto] gap-2 px-3 pb-1">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">#</span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Layer</span>
        <span className="hidden md:block text-[10px] uppercase tracking-widest text-muted-foreground font-mono">SwiftUI API</span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono text-right">Example</span>
      </div>

      {layers.map((layer) => {
        const opacity = layer.level / (layers.length - 1);
        const glowIntensity = 0.03 + opacity * 0.08;

        return (
          <div
            key={layer.level}
            className="grid grid-cols-[2rem_1fr_auto] md:grid-cols-[2rem_1fr_1fr_auto] gap-2 items-center px-3 py-2.5 rounded-lg transition-colors"
            style={{
              background: `oklch(1 0 0 / ${0.04 + opacity * 0.06})`,
              border: `1px solid oklch(1 0 0 / ${0.06 + opacity * 0.06})`,
              boxShadow: layer.level > 0
                ? `0 0 0 1px oklch(0.55 0.22 285 / ${glowIntensity}), inset 0 1px 0 oklch(1 0 0 / 0.06)`
                : "none",
            }}
          >
            {/* Level badge */}
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold font-mono"
              style={{
                background: "var(--gradient-primary)",
                opacity: 0.5 + opacity * 0.5,
              }}
            >
              {layer.level}
            </span>

            {/* Name */}
            <div>
              <p className="text-xs font-semibold text-foreground/90">{layer.name}</p>
              <p className="text-[10px] text-muted-foreground hidden sm:block">{layer.blur} · {layer.opacity}</p>
            </div>

            {/* SwiftUI material */}
            <span
              className="hidden md:block text-[10px] font-mono px-2 py-0.5 rounded"
              style={{
                background: "color-mix(in oklch, var(--primary) 10%, transparent)",
                color: "var(--primary)",
              }}
            >
              {layer.swiftuiMaterial}
            </span>

            {/* Example */}
            <p className="text-[10px] text-muted-foreground text-right max-w-[120px] truncate">{layer.example}</p>
          </div>
        );
      })}

      <p className="text-[10px] text-muted-foreground text-center pt-1">
        Each layer maps directly to a SwiftUI material API — no re-interpretation needed
      </p>
    </div>
  );
}
