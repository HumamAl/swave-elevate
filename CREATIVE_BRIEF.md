# Creative Brief — Swave Elevate

**Project**: Swave Elevate — iOS Incognito Messaging App UI/UX Polish
**Date**: 2026-03-03
**Produced by**: Creative Director

---

## Creative Brief (JSON)

```json
{
  "aesthetic": "dark-premium",
  "demoFormat": "mobile-app-preview",
  "domain": "consumer messaging / privacy-tech",
  "mood": "playful, mysterious, luminous, intimate",
  "colorDirection": "deep violet-indigo gradient on near-black — oklch(0.55 0.22 285) as primary with luminous pink-purple accent oklch(0.72 0.20 320). Inspired by the incognito/anonymous app visual language (NGL, Yik Yak reboot) and Telegram's premium dark theme with gradient message bubbles. The violet-to-pink gradient captures 'fun and exciting' while deep backgrounds signal privacy and exclusivity.",
  "typography": "SF Pro Display influence via system font stack for Apple HIG fidelity — use Inter as Google Fonts stand-in for headings (geometric, clean, iOS-native feel). Geist Sans for body text. No monospace needed — this is a consumer chat app, not a data tool.",
  "radiusProfile": "soft (1.25rem cards, 2rem bubbles, 0.75rem inputs) — Telegram, Snapchat, and every premium iOS messaging app uses generous rounding. Sharp corners signal enterprise; rounded corners signal consumer warmth. The bubble radius should match iOS iMessage conventions (large pill shapes).",
  "densityProfile": "spacious — Signal, Telegram, and iMessage all use generous whitespace in conversation lists and chat threads. This is a consumer messaging app, not an ops dashboard. Breathing room between messages is a signal of premium quality.",
  "motionCharacter": "smooth (200-300ms ease-in-out) with spring physics on bubble appearance — Telegram and iMessage both use spring-style bounce on message send. Screen transitions: slide with subtle fade (200ms). Chat bubbles entering: scale from 0.9 + opacity 0 to 1.0 + opacity 1 (200ms spring). Gentle, alive, never jarring.",
  "formatRationale": "Swave is a native iOS messaging app built in SwiftUI. The deliverable is a phone-native experience. A centered iPhone 15 Pro frame immediately signals 'I understand your mobile app context' — far more specific than a dashboard or landing page. The phone frame shows conversation lists, chat threads, incognito mode toggles, and bottom tab navigation at actual mobile scale.",
  "competitorReferences": [
    "Telegram (Oct 2025 Liquid Glass update) — dark theme with frosted glass nav bars, translucent panels, gradient message bubbles. Premium consumer messaging reference. Their dark mode uses deep navy-black backgrounds (#17212B approximate) with blue accents and gradient bubbles.",
    "Signal — minimalist blue (#3A76F0) on white/near-black. Clean and trustworthy but intentionally sterile. Sets the floor for privacy app aesthetics — Swave should exceed this in visual richness.",
    "Snapchat dark mode — deep black backgrounds with yellow neon primary. Fun, energetic, self-destructing messages. Comparable 'fun and exciting' energy to Swave but less premium. Reference for playful tone, not for literal palette.",
    "Confide (secret messenger) — clean, theme-customizable privacy messenger. Self-destructing overlay messages. Functional redesign but lacks visual richness. Swave should feel more elevated than Confide.",
    "iOS iMessage — frosted glass composition views, bubble animations with spring physics, read receipt timing. The UX benchmark every iOS user compares against. Swave must feel native at this level."
  ],
  "brandSignals": "Swave's website (swave.app) redirects and returned 403 — no direct brand signal observation possible. However, the Bee Techy portfolio confirms: iOS SwiftUI native app for incognito messaging. Client vocabulary from job post: 'elevated gradients', 'depth', 'glass-style elements', 'fun and exciting', 'top-tier modern iOS app', 'not a copy of existing platforms', 'patented technology', 'viral potential'. These are strong creative directives, not vague preferences — the client has a specific vision of a dark, glassy, gradient-rich premium iOS aesthetic.",
  "creativeRationale": "Studied Telegram's October 2025 Liquid Glass redesign and iMessage's bubble physics — both premium iOS messaging apps use dark backgrounds with translucent frosted elements and gradient accents, which is exactly what Swave's client described ('glass-style elements, gradients, depth'). Signal and Confide represent the sterile end of privacy-app design: trustworthy but visually flat — the client explicitly rejected this direction with 'not a copy of existing platforms.' The violet-indigo primary with luminous pink accent captures the 'fun and exciting' + 'incognito' duality: deep darkness reads as privacy and mystery, while vivid gradient accents deliver the energy. Apple's iOS 26 Liquid Glass design language (adopted by Telegram in 2025) validates the frosted glass layering as the dominant premium iOS convention in 2026, making this the exact visual register that would make an iOS developer's eyes light up."
}
```

---

## Design Direction Notes for Downstream Agents

### Color System Intent

The palette has two layers:
1. **Dark foundation**: Near-black backgrounds `oklch(0.08 0.02 285)` — tinted slightly toward violet, not flat black. Creates depth.
2. **Gradient accent system**: Violet `oklch(0.55 0.22 285)` → Pink `oklch(0.72 0.20 320)` — the hero gradient used on CTAs, message bubbles (sent), and highlights.

Received message bubbles: dark glass surface `oklch(0.15 0.03 285)` with subtle border.
Sent message bubbles: violet-pink gradient.
Status badges: luminous violet glow effect (box-shadow with primary color at 30% opacity).

### Phone Screen Composition

Five screens to build inside the phone frame:

1. **Chats list** — conversation feed with avatar initials, gradient sent-message preview, online status dots, "incognito" badge on protected chats
2. **Chat thread** — glass-surface received bubbles, gradient sent bubbles, typing indicator with pulsing dots, read receipt glow
3. **New conversation / Incognito mode** — toggle to enter incognito mode with animated transition (blur overlay, lock icon appearing), contact picker
4. **Profile / Privacy settings** — self-destruct timer selector, ghost mode toggle, notification privacy controls
5. **Discover / Connections** — glassmorphic cards showing mutual connections, with gradient CTA to start incognito chat

### Bottom Tab Navigation (inside phone frame)

5 tabs matching incognito messaging patterns:
- **Chats** (speech bubble icon) — main screen
- **Incognito** (ghost/mask icon) — incognito mode threads
- **Discover** (compass icon) — connection suggestions
- **Notifications** (bell icon) — with badge count
- **Profile** (person icon) — settings and privacy

### Glass Element Implementation

Glassmorphism in this context means:
- `backdrop-filter: blur(20px)` on overlay panels
- Background: `oklch(0.15 0.03 285 / 0.7)` (70% opacity near-black with violet tint)
- Border: `1px solid oklch(0.55 0.22 285 / 0.2)` (subtle violet border)
- Inner glow: `box-shadow: inset 0 1px 0 oklch(1 0 0 / 0.1)` (top edge highlight)

### Interactivity Priorities

- **Screen navigator** with slide transitions between the 5 phone screens
- **Incognito mode toggle** — animated state change (background shifts darker, blur increases, lock icon scales in)
- **Message bubbles** — staggered entrance animation on chat thread load
- **Typing indicator** — three pulsing dots in glass bubble
- **Gradient avatar initials** — each contact gets a unique gradient angle from the primary palette
