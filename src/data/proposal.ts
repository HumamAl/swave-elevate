import type { Profile, PortfolioProject } from "@/lib/types";

export const profile: Profile = {
  name: "Humam",
  tagline:
    "I polish React prototypes into premium mobile interfaces — the kind that feel native the moment you touch them.",
  bio: "I build MVPs and production apps across 15+ industries. For Swave specifically, the demo in Tab 1 is my read of what a polished Swave Elevate could feel like — glassmorphism surfaces, spring-physics interactions, and a design token system that maps directly to SwiftUI values.",
  approach: [
    {
      title: "Audit",
      description:
        "Review every screen in the React prototype. Map spacing inconsistencies, mismatched typography scales, and interaction gaps before writing a single line of new code. One pass here saves ten rounds of revision later.",
    },
    {
      title: "Token System",
      description:
        "Define a design token system — colors, spacing, radius, typography, motion curves — documented with SwiftUI-compatible values. No more guessing what '16px rounded' translates to on device.",
    },
    {
      title: "Polish Pass",
      description:
        "Apply refinements screen by screen. Glassmorphism surfaces where they earn their complexity. Gradients that add depth, not noise. Micro-interactions that make the app feel alive without demanding attention.",
    },
    {
      title: "Handoff",
      description:
        "Annotated specs with spring curves, haptic trigger points, and material references. Everything your iOS engineer needs to implement, nothing they'd have to interpret.",
    },
  ],
  skillCategories: [
    {
      name: "UI Design",
      skills: ["Figma", "CSS Architecture", "Design Systems", "Typography"],
    },
    {
      name: "iOS Knowledge",
      skills: [
        "Apple HIG",
        "SwiftUI Conventions",
        "iOS Patterns",
        "Dynamic Island",
      ],
    },
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "CSS Animations"],
    },
    {
      name: "Motion",
      skills: [
        "Spring Physics",
        "Haptic Design",
        "Gesture Systems",
        "Lottie",
      ],
    },
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "outerbloom",
    title: "Outerbloom — AI Social Coordination",
    description:
      "Consumer app with real-time matching, social coordination, and event planning. The UI required the same layered depth and luminous palette Swave uses — dark canvas, gradient accents, tactile interactions.",
    tech: ["Next.js", "TypeScript", "Tailwind", "AI pipeline"],
    outcome:
      "AI-driven matching pipeline connecting users, schedules, and venues — reducing manual coordination overhead",
    relevance:
      "Closest aesthetic match to Swave: dark UI, gradient-lit elements, consumer-facing social experience.",
    liveUrl: "https://outerbloom.vercel.app",
  },
  {
    id: "meditation-audio",
    title: "Meditation Audio App",
    description:
      "Personalized meditation and affirmation app with script generation, TTS playback, ambient sound mixer, and session library. Built the full playback UI from scratch — player controls, waveform display, session cards.",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    outcome:
      "End-to-end audio pipeline — from AI-generated script to mixed ambient playback with a saved session library",
    relevance:
      "Demonstrates consumer mobile app UI craft: bottom nav, card stacks, smooth transitions between states.",
  },
  {
    id: "sports-vision",
    title: "Sports Vision MVP",
    description:
      "AR-style sports object detection demo simulating iOS LiDAR scanning. Designed the scan UI — detection overlays, confidence rings, real-time accuracy bars — in a browser-first format that mirrors how iOS apps present spatial data.",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Recharts"],
    outcome:
      "AR-style scan UI with detection overlays, confidence scores, and accuracy visualization — delivered as a browser-based MVP",
    relevance:
      "Shows comfort designing for iOS interaction patterns: scan states, depth overlays, real-time feedback.",
  },
];
