# Domain Knowledge Brief — Consumer Incognito / Ephemeral Messaging App (iOS)

## Sub-Domain Classification

Consumer-facing incognito messaging app for iOS — positioned at the intersection of ephemeral/disappearing messaging (Snapchat, Telegram Secret Chats) and privacy-first communication (Signal, Confide). Target user: Gen Z and Millennial, 16–35, heavy smartphone users. Brand tone: "fun and exciting" with viral/social mechanics. Distribution: App Store, word-of-mouth growth loop.

---

## Job Analyst Vocabulary — Confirmed and Extended

The core vocabulary distinguishing Swave from generic chat apps centers on ephemeral concepts: messages that vanish, modes that hide identity, and alerts when privacy is violated. These are the terms practitioners in this space use — not generic "sent/delivered/read."

### Confirmed Primary Entity Names

- Primary record type: **thread** or **chat** (not "conversation" — messaging apps use "thread" for DMs, "group" for multi-person)
- Disappearing content: **snap**, **flame**, **burn** (Wickr used "burn"; Snapchat popularized "snap"; Dust used "blast" for broadcast)
- Privacy mode: **Incognito Mode** (exact term, mirrors browser incognito for instant comprehension)
- Self-destructing unit: **Swav** (brand-specific term for a single incognito message — consistent with Swave branding)
- People roles: **sender**, **recipient**, **contact** (not "user" in UI-facing labels)
- Groups: **group chat** or **room** (Signal uses "group", Telegram uses "group chat")
- Content types: **message**, **voice note**, **photo**, **video clip**, **reaction**

### Expanded KPI Vocabulary

| KPI Name | What It Measures | Typical Format |
|---|---|---|
| Daily Active Users (DAU) | Unique users who open app in a day | Count |
| Monthly Active Users (MAU) | Unique users active in a month | Count |
| DAU/MAU Ratio (Stickiness) | % of monthly users active daily | % (50%+ is excellent for messaging) |
| D1 / D7 / D30 Retention | Users who return after 1/7/30 days | % |
| Messages Sent / Day | Daily message volume | Count |
| Threads Created / Day | New conversations started per day | Count |
| Avg. Session Length | Time per app open | Minutes/seconds |
| Viral Coefficient (K-factor) | New users generated per existing user | Decimal (>1.0 = viral growth) |
| Invite Acceptance Rate | Sent invites → installs | % |
| Screenshot Alerts Triggered | Privacy violations detected per day | Count |
| Burn Rate Engagement | % of messages with timer set | % |
| Incognito Mode Activation Rate | % of threads using incognito | % |
| Push Notification CTR | Notification open rate | % (avg 4-8% for messaging) |

### Status Label Vocabulary

These go directly into data tables, badges, and filter dropdowns:

**Message States:**
- Sending (in-flight, animated)
- Sent (delivered to server)
- Delivered (reached recipient device)
- Read (recipient opened)
- Burned / Expired (disappeared per timer)
- Screenshot Detected (privacy alert)
- Recalled (sender unsent before read)

**Thread / Contact States:**
- Active (recent activity)
- Incognito (privacy mode on)
- Muted
- Archived
- Blocked

**Burn Timer States:**
- No timer
- Burns in 5s / 30s / 1m / 10m / 1h / 24h
- Burns on read
- Burned (expired, content deleted)

### Workflow and Action Vocabulary

Verbs used in this domain — button labels, action menu items, empty state messages:

**Primary actions:** send, react, reply, unsend, set timer, burn, share, invite
**Secondary actions:** mute, archive, block, report, clear history, screenshot-alert, recall
**Incognito-specific:** go incognito, exit incognito, hide thread, reveal, enable burn timer
**Social/viral actions:** invite friends, share invite link, refer, unlock feature

### Sidebar / Bottom Tab Navigation Candidates

This is a mobile app (iOS). Navigation is bottom tab bar, not sidebar. Standard iOS messaging app bottom tabs:

