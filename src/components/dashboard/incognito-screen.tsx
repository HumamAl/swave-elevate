"use client";

import { cn } from "@/lib/utils";
import { threads, getContactById, CURRENT_USER_ID } from "@/data/mock-data";
import { Ghost, Lock, Shield, Flame } from "lucide-react";

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

function getGroupInitials(name: string): string {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export function IncognitoScreen() {
  const incognitoThreads = threads.filter(
    (t) => t.mode === "incognito" && !t.isArchived
  );

  return (
    <div
      className="flex flex-col h-full"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.06 0.015 285) 0%, oklch(0.08 0.01 285) 100%)",
      }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0">
        <span className="text-[11px] font-semibold text-foreground/80">9:41</span>
        <div className="w-16 h-4 bg-foreground/10 rounded-full" />
        <div className="flex items-center gap-1">
          <div className="w-4 h-2.5 rounded-sm border border-foreground/60 relative">
            <div className="absolute inset-0.5 right-0.5 bg-success rounded-sm" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 pt-3 pb-4 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full gradient-fill flex items-center justify-center">
            <Ghost className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Incognito
          </h1>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Identity masked · No read receipts · Screenshot detection active
        </p>
      </div>

      {/* Privacy stats bar */}
      <div className="mx-4 mb-3 p-3 rounded-2xl border border-primary/20 bg-primary/5 shrink-0">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm font-bold gradient-text">{incognitoThreads.length}</p>
            <p className="text-[9px] text-muted-foreground">Active</p>
          </div>
          <div className="w-px h-8 bg-border/20" />
          <div className="text-center">
            <p className="text-sm font-bold gradient-text">34%</p>
            <p className="text-[9px] text-muted-foreground">Incognito rate</p>
          </div>
          <div className="w-px h-8 bg-border/20" />
          <div className="text-center">
            <p className="text-sm font-bold text-warning">2</p>
            <p className="text-[9px] text-muted-foreground">Screenshot alerts</p>
          </div>
        </div>
      </div>

      {/* Thread list */}
      <div className="flex-1 overflow-y-auto px-4 space-y-2">
        {incognitoThreads.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Ghost className="w-7 h-7 text-primary/60" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground/80">
                Go Incognito
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Start a thread and tap the ghost icon
              </p>
            </div>
            <button className="mt-2 px-5 py-2 rounded-full gradient-fill text-xs font-semibold text-white">
              New Incognito Thread
            </button>
          </div>
        ) : (
          incognitoThreads.map((thread) => {
            const isGroup = thread.isGroup;
            const otherContactId = isGroup
              ? null
              : thread.participantIds.find((id) => id !== CURRENT_USER_ID) ?? null;
            const contact = otherContactId
              ? getContactById(otherContactId)
              : null;
            const avatarGradient = contact
              ? (AVATAR_GRADIENTS[contact.avatarGradient] ?? AVATAR_GRADIENTS["violet-pink"])
              : "linear-gradient(135deg, oklch(0.50 0.20 285), oklch(0.65 0.20 310))";
            const initials = contact
              ? contact.initials
              : getGroupInitials(thread.displayName);

            const isBurned = thread.lastMessage.status === "burned";
            const lastContent = isBurned
              ? "Message burned"
              : thread.lastMessage.content ?? "Message recalled";

            return (
              <div
                key={thread.id}
                className="flex items-center gap-3 p-3 rounded-2xl glass-surface"
              >
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: avatarGradient }}
                  >
                    {initials}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-background border border-primary/20 flex items-center justify-center">
                    <Lock className="w-2.5 h-2.5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-sm font-semibold text-foreground truncate">
                      {thread.displayName}
                    </span>
                    <span className="text-[10px] text-muted-foreground shrink-0">
                      {thread.lastMessage.timestamp}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "text-xs truncate mt-0.5",
                      isBurned ? "text-warning/60 italic" : "text-muted-foreground"
                    )}
                  >
                    {isBurned ? (
                      <span className="flex items-center gap-1">
                        <Flame className="w-2.5 h-2.5" />
                        {lastContent}
                      </span>
                    ) : (
                      lastContent
                    )}
                  </p>
                  {/* Burn timer badge */}
                  {thread.defaultBurnTimer !== "none" && (
                    <div className="flex items-center gap-1 mt-1">
                      <Flame className="w-2.5 h-2.5 text-warning/60" />
                      <span className="text-[9px] text-warning/60">
                        Auto-burn: {thread.defaultBurnTimer}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom privacy info */}
      <div className="px-4 py-3 border-t border-border/10 shrink-0">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-primary/70" />
          <span className="text-[10px] text-muted-foreground/60">
            Incognito threads are not stored on any server
          </span>
        </div>
      </div>
    </div>
  );
}
