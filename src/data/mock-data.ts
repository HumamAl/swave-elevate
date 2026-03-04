import type {
  Contact,
  Thread,
  Message,
  ActivityEvent,
  AppMetrics,
  MessagingTrendPoint,
  ModeBreakdownPoint,
  BurnTimerDistPoint,
} from "@/lib/types";

// ─── Contacts ────────────────────────────────────────────────────────────────
// 12 contacts from domain brief. Edge cases: blocked (Jordan), not on Swave (Tyler).

export const contacts: Contact[] = [
  { id: "cnt_zar01", name: "Zara Okonkwo",     initials: "ZO", avatarGradient: "violet-pink",  lastSeen: "2026-03-03T14:22:00Z", isOnline: true,  isBlocked: false },
  { id: "cnt_lia02", name: "Liam Nakashima",   initials: "LN", avatarGradient: "blue-cyan",    lastSeen: "2026-03-03T13:47:00Z", isOnline: true,  isBlocked: false },
  { id: "cnt_mia03", name: "Mia Castellano",   initials: "MC", avatarGradient: "pink-purple",  lastSeen: "2026-03-03T11:05:00Z", isOnline: false, isBlocked: false },
  { id: "cnt_dev04", name: "Dev Sharma",        initials: "DS", avatarGradient: "indigo-blue",  lastSeen: "2026-03-03T09:33:00Z", isOnline: false, isBlocked: false },
  { id: "cnt_ava05", name: "Ava Thornton",      initials: "AT", avatarGradient: "orange-red",   lastSeen: "2026-03-02T22:14:00Z", isOnline: false, isBlocked: false },
  { id: "cnt_mar06", name: "Marcus Delacroix",  initials: "MD", avatarGradient: "teal-green",   lastSeen: "2026-03-03T14:01:00Z", isOnline: true,  isBlocked: false },
  { id: "cnt_sof07", name: "Sofia Bergstrom",   initials: "SB", avatarGradient: "green-teal",   lastSeen: "2026-03-03T12:58:00Z", isOnline: true,  isBlocked: false },
  { id: "cnt_kai08", name: "Kai Reyes",         initials: "KR", avatarGradient: "yellow-orange", lastSeen: "2026-03-01T18:40:00Z", isOnline: false, isBlocked: false },
  { id: "cnt_pri09", name: "Priya Anand",       initials: "PA", avatarGradient: "violet-pink",  lastSeen: "2026-03-03T08:17:00Z", isOnline: false, isBlocked: false },
  // Edge case: blocked contact
  { id: "cnt_jor10", name: "Jordan Blake",      initials: "JB", avatarGradient: "blue-cyan",    lastSeen: "2026-02-28T21:09:00Z", isOnline: false, isBlocked: true },
  { id: "cnt_nor11", name: "Nora Fitzgerald",   initials: "NF", avatarGradient: "pink-purple",  lastSeen: "2026-03-03T07:44:00Z", isOnline: false, isBlocked: false },
  // Edge case: not on Swave yet — invite state
  { id: "cnt_tyl12", name: "Tyler Osei",        initials: "TO", avatarGradient: "orange-red",   lastSeen: "2026-01-01T00:00:00Z", isOnline: false, isBlocked: false, notOnSwave: true },
];

// The current user's ID (outgoing messages)
export const CURRENT_USER_ID = "cnt_me_00";

// ─── Threads ─────────────────────────────────────────────────────────────────
// 9 threads: mix of standard/incognito, 1:1/group, pinned, muted, screenshot-detected, archived.

