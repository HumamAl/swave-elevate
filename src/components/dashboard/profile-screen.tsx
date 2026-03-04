"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { appMetrics } from "@/data/mock-data";
import { APP_CONFIG } from "@/lib/config";
import { Shield, Ghost, Flame, Users, Camera, ChevronRight, Bell } from "lucide-react";

function ToggleSwitch({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative w-10 h-6 rounded-full transition-all duration-200 shrink-0",
        enabled ? "gradient-fill" : "bg-muted/30 border border-border/30"
      )}
    >
      <span
        className={cn(
          "absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200",
          enabled ? "left-5" : "left-1"
        )}
      />
    </button>
  );
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-base font-bold gradient-text">{value}</span>
      <span className="text-[9px] text-muted-foreground text-center leading-tight">{label}</span>
    </div>
  );
}

export function ProfileScreen() {
  const [screenshotDetection, setScreenshotDetection] = useState(true);
  const [incognitoDefault, setIncognitoDefault] = useState(false);
  const [readReceipts, setReadReceipts] = useState(true);
  const [burnNotifications, setBurnNotifications] = useState(true);

  return (
    <div
      className="flex flex-col h-full overflow-y-auto"
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
      <div className="px-4 pt-2 pb-4 shrink-0">
        <h1 className="text-xl font-bold text-foreground tracking-tight">
          Profile
        </h1>
      </div>

      {/* Avatar + identity */}
      <div className="flex flex-col items-center gap-3 py-4 shrink-0">
        <div className="relative">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 285), oklch(0.72 0.20 320))",
            }}
          >
            Me
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-success border-2 border-background" />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">You</p>
          <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1 justify-center">
            <Ghost className="w-3 h-3 text-primary" />
            Incognito ready
          </p>
        </div>
      </div>

      {/* Quick stats */}
      <div className="mx-4 mb-4 p-3 rounded-2xl glass-surface shrink-0">
        <div className="flex items-center justify-around">
          <StatBadge
            value={String(appMetrics.activeThreads)}
            label={"Active\nthreads"}
          />
          <div className="w-px h-10 bg-border/20" />
          <StatBadge
            value={`${appMetrics.incognitoRate}%`}
            label={"Incognito\nrate"}
          />
          <div className="w-px h-10 bg-border/20" />
          <StatBadge
            value={`${appMetrics.burnTimerUsage}%`}
            label={"Burn timer\nusage"}
          />
          <div className="w-px h-10 bg-border/20" />
          <StatBadge
            value={String(appMetrics.screenshotAlerts)}
            label={"Screenshot\nalerts"}
          />
        </div>
      </div>

      {/* Privacy settings */}
      <div className="mx-4 mb-4 shrink-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2 px-1">
          Privacy Settings
        </p>
        <div className="rounded-2xl glass-surface overflow-hidden">
          {/* Screenshot Detection */}
          <div className="flex items-center gap-3 px-3 py-3 border-b border-border/10">
            <div className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
              <Camera className="w-3.5 h-3.5 text-destructive" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground">
                Screenshot Detection
              </p>
              <p className="text-[10px] text-muted-foreground">
                Alert me when someone screenshots
              </p>
            </div>
            <ToggleSwitch
              enabled={screenshotDetection}
              onToggle={() => setScreenshotDetection((v) => !v)}
            />
          </div>

          {/* Incognito Default */}
          <div className="flex items-center gap-3 px-3 py-3 border-b border-border/10">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Ghost className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground">
                Incognito by Default
              </p>
              <p className="text-[10px] text-muted-foreground">
                New threads start incognito
              </p>
            </div>
            <ToggleSwitch
              enabled={incognitoDefault}
              onToggle={() => setIncognitoDefault((v) => !v)}
            />
          </div>

          {/* Read Receipts */}
          <div className="flex items-center gap-3 px-3 py-3 border-b border-border/10">
            <div className="w-7 h-7 rounded-full bg-muted/20 flex items-center justify-center shrink-0">
              <Shield className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground">
                Read Receipts
              </p>
              <p className="text-[10px] text-muted-foreground">
                Off in incognito threads always
              </p>
            </div>
            <ToggleSwitch
              enabled={readReceipts}
              onToggle={() => setReadReceipts((v) => !v)}
            />
          </div>

          {/* Burn Notifications */}
          <div className="flex items-center gap-3 px-3 py-3">
            <div className="w-7 h-7 rounded-full bg-warning/10 flex items-center justify-center shrink-0">
              <Bell className="w-3.5 h-3.5 text-warning" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground">
                Burn Notifications
              </p>
              <p className="text-[10px] text-muted-foreground">
                Alert when messages are about to burn
              </p>
            </div>
            <ToggleSwitch
              enabled={burnNotifications}
              onToggle={() => setBurnNotifications((v) => !v)}
            />
          </div>
        </div>
      </div>

      {/* Invite friends CTA */}
      <div className="mx-4 mb-4 shrink-0">
        <button className="w-full p-3 rounded-2xl gradient-fill flex items-center gap-3">
          <Users className="w-5 h-5 text-white shrink-0" />
          <div className="flex-1 text-left">
            <p className="text-xs font-semibold text-white">Invite Friends</p>
            <p className="text-[10px] text-white/70">
              Each invite unlocks a premium feature
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-white/70 shrink-0" />
        </button>
      </div>

      {/* Bottom info */}
      <div className="mx-4 mb-6 shrink-0">
        <p className="text-center text-[10px] text-muted-foreground/40">
          {APP_CONFIG.appName} · Privacy-first messaging
        </p>
        <p className="text-center text-[10px] text-muted-foreground/25 mt-0.5">
          Demo by Humam
        </p>
      </div>
    </div>
  );
}