- **Chats** — thread list (primary home screen; Signal uses "Chats", iMessage uses "Messages")
- **Incognito** — dedicated incognito mode thread list (Swave's differentiator)
- **Discover** — find new contacts, trending, viral features (growth mechanic)
- **Activity** — notifications, screenshot alerts, read receipts feed
- **Profile** / **Settings** — privacy settings, burn timer defaults, avatar

---

## Design Context — Visual Language of This Industry

### What "Premium" Looks Like in This Domain

Consumer messaging apps aimed at Gen Z and Millennials live in two distinct visual camps. The **privacy-serious** camp (Signal, Wickr) uses minimal, near-monochrome interfaces — low visual noise, small typography, dark backgrounds. The **fun-social** camp (Snapchat, Telegram with themes, BeReal) uses vibrant colors, high contrast, playful gradients, and bold typographic moments. Swave is explicitly positioned as "fun and exciting" with "strong viral potential," which places it firmly in the social camp — not the clinical privacy-tool camp.

The gold standard for this sub-category is Snapchat's camera-first, high-energy aesthetic and Telegram's themeable, personality-forward messaging. Premium in this space means: bold primary color (often a signature gradient), dark or very dark background, clean chat bubble design, and small but delightful micro-interactions (haptic pulses, bubble animations, fire/lock icons for privacy states). The incognito/burn mechanics are surfaced as features to be proud of — flame icons, countdown timers, glowing badges — not hidden away.

iOS-native conventions are non-negotiable: rounded corners (large radius ~20px), frosted glass / blur effects on sheets and overlays, momentum scrolling, swipe-to-reply on messages, long-press context menus (not tap menus), and haptic feedback signals. The safe area insets, notch-aware layouts, and Dynamic Island integration are expected at this quality tier.

### Real-World Apps Clients Would Recognize as "Premium"

1. **Signal** — Privacy-first messaging that practitioners consider the gold standard for end-to-end encryption. Visual patterns: minimal conversation list, subtle delivery checkmarks, disappearing message timer as a small flame/clock icon, no ads, no clutter. Dark and light modes both clean. Signal's UI signals seriousness and trust. Swave can borrow the trust signals while breaking from Signal's austere visual personality.

2. **Snapchat** — The originator of ephemeral messaging. Visual patterns: camera-first (camera is the default home screen), bold yellow brand color, Bitmoji avatars, snappy transitions, the iconic ghost brand mark. "Streaks" (consecutive days of messaging) are a key viral engagement mechanic. Snap score. Chat disappears on open by default. This is the aesthetic language Gen Z has internalized as "fun ephemeral messaging."

3. **Telegram** (with Secret Chats + Themes) — The power-user ephemeral messaging app. Secret Chats have a padlock icon in the thread list, a dedicated self-destruct timer interface (clock icon → time picker), and screenshot detection. Telegram's theme system is beloved. Channel and group mechanics enable viral spreading. Practitioners recognize Telegram's "Secret Chat" mode as the most complete iOS implementation of incognito messaging prior to Swave.

### Aesthetic Validation

- **Expected aesthetic**: Dark Premium or SaaS Modern with a bold, identity-driven accent color
- **Domain validation**: Consumer messaging apps in the "fun + privacy" category use dark or very deep backgrounds with a vivid signature color — Snapchat yellow, Telegram blue/purple gradients, Signal's minimal accent blue. The "dark premium" aesthetic fits well but should lean more playful than corporate-sleek. Bold gradients on the brand accent (purple/violet/electric blue → works; flat corporate navy → wrong signal).
- **Adjustment**: Lean into gradient treatment on the primary brand color. A deep background (#0D0D1A or similar) with a vivid violet/indigo gradient accent matches the "incognito" psychological metaphor (darkness, privacy, glow-in-the-dark feel). This is distinct from clinical dark tools like Datadog — it should feel exciting, not ominous.
- **Color nuance**: The "incognito" metaphor maps well to deep blue-violet dark backgrounds with glowing purple or electric teal accents. Confide uses near-black + electric blue. Wickr uses dark + green. Signal uses white + indigo. For Swave (fun + viral), deep dark + vivid violet/magenta gradient is the strongest signal.

### Format Validation

- **Expected format**: `mobile-app-preview` (phone frame with screen navigation)
- **Domain validation**: Confirmed — this is an iOS consumer app currently on the App Store. The demo must be a phone mockup. Any other format (dashboard, landing page) would completely miss the mark. Practitioners want to see what the app looks like on a phone screen.
- **Format-specific notes for the Demo Screen Builder**:
  - Essential screens: (1) Chat List / Home, (2) Active Chat Thread, (3) Incognito Mode view, (4) Contact / Profile screen
  - Bottom tab bar is essential: iOS convention, 4-5 tabs, active tab uses brand accent color
  - Reference apps: Snapchat (energy/fun), Signal (trust/privacy), Telegram (power features)
  - Chat bubbles: sender bubbles right-aligned (brand color or gradient), received bubbles left-aligned (dark gray)
  - Burn timer displayed as a small countdown ring or flame icon overlaid on message bubble
  - Incognito mode: full-screen tint shift (e.g., subtle purple overlay or dark-mode-deepen), padlock badge on thread, ghost/masked avatar
  - Screenshot alert: non-dismissible full-screen banner (red or amber, pulsing) with "Screenshot detected" + sender name

### Density and Layout Expectations

**Density: Standard to Spacious** — consumer messaging apps are not dense. iMessage, Snapchat, Signal all use generous vertical spacing between messages, large touch targets for avatars, and readable font sizes (minimum 14pt for message content, 16pt preferred). This is not a data-dense ops tool.

**View pattern**: List-heavy for the chat list (conversation preview rows), but card-heavy within individual chats (message bubbles as cards with shadows and radius). The chat list uses single-line previews with avatar, contact name, last message snippet, and timestamp. The burn timer icon or incognito badge sits inline with the thread row.

---

## Entity Names (10+ realistic names)

### Contact Names (diverse, modern — Gen Z/Millennial demographic)

1. Zara Okonkwo
2. Liam Nakashima
3. Mia Castellano
4. Dev Sharma
5. Ava Thornton
6. Marcus Delacroix
7. Sofia Bergstrom
8. Kai Reyes
9. Priya Anand
10. Jordan Blake
11. Nora Fitzgerald
12. Tyler Osei

### Message Content Examples (casual, fun, matching "fun and exciting" brand)

Thread previews (last message):
- "did you see what happened at the party last night??"
- "this is so much better than texting normally 🔥"
- "no way they can screenshot this lmao"
- "ok I'll go incognito for this one"
- "your burn timer just went off for that last message"
- "omg the snap already burned"
- "set it to 10 seconds — live on the edge"
- "I love that nobody can screenshot this"
- "ok real talk, totally off record..."
- "the double tap thing is so satisfying"

### Conversation / Thread Names (groups)

1. The Usual Suspects
2. Friday Night Plans
3. Don't Screenshot This
4. Top Secret (Incognito)
5. Weekend Crew
6. No Cap Zone
7. Burn After Reading

---

## Realistic Metric Ranges

| Metric | Low | Typical | High | Notes |
|--------|-----|---------|------|-------|
| DAU/MAU Ratio | 20% | 35-45% | 60%+ | Messaging apps are stickier than most; WhatsApp ~50%, Snapchat ~50-60% |
| D1 Retention | 20% | 30-40% | 55%+ | Industry benchmark: 20% is the floor for social apps |
| D7 Retention | 8% | 15-25% | 35%+ | Social apps: 10-15% is average, 25% is strong |
| D30 Retention | 4% | 10-18% | 28%+ | Messaging apps retain better than non-social apps |
| Messages Sent / DAU | 8 | 20-35 | 80+ | WhatsApp avg ~30/day/user; Snapchat higher for stories |
| Session Length | 1.5 min | 4-8 min | 15+ min | Messaging sessions: shorter but more frequent than social feed |
| Sessions / Day | 2 | 5-8 | 15+ | Messaging apps: multiple short sessions vs. one long feed scroll |
| Viral Coefficient (K) | 0.1 | 0.3-0.8 | 1.5+ | K>1 = viral; most apps are 0.2-0.5; Snapchat early days: ~1.2 |
| Invite Acceptance Rate | 5% | 15-25% | 45% | Two-sided incentives push acceptance up to 25-30% |
| Screenshot Alert Rate | 0.5% | 2-5% | 15% | % of delivered messages that trigger screenshot detection |
| Incognito Activation Rate | 5% | 20-35% | 60% | In a privacy-positioned app, this should be the headline metric |
| New Users / Day | 50 | 200-1,000 | 10,000+ | Pre-viral growth vs. post-viral; context-dependent |
| Burn Timer Usage Rate | 10% | 30-50% | 80% | % of sent messages with an expiration timer set |

---

## Industry Terminology Glossary

| Term | Definition | Usage Context |
|------|-----------|---------------|
| Ephemeral messaging | Messages that automatically delete after a set time or event | Core product category descriptor |
| Burn timer | A countdown timer set by the sender; message self-destructs when it hits zero | Feature name in UI settings |
| Burn-on-read (BOR) | Timer starts when the recipient opens the message, not when it's sent | Timer variant — most "exciting" because sender controls read lifespan |
| End-to-end encryption (E2EE) | Messages encrypted locally; only sender/recipient can decrypt; no server access | Trust/marketing language; small lock icon in UI |
| Screenshot detection | App detects when recipient captures the screen; sender is notified | Privacy feature; triggers full-screen alert |
| Unsend / Recall | Sender removes a message from both devices before recipient reads it | Action in message long-press menu |
| Incognito mode | Conversation mode where identity is masked, no typing indicators, no read receipts, no screenshots | Swave's differentiator; the "incognito" mental model from browser privacy mode |
| Disappearing messages | Auto-delete after timer elapses; both devices purge the content | Feature descriptor |
| Read receipt | Confirmation that recipient has opened/seen the message | Status indicator ("Read 2:34 PM") |
| Delivery receipt | Confirmation message reached recipient's device | Status indicator (double checkmark) |
| Typing indicator | "..." animation showing the other person is composing | Presence signal in chat header |
| Presence / Last seen | Shows when a contact was last active in the app | Contact info, thread row metadata |
| Thread | A single conversation channel (1:1 or group) | Primary data entity |
| K-factor / Viral coefficient | Measure of organic growth from existing users inviting new users | Growth/analytics term; K>1 means viral spread |
| DAU/MAU stickiness | Ratio of daily active users to monthly; high ratio = habitual use | Core health metric |
| Push notification opt-in rate | % of users who allow notification permission on iOS | Install metric; ~60-70% iOS opt-in rate typical for messaging |
| ScreenShield | Confide's patented technology for preventing screenshots (competitor tech) | Competitor reference |
| Secret Chat | Telegram's term for E2EE 1:1 conversations with self-destruct timers | Competitor feature name |
| Vanish Mode | Instagram/Messenger's term for ephemeral chat | Competitor feature name |
| Streak | Consecutive days two users exchange messages (Snapchat mechanic) | Engagement/gamification feature |

---

## Common Workflows

### Workflow 1: Sending an Incognito Burn Message

1. User opens app to Chat List (home screen)
2. Taps "+" to start new thread OR opens existing thread
3. Taps incognito toggle (ghost/mask icon in compose bar) to enter incognito mode — thread UI shifts to incognito visual state
4. Types message in compose field
5. Taps burn timer icon — selects expiration: "Burn on read / 5s / 30s / 1m / 10m / 1h / 24h"
6. Taps send — message bubble shows countdown ring animation and timer badge
7. Recipient opens message — burn timer begins
8. Timer elapses — message bubble animates out (dissolve/flame effect), content replaced with "This message has burned"
9. Sender receives delivery confirmation: "Delivered · Burns in 30s"
10. After burn: thread still exists, but message content is gone permanently

### Workflow 2: Screenshot Alert Triggered

1. Sender sends incognito message to recipient
2. Recipient attempts to take screenshot on iOS (volume + lock button)
3. App detects screenshot via UIKit screenshot notification
4. Full-screen alert appears on sender's screen: "Zara Okonkwo took a screenshot"
5. Alert includes timestamp, thread name, and option to block contact
6. Message is flagged in thread with a "Screenshot" badge
7. Activity feed logs the event

### Workflow 3: Invite-and-Unlock Viral Loop

1. User encounters a locked premium feature (longer burn timers, custom incognito avatars, group incognito)
2. App surfaces "Invite 2 friends to unlock" prompt
3. User taps "Send Invite" — share sheet appears with custom deep link
4. Share link sent via iMessage, Instagram DM, etc.
5. Friend installs app via invite link
6. Both sender and recipient get in-app reward notification
7. Unlocked feature activates immediately — satisfying payoff moment

---

## Common Edge Cases

1. **Screenshot in incognito thread** — message flagged with red "Screenshot Detected" badge; sender notified; high-priority UI alert state
2. **Burned message attempted re-access** — recipient tries to swipe back to burned message; blank state: "This message has burned" with flame icon; no content recoverable
3. **Timer expired but no read receipt** — message burns before recipient opens it; thread shows "Burned (unread)"; edge case for UX — did they miss the message?
4. **Recall after partial read** — sender recalls mid-burn; if recipient was reading, partial content may have been seen; "Recalled by sender" state replaces content
5. **Contact not on Swave** — invite state; thread shows "Not on Swave yet" + invite button; no messages can be sent until they join
6. **Network failure during burn countdown** — message in "Pending burn" state; retries on reconnect; edge case for data integrity
7. **Group incognito with one non-incognito member** — warning: "1 member is not in incognito mode — your messages may be visible to them"; yellow warning banner
8. **Zero messages / empty state** — new thread with no messages; empty state: ghost icon + "Say hi... or say nothing. No one will know." (on-brand copywriting)

---

## What Would Impress a Domain Expert

1. **Burn-on-read vs. burn-after-send distinction** — these are different timers with different UX implications. BOR starts when recipient opens the message; BAS starts at send time. Mixing them up signals you don't understand the domain. Swave's UI should surface both options distinctly.

2. **iOS screenshot detection API specifics** — Apple does not provide a reliable API to block screenshots (only detect them). True "screenshot-proof" messaging (like Confide's ScreenShield) requires revealing content word-by-word so a second camera cannot photograph the full message. A developer who knows this distinction will propose the right technical solution — not just `UIScreen.captureDidChangeNotification`.

3. **Ephemeral key exchange per message** — true ephemeral messaging (Signal Protocol, Wickr) generates a new encryption key pair for each message. This is called "forward secrecy" — even if a key is compromised, past messages cannot be decrypted. Mentioning forward secrecy in the demo's approach signals deep protocol knowledge.

4. **K-factor above 1.0 as a design target** — apps go viral when each user brings in more than one new user. The best viral mechanic for a messaging app is not a referral link but a feature that only works with another person — i.e., the product itself drives invitations. A developer who designs "invite to unlock" mechanics with this in mind (rather than a generic referral link) understands consumer app growth.

5. **iOS Human Interface Guidelines compliance for sensitive content** — when displaying sensitive messages, apps are expected to use `NSPrivacyCollectedDataTypes`, honor iOS Screen Time restrictions, and handle the Dynamic Island for timer states. An expert would also know that iMessage's integration with the Notification Summary can leak message previews unless `UNNotificationContent` is marked private.

---

## Common Systems & Tools Used

1. **Firebase** — Realtime database and push notifications; standard for consumer chat apps in early growth stages
2. **Signal Protocol / libsodium** — Open-source E2EE library; the industry-standard cryptographic protocol for secure messaging
3. **Stream Chat / Sendbird** — Managed chat infrastructure SDKs; common for apps that need fast shipping without building real-time messaging from scratch
4. **AWS Wickr (now retired consumer product)** — Enterprise ephemeral messaging reference; the technical architecture for zero-trust message storage
5. **Twilio** — SMS verification, phone number masking; common for user onboarding in messaging apps
6. **Amplitude / Mixpanel** — Mobile event analytics; primary tools for tracking DAU, retention, funnel drop-off
7. **Adjust / AppsFlyer** — Mobile attribution; tracks which invite/referral links drove installs (essential for viral loop measurement)
8. **RevenueCat** — In-app purchase management for iOS; handles subscription tiers (free / premium incognito features)
9. **Sentry** — Crash reporting; standard for consumer iOS apps
10. **TestFlight** — iOS beta distribution; used for invite-only beta rollout (creates organic viral buzz)

---

## Geographic / Cultural Considerations

- Primary market: English-speaking, US/global, iOS users
- Age demographic: Gen Z (16-24) and Millennials (25-35)
- Cultural note: the "incognito" mode mental model derives from Chrome's incognito window — universally understood by this demographic without explanation
- No specific regulatory constraints identified beyond: COPPA (under-13 restrictions), App Store age rating guidelines (17+ for apps with social features), and App Store privacy nutrition label requirements (required for all iOS apps with messaging features)
- US: no specific messaging regulation; EU: GDPR applies to any EU users (data deletion on burn aligns well with GDPR right-to-erasure)

---

## Data Architect Notes

- **Primary entity name**: `thread` for conversations, `message` for individual messages, `contact` for people
- **Burn timer field**: Use exact values `"none" | "burn_on_read" | "5s" | "30s" | "1m" | "10m" | "1h" | "24h"` — not generic "expiry" integers
- **Message status strings** (exact): `"sending"`, `"delivered"`, `"read"`, `"burned"`, `"recalled"`, `"screenshot_detected"`
- **Thread mode strings**: `"standard"` | `"incognito"` — not "private" or "secret"
- **Metric ranges for mock data**: DAU 1,200–4,500 for an early-stage app; messages/day 8,000–45,000; incognito activation rate 28-42%; burn timer usage 35-55%
- **Contact avatars**: use diverse name list above — Zara, Liam, Mia, Dev, Ava, Marcus, Sofia, Kai, Priya, Jordan, Nora, Tyler
- **Last message preview**: use casual, on-brand message strings from the content examples above
- **Timestamps**: relative ("just now", "2m ago", "45m ago", "Yesterday", "Mon") — not ISO dates in the UI
- **Edge cases to include**: at least 2 threads in "screenshot_detected" state; 1 contact "not on Swave yet"; 1 burned (unread) message; 1 recalled message; 1 group with 7+ members

## Layout Builder Notes

- **Density**: Spacious — consumer messaging apps use generous touch targets (min 44px), large avatars, readable font sizes. NOT compact.
- **Format**: `mobile-app-preview` — phone frame required
- **Bottom tab bar** (not sidebar): 4-5 tabs with icons only or icon + label; active tab uses brand accent gradient
- **Radius**: Large (16-20px for cards/sheets, 20-24px for bottom sheets, 18-22px for message bubbles) — iOS convention uses very rounded corners
- **Background**: Near-black (#0A0A14 or similar dark blue-black) with vivid violet/purple gradient accent — matches "incognito" metaphor and "fun/exciting" brand energy
- **Thread list row**: Avatar (40-44px circle, colored ring for active/incognito), contact name, last message preview, timestamp, optional burn timer badge or screenshot alert badge
- **Status badges**: color-coded — green for delivered/active, amber for pending/muted, red for screenshot alert, purple/violet for incognito mode, gray for burned/expired
- **Incognito visual language**: When incognito mode is active, the UI should shift — ghost icon replaces avatar, subtle purple tint on thread background, padlock or mask icon badge on thread row header
- **Sidebar width**: Not applicable (mobile app, bottom tab bar)

## Demo Screen Builder Notes

- **Primary hero metric** (for any stats screen): Total Burn Messages Sent (cumulative) — this is the most distinctive Swave-specific metric; secondary: Incognito Sessions Today, Active Threads
- **Most important screen**: The Active Chat Thread — this is where the product's differentiation lives. Show a live-looking conversation with burn timer countdown rings on messages, incognito mode badge in header, and a "Screenshot Detected" alert banner
- **Chart type for trend data**: Line chart for DAU/messages over time (7-day and 30-day views); keep chart y-axes unlabeled with only trend context in tooltips (consumer app analytics pattern)
- **Domain-specific panel that would impress**: A "Burn Activity Feed" — a real-time-looking list of recent events: "Message to Zara burned · 2m ago", "Screenshot alert from Kai · 14m ago", "New incognito thread started · 1h ago" — this is unique to ephemeral messaging and shows deep domain understanding
- **Essential screens for phone mockup**:
  1. **Chat List** — thread list with mix of standard and incognito threads, screenshot alert badge on one row, unread count badges, burn timer badges on active burn threads
  2. **Active Chat Thread** — conversation with burn timer countdown rings (small circular progress) on messages, incognito header state (ghost icon + padlock), compose bar with incognito toggle and burn timer picker
  3. **Incognito Mode Activated** — full-screen incognito entry animation or dedicated incognito thread list view with ghost aesthetic
  4. **Privacy Activity Feed** — screenshot alerts, burn events, recall events in chronological list
- **Mobile patterns to include**:
  - Swipe left on thread row to archive/delete (iOS standard)
  - Long-press on message bubble for context menu (Reply, React, Recall, Copy)
  - Bottom sheet for burn timer selection (scrollable picker or segmented options)
  - Haptic feedback indicator in UI copy (e.g., "Feel the burn — literally" in onboarding)
- **Screenshot alert state**: A non-dismissible red banner at top of chat screen: "Zara Okonkwo took a screenshot" with timestamp and "Block" action button — this is a high-drama moment the client will recognize instantly