export const threads: Thread[] = [
  {
    id: "thr_a1b2c",
    participantIds: ["cnt_me_00", "cnt_zar01"],
    displayName: "Zara Okonkwo",
    lastMessage: { content: "omg the snap already burned 🔥", timestamp: "just now", senderId: "cnt_zar01", status: "read" },
    unreadCount: 0,
    mode: "incognito",
    isMuted: false,
    isArchived: false,
    isPinned: true,
    screenshotDetected: true, // edge case: screenshot taken in this thread
    defaultBurnTimer: "burn_on_read",
    isGroup: false,
    createdAt: "2026-02-14T18:30:00Z",
    updatedAt: "2026-03-03T14:22:31Z",
  },
  {
    id: "thr_d3e4f",
    participantIds: ["cnt_me_00", "cnt_lia02"],
    displayName: "Liam Nakashima",
    lastMessage: { content: "set it to 10 seconds — live on the edge", timestamp: "2m ago", senderId: "cnt_me_00", status: "delivered" },
    unreadCount: 0,
    mode: "incognito",
    isMuted: false,
    isArchived: false,
    isPinned: true,
    screenshotDetected: false,
    defaultBurnTimer: "10m",
    isGroup: false,
    createdAt: "2026-02-20T10:14:00Z",
    updatedAt: "2026-03-03T14:20:11Z",
  },
  {
    id: "thr_g5h6i",
    participantIds: ["cnt_me_00", "cnt_mia03", "cnt_mar06", "cnt_sof07", "cnt_ava05", "cnt_kai08", "cnt_pri09", "cnt_dev04"],
    displayName: "The Usual Suspects",
    lastMessage: { content: "did you see what happened at the party last night??", timestamp: "14m ago", senderId: "cnt_mia03", status: "read" },
    unreadCount: 3,
    mode: "standard",
    isMuted: false,
    isArchived: false,
    isPinned: false,
    screenshotDetected: false,
    defaultBurnTimer: "none",
    isGroup: true,
    createdAt: "2026-01-08T20:00:00Z",
    updatedAt: "2026-03-03T14:08:47Z",
  },
  {
    id: "thr_j7k8l",
    participantIds: ["cnt_me_00", "cnt_dev04"],
    displayName: "Dev Sharma",
    lastMessage: { content: "ok real talk, totally off record...", timestamp: "45m ago", senderId: "cnt_dev04", status: "delivered" },
    unreadCount: 1,
    mode: "incognito",
    isMuted: false,
    isArchived: false,
    isPinned: false,
    screenshotDetected: false,
    defaultBurnTimer: "1h",
    isGroup: false,
    createdAt: "2026-02-27T16:22:00Z",
    updatedAt: "2026-03-03T13:37:14Z",
  },
  {
    id: "thr_m9n0o",
    participantIds: ["cnt_me_00", "cnt_ava05", "cnt_nor11", "cnt_lia02", "cnt_pri09"],
    displayName: "Friday Night Plans",
    lastMessage: { content: "I love that nobody can screenshot this", timestamp: "1h ago", senderId: "cnt_nor11", status: "read" },
    unreadCount: 0,
    mode: "incognito",
    isMuted: false,
    isArchived: false,
    isPinned: false,
    screenshotDetected: false,
    defaultBurnTimer: "24h",
    isGroup: true,
    createdAt: "2026-02-25T11:00:00Z",
    updatedAt: "2026-03-03T13:22:09Z",
  },
  {
    id: "thr_p1q2r",
    participantIds: ["cnt_me_00", "cnt_mar06"],
    displayName: "Marcus Delacroix",
    lastMessage: { content: "this is so much better than texting normally 🔥", timestamp: "2h ago", senderId: "cnt_mar06", status: "read" },
    unreadCount: 0,
    mode: "standard",
    isMuted: false,
    isArchived: false,
    isPinned: false,
    screenshotDetected: false,
    defaultBurnTimer: "none",
    isGroup: false,
    createdAt: "2026-02-10T09:45:00Z",
    updatedAt: "2026-03-03T12:14:33Z",
  },
  {
    id: "thr_s3t4u",
    participantIds: ["cnt_me_00", "cnt_kai08"],
    displayName: "Kai Reyes",
    // Edge case: burned (unread) message — content null, status burned
    lastMessage: { content: null, timestamp: "Yesterday", senderId: "cnt_kai08", status: "burned" },
    unreadCount: 0,
    mode: "incognito",
    isMuted: true,
    isArchived: false,
    isPinned: false,
    screenshotDetected: true, // second screenshot_detected thread
    defaultBurnTimer: "30s",
    isGroup: false,
    createdAt: "2026-02-18T14:30:00Z",
    updatedAt: "2026-03-02T19:48:22Z",
  },
  {
    id: "thr_v5w6x",
    participantIds: ["cnt_me_00", "cnt_sof07", "cnt_mia03", "cnt_nor11"],
    displayName: "Don't Screenshot This",
    lastMessage: { content: "no way they can screenshot this lmao", timestamp: "Mon", senderId: "cnt_sof07", status: "read" },
    unreadCount: 0,
    mode: "incognito",
    isMuted: false,
    isArchived: false,
    isPinned: false,
    screenshotDetected: false,
    defaultBurnTimer: "1h",
    isGroup: true,
    createdAt: "2026-02-03T21:10:00Z",
    updatedAt: "2026-03-01T17:32:51Z",
  },
  {
    id: "thr_y7z8a",
    participantIds: ["cnt_me_00", "cnt_pri09"],
    displayName: "Priya Anand",
    lastMessage: { content: "ok I'll go incognito for this one", timestamp: "Mon", senderId: "cnt_pri09", status: "read" },
    unreadCount: 0,
    mode: "standard",
    isMuted: false,
    isArchived: true, // edge case: archived thread
    isPinned: false,
    screenshotDetected: false,
    defaultBurnTimer: "none",
    isGroup: false,
    createdAt: "2026-01-22T08:00:00Z",
    updatedAt: "2026-02-28T10:04:17Z",
  },
];

