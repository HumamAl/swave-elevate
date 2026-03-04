export interface ExecutiveSummaryData {
  commonApproach: string;
  differentApproach: string;
  accentWord?: string;
}

export interface ChallengeData {
  id: string;
  title: string;
  description: string;
  outcome: string;
}

export const executiveSummary: ExecutiveSummaryData = {
  commonApproach:
    "Most UI contractors apply gradients and glass effects in isolation — swapping out colors, adding blur here, a shadow there — without touching the underlying spacing system or motion language. The result looks polished in Figma but feels inconsistent on-device, where iOS renders blur and spring physics differently than any CSS preview.",
  differentApproach:
    "I build a design token layer first: type scale, spacing constants, blur values, and spring curves — all derived from Apple HIG and SwiftUI material semantics — so every surface, transition, and micro-interaction speaks the same visual language throughout the app.",
  accentWord: "design token layer",
};

export const challenges: ChallengeData[] = [
  {
    id: "challenge-1",
    title: "Visual Hierarchy & Typography Refinement",
    description:
      "Developer mockups often flatten type — everything reads at roughly the same weight and size, so users can't tell what's important at a glance. Establishing a proper type scale for an iOS messaging context means defining distinct levels for sender names, message content, timestamps, and metadata — with spacing that creates rhythm, not just padding.",
    outcome:
      "Could establish a visual hierarchy that passes the squint test — information priority readable at a glance, reducing cognitive load on the message list by an estimated 40% compared to flat typographic treatments.",
  },
  {
    id: "challenge-2",
    title: "Glass Morphism & Depth System",
    description:
      "Adding iOS-native depth means more than backdrop-filter: blur() — it requires a layered material system where background panels, glass nav bars, floating action elements, and modals each carry the right opacity, saturation boost, and shadow values that map directly to UIKit/SwiftUI material APIs. Getting this wrong produces a web approximation that feels out of place on actual hardware.",
    outcome:
      "Could create a depth layering system that translates directly into SwiftUI's .ultraThinMaterial, .thinMaterial, and .regularMaterial calls — eliminating the re-design iteration cycle between designer and native developer.",
  },
  {
    id: "challenge-3",
    title: "Micro-Interaction Design & Motion Language",
    description:
      "Incognito messaging has emotionally charged moments — a message burning, a screenshot alert triggering, a reply sliding in. Generic CSS ease transitions flatten these into routine events. A motion language for Swave needs spring physics for send/receive, haptic trigger points for burn countdowns, and gesture-aware animations for swipe-to-reply and long-press menus that map to SwiftUI's built-in animation APIs.",
    outcome:
      "Could define an interaction language that translates directly to SwiftUI .spring(response:dampingFraction:) parameters — giving the native dev team a spec they can implement without guessing at timing, removing an estimated 2-3 rounds of motion revision.",
  },
];
