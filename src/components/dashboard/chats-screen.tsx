"use client";

import { cn } from "@/lib/utils";
import { threads, getContactById, CURRENT_USER_ID } from "@/data/mock-data";
import type { Thread } from "@/lib/types";
import { Pin, Ghost, Search, Camera, Shield } from "lucide-react";

const AVATAR_GRADIENTS: Record<string, string> = {
  "violet-pink": "linear-gradient(135deg, oklch(0.55 0.22 285), oklch(0.72 0.20 320))",
  "blue-cyan": "linear-gradient(135deg, oklch(0.50 0.20 250), oklch(0.65 0.18 210))",
  "orange-red": "linear-gradient(135deg, oklch(0.65 0.22 50), oklch(0.55 0.24 25))",
  "green-teal": "linear-gradient(135deg, oklch(0.58 0.18 155), oklch(0.62 0.16 185))",
  "yellow-orange": "linear-gradient(135deg, oklch(0.78 0.18 80), oklch(0.65 0.22 50))",
  "pink-purple": "linear-gradient(135deg, oklch(0.72 0.20 340), oklch(0.60 0.22 295))",
  "indigo-blue": "linear-gradient(135deg, oklch(0.45 0.22 270), oklch(0.55 0.20 250))",
  "teal-green": "linear-gradient(135deg, oklch(0.60 0.18 195), oklch(0.55 0.18 155))",
};

interface ChatsScreenProps {
  onThreadSelect: (threadId: string) => void;
}

function getAvatarGradient(gradientKey: string): string {
  return AVATAR_GRADIENTS[gradientKey] ?? AVATAR_GRADIENTS["violet-pink"];
}