// ─── Active Thread Messages ───────────────────────────────────────────────────
// 20 messages in the Zara incognito thread (thr_a1b2c).
// Includes: burn timers, recalled message, burned (expired) message,
// screenshot_detected message, and active countdown in progress.

export const activeThreadMessages: Message[] = [
  { id: "msg_001aa", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "ok so I'm going incognito for this convo lol", timestamp: "Yesterday 7:14 PM", sentAt: "2026-03-02T19:14:00Z", status: "read", burnTimer: "none", isIncognito: true, reaction: null },
  { id: "msg_002bb", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "smart move 👻 this way nobody knows", timestamp: "Yesterday 7:15 PM", sentAt: "2026-03-02T19:15:22Z", status: "read", burnTimer: "none", isIncognito: true, reaction: null },
  { id: "msg_003cc", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "wait you can set a burn timer on messages??", timestamp: "Yesterday 7:16 PM", sentAt: "2026-03-02T19:16:04Z", status: "read", burnTimer: "none", isIncognito: true, reaction: "🔥" },
  { id: "msg_004dd", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "yeah just tap the timer icon — I set this one to 30 seconds", timestamp: "Yesterday 7:17 PM", sentAt: "2026-03-02T19:17:11Z", status: "read", burnTimer: "30s", isIncognito: true, reaction: null, burnSecondsRemaining: null },
  // Edge case: recalled message — sender unsent before read
  { id: "msg_005ee", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: null, timestamp: "Yesterday 7:18 PM", sentAt: "2026-03-02T19:18:33Z", status: "recalled", burnTimer: "none", isIncognito: true, reaction: null },
  { id: "msg_006ff", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "oops wrong chat haha — anyway did you see what I sent on the group?", timestamp: "Yesterday 7:18 PM", sentAt: "2026-03-02T19:18:55Z", status: "read", burnTimer: "none", isIncognito: true, reaction: null },
  { id: "msg_007gg", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "omg yes 💀 the double tap reaction is so satisfying btw", timestamp: "Yesterday 7:20 PM", sentAt: "2026-03-02T19:20:18Z", status: "read", burnTimer: "none", isIncognito: true, reaction: null },
  { id: "msg_008hh", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "I'm obsessed with burn on read — feels so secure", timestamp: "Yesterday 7:22 PM", sentAt: "2026-03-02T19:22:07Z", status: "read", burnTimer: "burn_on_read", isIncognito: true, reaction: null, burnSecondsRemaining: null },
  { id: "msg_009ii", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "right — BOR is different from timed. timer starts when you open it, not when I send", timestamp: "Yesterday 7:23 PM", sentAt: "2026-03-02T19:23:44Z", status: "read", burnTimer: "burn_on_read", isIncognito: true, reaction: null },
  // Edge case: burned (expired) message — content null, cannot be recovered
  { id: "msg_010jj", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: null, timestamp: "Yesterday 7:25 PM", sentAt: "2026-03-02T19:25:00Z", status: "burned", burnTimer: "burn_on_read", isIncognito: true, reaction: null, burnSecondsRemaining: null },
  { id: "msg_011kk", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "lol it already burned — that was fast 🔥", timestamp: "Yesterday 7:26 PM", sentAt: "2026-03-02T19:26:13Z", status: "read", burnTimer: "none", isIncognito: true, reaction: null },
  { id: "msg_012ll", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "this is so much better than texting normally 🔥", timestamp: "Yesterday 7:30 PM", sentAt: "2026-03-02T19:30:44Z", status: "read", burnTimer: "none", isIncognito: true, reaction: "💜" },
  { id: "msg_013mm", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "no cap — invite your friends, the invite-to-unlock thing actually works", timestamp: "Yesterday 9:14 PM", sentAt: "2026-03-02T21:14:22Z", status: "read", burnTimer: "none", isIncognito: false, reaction: null },
  { id: "msg_014nn", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "already sent it to like 5 people lol", timestamp: "Yesterday 9:15 PM", sentAt: "2026-03-02T21:15:09Z", status: "read", burnTimer: "none", isIncognito: false, reaction: null },
  { id: "msg_015oo", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "ok going back incognito for this 👻", timestamp: "Today 8:02 AM", sentAt: "2026-03-03T08:02:00Z", status: "read", burnTimer: "none", isIncognito: true, reaction: null },
  // Edge case: screenshot_detected — this message triggered an alert to sender
  { id: "msg_016pp", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "wait hold on trying to screenshot this real quick", timestamp: "Today 8:03 AM", sentAt: "2026-03-03T08:03:17Z", status: "screenshot_detected", burnTimer: "none", isIncognito: true, reaction: null },
  { id: "msg_017qq", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "ZO!! I got the screenshot alert 😤 I saw that", timestamp: "Today 8:04 AM", sentAt: "2026-03-03T08:04:33Z", status: "read", burnTimer: "none", isIncognito: true, reaction: null },
  { id: "msg_018rr", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "omg it actually caught me 😭😭 that's wild", timestamp: "Today 8:05 AM", sentAt: "2026-03-03T08:05:44Z", status: "read", burnTimer: "none", isIncognito: true, reaction: "💀" },
  // Active burn countdown — 487 seconds remaining
  { id: "msg_019ss", threadId: "thr_a1b2c", senderId: "cnt_me_00", content: "sending you something with a 10 min timer — check it", timestamp: "Today 2:10 PM", sentAt: "2026-03-03T14:10:00Z", status: "delivered", burnTimer: "10m", isIncognito: true, reaction: null, burnSecondsRemaining: 487 },
  { id: "msg_020tt", threadId: "thr_a1b2c", senderId: "cnt_zar01", content: "omg the snap already burned 🔥", timestamp: "just now", sentAt: "2026-03-03T14:22:31Z", status: "read", burnTimer: "burn_on_read", isIncognito: true, reaction: null, burnSecondsRemaining: null },
];

