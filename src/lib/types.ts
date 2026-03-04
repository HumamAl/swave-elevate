import type { LucideIcon } from "lucide-react";

// Sidebar navigation
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// Challenge visualization types
export type VisualizationType =
  | "flow"
  | "before-after"
  | "metrics"
  | "architecture"
  | "risk-matrix"
  | "timeline"
  | "dual-kpi"
  | "tech-stack"
  | "decision-flow";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  visualizationType: VisualizationType;
  outcome?: string;
}

// Proposal types
export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  approach: { title: string; description: string }[];
  skillCategories: { name: string; skills: string[] }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  relevance?: string;
  outcome?: string;
  liveUrl?: string;
}

// Screen definition for frame-based demo formats
export interface DemoScreen {
  id: string;
  label: string;
  icon?: LucideIcon;
  href: string;
}

// Conversion element variant types
export type ConversionVariant = "sidebar" | "inline" | "floating" | "banner";

// ─── Swave Messaging Domain Types ───────────────────────────────────────────

/**
 * Burn timer options for ephemeral messages.
 * "burn_on_read" starts countdown when recipient opens the message.
 * Time-based options start countdown from the moment of send.
 */
export type BurnTimerOption =
  | "none"
  | "burn_on_read"
  | "5s"
  | "30s"
  | "1m"
  | "10m"
  | "1h"
  | "24h";

/** Delivery and lifecycle state of a single message */
export type MessageStatus =
  | "sending"
  | "sent"
  | "delivered"
  | "read"
  | "burned"
  | "recalled"
  | "screenshot_detected";

/** Whether a thread is standard or incognito (identity-masked, no read receipts) */
export type ThreadMode = "standard" | "incognito";

/** Gradient direction for contact avatar backgrounds */
export type AvatarGradient =
  | "violet-pink"
  | "blue-cyan"
  | "orange-red"
  | "green-teal"
  | "yellow-orange"
  | "pink-purple"
  | "indigo-blue"
  | "teal-green";

/**
 * A person the current user can message.
 * "not_on_swave" contacts can be invited but cannot receive messages yet.
 */
export interface Contact {
  id: string;
  name: string;
  /** Two-letter initials for avatar display */
  initials: string;
  /** Gradient theme for the avatar circle */
  avatarGradient: AvatarGradient;
  /** ISO timestamp of last app activity */
  lastSeen: string;
  isOnline: boolean;
  isBlocked: boolean;
  /** True when the contact has not yet installed Swave */
  notOnSwave?: boolean;
}

/** A single message within a thread */
export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  /** Text content — null when message is burned or recalled */
  content: string | null;
  /** Relative display string: "just now", "2m ago", "Yesterday" */
  timestamp: string;
  /** ISO timestamp for sorting and burn logic */
  sentAt: string;
  status: MessageStatus;
  burnTimer: BurnTimerOption;
  /** True if sent during an incognito session */
  isIncognito: boolean;
  /** Seconds remaining on burn countdown (null if timer not active or already burned) */
  burnSecondsRemaining?: number | null;
  /** Reaction emoji applied to this message, if any */
  reaction?: string | null;
}

/** A conversation channel — either 1:1 or group */
export interface Thread {
  id: string;
  /** Contact IDs for 1:1 threads; all member IDs for groups */
  participantIds: string[];
  /** Display name — contact name for 1:1, custom name for groups */
  displayName: string;
  /** Last message object for preview row */
  lastMessage: {
    content: string | null;
    timestamp: string;
    senderId: string;
    status: MessageStatus;
  };
  unreadCount: number;
  mode: ThreadMode;
  isMuted: boolean;
  isArchived: boolean;
  isPinned: boolean;
  /** True when a screenshot was taken in this thread without permission */
  screenshotDetected: boolean;
  /** Active burn timer default for new messages in this thread */
  defaultBurnTimer: BurnTimerOption;
  isGroup: boolean;
  createdAt: string;
  updatedAt: string;
}

/** An entry in the privacy activity feed */
export type ActivityEventType =
  | "screenshot_alert"
  | "message_burned"
  | "message_recalled"
  | "new_incognito_thread"
  | "contact_blocked"
  | "burn_timer_expired";

export interface ActivityEvent {
  id: string;
  type: ActivityEventType;
  description: string;
  /** Relative display timestamp */
  timestamp: string;
  /** ISO timestamp for sorting */
  occurredAt: string;
  contactName: string;
  threadId: string;
  /** True = requires immediate user attention (screenshot alerts) */
  isAlert: boolean;
}

/** App-level metrics for the demo stats display */
export interface AppMetrics {
  /** Total threads currently active (not archived) */
  activeThreads: number;
  /** Messages sent in the last 24 hours */
  messagesToday: number;
  /** % of active threads using incognito mode */
  incognitoRate: number;
  /** % of sent messages that have a burn timer set */
  burnTimerUsage: number;
  /** Screenshot alerts triggered in the last 7 days */
  screenshotAlerts: number;
  /** Daily active users */
  dau: number;
  /** Monthly active users */
  mau: number;
  /** DAU / MAU stickiness ratio as a percentage */
  stickinessRatio: number;
  /** Viral coefficient: new users per existing user */
  kFactor: number;
  /** D7 retention percentage */
  d7Retention: number;
}

/** Chart data point for DAU / message volume trend */
export interface MessagingTrendPoint {
  day: string;
  messagessent: number;
  incognitoMessages: number;
  burnedMessages: number;
}

/** Categorical breakdown for the incognito vs standard split */
export interface ModeBreakdownPoint {
  name: string;
  value: number;
  fill: string;
}

/** Burn timer selection distribution for the analytics view */
export interface BurnTimerDistPoint {
  timer: string;
  count: number;
  pct: number;
}