function getGroupInitials(displayName: string): string {
  return displayName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function ThreadRow({
  thread,
  onSelect,
}: {
  thread: Thread;
  onSelect: () => void;
}) {
  const isGroup = thread.isGroup;
  const otherContactId = isGroup
    ? null
    : thread.participantIds.find((id) => id !== CURRENT_USER_ID) ?? null;
  const contact = otherContactId ? getContactById(otherContactId) : null;
  const isOnline = contact?.isOnline ?? false;
  const notOnSwave = contact?.notOnSwave ?? false;
  const avatarGradient = contact
    ? getAvatarGradient(contact.avatarGradient)
    : "linear-gradient(135deg, oklch(0.50 0.20 285), oklch(0.65 0.20 310))";
  const initials = contact ? contact.initials : getGroupInitials(thread.displayName);

  const lastMsg = thread.lastMessage;
  const isBurned = lastMsg.status === "burned";
  const lastContent = isBurned
    ? "🔥 Message burned"
    : lastMsg.content ?? "Message recalled";

  return (
    <button
      onClick={onSelect}
      className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors duration-150 text-left"
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: avatarGradient }}
        >
          {initials}
        </div>
        {/* Online dot */}
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-success border-2 border-background" />
        )}
        {/* Not on Swave */}
        {notOnSwave && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-warning border-2 border-background" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-sm font-semibold text-foreground truncate">
              {thread.displayName}
            </span>
            {thread.isPinned && (
              <Pin className="w-2.5 h-2.5 text-muted-foreground shrink-0" />
            )}
            {thread.mode === "incognito" && (
              <Ghost className="w-2.5 h-2.5 text-primary shrink-0" />
            )}
            {thread.screenshotDetected && (
              <Camera className="w-2.5 h-2.5 text-destructive shrink-0" />
            )}
          </div>
          <span className="text-[10px] text-muted-foreground shrink-0">
            {lastMsg.timestamp}
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <p
            className={cn(
              "text-xs truncate",
              isBurned ? "text-warning/70 italic" : "text-muted-foreground"
            )}
          >
            {notOnSwave ? "Invite to Swave" : lastContent}
          </p>
          {thread.unreadCount > 0 && (
            <span className="shrink-0 min-w-4 h-4 rounded-full gradient-fill flex items-center justify-center text-[9px] font-bold text-white px-1">
              {thread.unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

export function ChatsScreen({ onThreadSelect }: ChatsScreenProps) {
  const activeThreads = threads.filter((t) => !t.isArchived);
  const pinned = activeThreads.filter((t) => t.isPinned);
  const unpinned = activeThreads.filter((t) => !t.isPinned);

  return (
    <div className="flex flex-col h-full" style={{ background: "var(--background)" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0">
        <span className="text-[11px] font-semibold text-foreground/80">9:41</span>
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 20 14" className="w-4 h-3.5 fill-foreground/80">
            <rect x="0" y="5" width="3" height="9" rx="1" />
            <rect x="4.5" y="3" width="3" height="11" rx="1" />
            <rect x="9" y="1" width="3" height="13" rx="1" />
            <rect x="13.5" y="0" width="3" height="14" rx="1" />
          </svg>
          <svg viewBox="0 0 16 12" className="w-4 h-3 fill-foreground/80">
            <path d="M8 2.4C10.8 2.4 13.3 3.5 15.1 5.3L16 4.4C13.9 2.3 11.1 1 8 1C4.9 1 2.1 2.3 0 4.4L0.9 5.3C2.7 3.5 5.2 2.4 8 2.4Z" />
            <path d="M8 5.2C9.9 5.2 11.6 6 12.9 7.2L13.8 6.3C12.2 4.8 10.2 3.9 8 3.9C5.8 3.9 3.8 4.8 2.2 6.3L3.1 7.2C4.4 6 6.1 5.2 8 5.2Z" />
            <circle cx="8" cy="10" r="1.5" />
          </svg>
          <div className="flex items-center gap-0.5">
            <div className="w-5 h-2.5 rounded-sm border border-foreground/80 relative">
              <div className="absolute inset-0.5 right-1 bg-foreground/80 rounded-sm" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-foreground/60 rounded-r-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-3 shrink-0">
        <h1 className="text-xl font-bold text-foreground tracking-tight">Chats</h1>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full glass-surface flex items-center justify-center">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 rounded-full gradient-fill flex items-center justify-center">
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Screenshot alert banner */}
      {threads.some((t) => t.screenshotDetected) && (
        <div className="mx-4 mb-2 px-3 py-2 rounded-xl bg-destructive/15 border border-destructive/30 flex items-center gap-2 shrink-0">
          <Camera className="w-3.5 h-3.5 text-destructive shrink-0" />
          <p className="text-xs text-destructive font-medium">
            Screenshot detected in 2 threads
          </p>
        </div>
      )}

      {/* Thread list */}
      <div className="flex-1 overflow-y-auto">
        {pinned.length > 0 && (
          <>
            <div className="px-4 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                Pinned
              </span>
            </div>
            {pinned.map((thread) => (
              <ThreadRow
                key={thread.id}
                thread={thread}
                onSelect={() => thread.id === "thr_a1b2c" ? onThreadSelect(thread.id) : undefined}
              />
            ))}
            <div className="mx-4 border-t border-border/20 my-1" />
          </>
        )}

        {unpinned.map((thread) => (
          <ThreadRow
            key={thread.id}
            thread={thread}
            onSelect={() => thread.id === "thr_a1b2c" ? onThreadSelect(thread.id) : undefined}
          />
        ))}

        {/* Invite Tyler row */}
        <div className="mx-4 my-3 p-3 rounded-xl border border-primary/20 bg-primary/5 flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
            style={{ background: AVATAR_GRADIENTS["orange-red"] }}
          >
            TO
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-foreground">Tyler Osei</p>
            <p className="text-[10px] text-muted-foreground">Not on Swave yet</p>
          </div>
          <button className="text-[10px] font-semibold gradient-text px-2 py-1 rounded-lg border border-primary/30">
            Invite
          </button>
        </div>
      </div>

      {/* Bottom privacy bar */}
      <div className="px-4 py-2 border-t border-border/20 flex items-center gap-2 shrink-0">
        <Shield className="w-3.5 h-3.5 text-primary" />
        <span className="text-[10px] text-muted-foreground">
          End-to-end encrypted · Screenshot detection on
        </span>
      </div>
    </div>
  );
}
