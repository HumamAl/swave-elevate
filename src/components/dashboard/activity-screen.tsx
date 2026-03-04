"use client";

import { cn } from "@/lib/utils";
import { activityEvents } from "@/data/mock-data";
import type { ActivityEvent } from "@/lib/types";
import { Bell, Camera, Flame, RotateCcw, Ghost, Shield, UserX } from "lucide-react";

function getEventIcon(event: ActivityEvent) {
  switch (event.type) {
    case "screenshot_alert":
      return <Camera className="w-4 h-4" />;
    case "message_burned":
    case "burn_timer_expired":
      return <Flame className="w-4 h-4" />;
    case "message_recalled":
      return <RotateCcw className="w-4 h-4" />;
    case "new_incognito_thread":
      return <Ghost className="w-4 h-4" />;
    case "contact_blocked":
      return <UserX className="w-4 h-4" />;
    default:
      return <Bell className="w-4 h-4" />;
  }
}

function getEventColors(event: ActivityEvent): { icon: string; bg: string; border: string; leftBar: string } {
  if (event.isAlert) {
    return {
      icon: "text-destructive",
      bg: "bg-destructive/5",
      border: "border-destructive/20",
      leftBar: "bg-destructive",
    };
  }
  switch (event.type) {
    case "message_burned":
    case "burn_timer_expired":
      return {
        icon: "text-warning",
        bg: "bg-warning/5",
        border: "border-warning/15",
        leftBar: "bg-warning",
      };
    case "message_recalled":
      return {
        icon: "text-muted-foreground",
        bg: "bg-muted/10",
        border: "border-border/20",
        leftBar: "bg-muted-foreground",
      };
    case "new_incognito_thread":
      return {
        icon: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20",
        leftBar: "bg-primary",
      };
    case "contact_blocked":
      return {
        icon: "text-muted-foreground",
        bg: "bg-muted/10",
        border: "border-border/20",
        leftBar: "bg-muted-foreground/40",
      };
    default:
      return {
        icon: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20",
        leftBar: "bg-primary",
      };
  }
}

export function ActivityScreen() {
  const alertCount = activityEvents.filter((e) => e.isAlert).length;

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "var(--background)" }}
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
      <div className="flex items-center justify-between px-4 pt-2 pb-3 shrink-0">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Activity
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">Privacy feed</p>
        </div>
        {alertCount > 0 && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-destructive/15 border border-destructive/25">
            <Camera className="w-3 h-3 text-destructive" />
            <span className="text-[10px] font-semibold text-destructive">
              {alertCount} alert{alertCount > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>

      {/* Event list */}
      <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-3">
        {activityEvents.map((event) => {
          const colors = getEventColors(event);
          return (
            <div
              key={event.id}
              className={cn(
                "flex items-start gap-3 p-3 rounded-2xl border relative overflow-hidden",
                colors.bg,
                colors.border
              )}
            >
              {/* Left color bar for alerts */}
              {event.isAlert && (
                <div
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-0.5",
                    colors.leftBar
                  )}
                />
              )}

              {/* Icon */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  event.isAlert ? "bg-destructive/15" : "bg-white/5",
                  colors.icon
                )}
              >
                {getEventIcon(event)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-medium text-foreground leading-tight">
                    {event.description}
                  </p>
                  <span className="text-[9px] text-muted-foreground shrink-0 mt-0.5">
                    {event.timestamp}
                  </span>
                </div>
                {event.isAlert && (
                  <p className="text-[10px] text-destructive/70 mt-1 font-medium">
                    Privacy alert — tap to review
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-border/20 flex items-center gap-2 shrink-0">
        <Shield className="w-3.5 h-3.5 text-primary/70" />
        <span className="text-[10px] text-muted-foreground/60">
          All privacy events logged end-to-end
        </span>
      </div>
    </div>
  );
}