// ─── Activity Events ──────────────────────────────────────────────────────────
// 7 privacy feed entries: screenshot alerts, burns, recalls, new incognito thread.

export const activityEvents: ActivityEvent[] = [
  { id: "evt_sc001", type: "screenshot_alert",      description: "Zara Okonkwo took a screenshot in your incognito thread",           timestamp: "8:03 AM today",    occurredAt: "2026-03-03T08:03:17Z", contactName: "Zara Okonkwo",    threadId: "thr_a1b2c", isAlert: true },
  { id: "evt_br002", type: "message_burned",         description: "Your burn-on-read message to Zara Okonkwo has been destroyed",       timestamp: "Yesterday 7:25 PM", occurredAt: "2026-03-02T19:25:41Z", contactName: "Zara Okonkwo",    threadId: "thr_a1b2c", isAlert: false },
  { id: "evt_sc003", type: "screenshot_alert",       description: "Kai Reyes took a screenshot in your incognito thread",               timestamp: "Yesterday 6:48 PM", occurredAt: "2026-03-02T18:48:00Z", contactName: "Kai Reyes",       threadId: "thr_s3t4u", isAlert: true },
  { id: "evt_re004", type: "message_recalled",       description: "Zara Okonkwo recalled a message before you could read it",           timestamp: "Yesterday 7:18 PM", occurredAt: "2026-03-02T19:18:33Z", contactName: "Zara Okonkwo",    threadId: "thr_a1b2c", isAlert: false },
  { id: "evt_br005", type: "burn_timer_expired",     description: "Kai Reyes's message burned before you opened it (Burned, unread)",   timestamp: "Yesterday 8:12 PM", occurredAt: "2026-03-02T20:12:00Z", contactName: "Kai Reyes",       threadId: "thr_s3t4u", isAlert: false },
  { id: "evt_ig006", type: "new_incognito_thread",   description: "Dev Sharma started a new incognito thread with you",                 timestamp: "Feb 27",            occurredAt: "2026-02-27T16:22:00Z", contactName: "Dev Sharma",      threadId: "thr_j7k8l", isAlert: false },
  { id: "evt_bl007", type: "contact_blocked",        description: "Jordan Blake has been blocked — no further messages",                timestamp: "Feb 28",            occurredAt: "2026-02-28T21:10:00Z", contactName: "Jordan Blake",    threadId: "",          isAlert: false },
];

// ─── App Metrics ──────────────────────────────────────────────────────────────
// Early-stage app ranges from domain brief: DAU 1,200–4,500; incognito rate 28–42%.

export const appMetrics: AppMetrics = {
  activeThreads: 9,
  messagesToday: 24_731,
  incognitoRate: 34.2,
  burnTimerUsage: 41.7,
  screenshotAlerts: 18,
  dau: 2_847,
  mau: 8_140,
  stickinessRatio: 34.98,
  kFactor: 0.74,
  d7Retention: 22.3,
};

// ─── Messaging Trend (7-day) ──────────────────────────────────────────────────
// Consumer messaging spikes Fri–Sat, dips Mon, recovers mid-week.

export const messagingTrend: MessagingTrendPoint[] = [
  { day: "Thu Feb 25", messagessent: 18_240, incognitoMessages: 5_820, burnedMessages: 2_140 },
  { day: "Fri Feb 26", messagessent: 22_870, incognitoMessages: 8_340, burnedMessages: 3_470 },
  { day: "Sat Feb 27", messagessent: 27_410, incognitoMessages: 10_980, burnedMessages: 4_810 },
  { day: "Sun Feb 28", messagessent: 24_190, incognitoMessages: 9_230, burnedMessages: 4_020 },
  { day: "Mon Mar 1",  messagessent: 19_630, incognitoMessages: 6_490, burnedMessages: 2_910 },
  { day: "Tue Mar 2",  messagessent: 21_480, incognitoMessages: 7_140, burnedMessages: 3_280 },
  { day: "Wed Mar 3",  messagessent: 24_731, incognitoMessages: 8_458, burnedMessages: 3_944 },
];

// ─── Mode Breakdown ───────────────────────────────────────────────────────────

export const modeBreakdown: ModeBreakdownPoint[] = [
  { name: "Incognito", value: 34.2, fill: "var(--chart-1)" },
  { name: "Standard",  value: 65.8, fill: "var(--chart-3)" },
];

// ─── Burn Timer Distribution ──────────────────────────────────────────────────
// Burn-on-read is most popular (41%) — users prefer recipient-triggered expiry.

export const burnTimerDistribution: BurnTimerDistPoint[] = [
  { timer: "Burn on Read", count: 4_218, pct: 41.3 },
  { timer: "1 Hour",       count: 2_147, pct: 21.0 },
  { timer: "24 Hours",     count: 1_634, pct: 16.0 },
  { timer: "10 Min",       count: 1_082, pct: 10.6 },
  { timer: "30 Sec",       count:   614, pct:  6.0 },
  { timer: "5 Sec",        count:   307, pct:  3.0 },
  { timer: "1 Min",        count:   211, pct:  2.1 },
];

// ─── UI Reference Data ────────────────────────────────────────────────────────

export const groupChatNames = [
  "The Usual Suspects",
  "Friday Night Plans",
  "Don't Screenshot This",
  "Top Secret",
  "Weekend Crew",
  "No Cap Zone",
  "Burn After Reading",
] as const;

export const burnTimerOptions = [
  { value: "none",         label: "No timer",     icon: "⏳" },
  { value: "burn_on_read", label: "Burn on read", icon: "👁️" },
  { value: "5s",           label: "5 seconds",    icon: "🔥" },
  { value: "30s",          label: "30 seconds",   icon: "🔥" },
  { value: "1m",           label: "1 minute",     icon: "⏱️" },
  { value: "10m",          label: "10 minutes",   icon: "⏱️" },
  { value: "1h",           label: "1 hour",       icon: "⌛" },
  { value: "24h",          label: "24 hours",     icon: "📅" },
] as const;

// ─── Lookup Helpers ───────────────────────────────────────────────────────────

export const getContactById = (id: string): Contact | undefined =>
  contacts.find((c) => c.id === id);

export const getThreadById = (id: string): Thread | undefined =>
  threads.find((t) => t.id === id);

export const getMessagesByThread = (threadId: string): Message[] =>
  activeThreadMessages.filter((m) => m.threadId === threadId);

export const getActiveThreads = (): Thread[] =>
  threads.filter((t) => !t.isArchived);

export const getIncognitoThreads = (): Thread[] =>
  threads.filter((t) => t.mode === "incognito" && !t.isArchived);

export const getAlertEvents = (): ActivityEvent[] =>
  activityEvents.filter((e) => e.isAlert);

export const getThreadsWithScreenshotAlert = (): Thread[] =>
  threads.filter((t) => t.screenshotDetected);
