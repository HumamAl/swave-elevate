"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  activeThreadMessages,
  getContactById,
  CURRENT_USER_ID,
} from "@/data/mock-data";
import type { Message } from "@/lib/types";
import {
  ArrowLeft,
  Ghost,
  Shield,
  Flame,
  Timer,
  Send,
  ChevronDown,
  Camera,
  RotateCcw,
} from "lucide-react";

const AVATAR_GRADIENTS: Record<string, string> = {
  "violet-pink": "linear-gradient(135deg, oklch(0.55 0.22 285), oklch(0.72 0.20 320))",
  "blue-cyan": "linear-gradient(135deg, oklch(0.50 0.20 250), oklch(0.65 0.18 210))",
};

interface ChatThreadScreenProps {
  onBack: () => void;
}

// Burn timer countdown ring component
function BurnRing({ seconds }: { seconds: number }) {
  const max = 600; // 10 minutes = max shown
  const pct = Math.min(seconds / max, 1);
  const radius = 9;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - pct);

  return (
    <div className="relative w-6 h-6 shrink-0">
      <svg viewBox="0 0 24 24" className="w-6 h-6 -rotate-90">
        <circle
          cx="12"
          cy="12"
          r={radius}
          fill="none"
          stroke="oklch(1 0 0 / 0.15)"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r={radius}
          fill="none"
          stroke="oklch(0.72 0.20 320)"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-white/70">
        {seconds >= 60 ? `${Math.floor(seconds / 60)}m` : `${seconds}s`}
      </span>
    </div>
  );
}

function MessageBubble({
  message,
  isOwn,
}: {
  message: Message;
  isOwn: boolean;
}) {
  const [burnSeconds, setBurnSeconds] = useState(
    message.burnSecondsRemaining ?? null
  );

  useEffect(() => {
    if (!burnSeconds || burnSeconds <= 0) return;
    const interval = setInterval(() => {
      setBurnSeconds((prev) => (prev !== null && prev > 0 ? prev - 1 : null));
    }, 1000);
    return () => clearInterval(interval);
  }, [burnSeconds]);

  // Recalled
  if (message.status === "recalled") {
    return (
      <div
        className={cn(
          "flex",
          isOwn ? "justify-end" : "justify-start"
        )}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border border-border/30 bg-muted/20">
          <RotateCcw className="w-3 h-3 text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground italic">
            Message recalled
          </span>
        </div>
      </div>
    );
  }

  // Burned
  if (message.status === "burned") {
    return (
      <div
        className={cn(
          "flex",
          isOwn ? "justify-end" : "justify-start"
        )}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border border-warning/20 bg-warning/5">
          <Flame className="w-3 h-3 text-warning" />
          <span className="text-[11px] text-warning/70 italic">
            This message has burned
          </span>
        </div>
      </div>
    );
  }

  // Screenshot detected on this message
  if (message.status === "screenshot_detected" && message.content) {
    return (
      <div className={cn("flex flex-col gap-1", isOwn ? "items-end" : "items-start")}>
        <div className="flex items-end gap-1.5">
          <div
            className={cn(
              "max-w-[200px] px-3 py-2 rounded-2xl",
              isOwn
                ? "gradient-fill rounded-br-sm"
                : "glass-surface rounded-bl-sm"
            )}
          >
            <p className="text-[12px] leading-relaxed text-white">{message.content}</p>
          </div>
          {burnSeconds !== null && burnSeconds > 0 && (
            <BurnRing seconds={burnSeconds} />
          )}
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive/20 border border-destructive/30">
          <Camera className="w-2.5 h-2.5 text-destructive" />
          <span className="text-[9px] font-medium text-destructive">
            Screenshot detected
          </span>
        </div>
      </div>
    );
  }

  if (!message.content) return null;

  return (
    <div className={cn("flex flex-col gap-0.5", isOwn ? "items-end" : "items-start")}>
      <div className="flex items-end gap-1.5">
        <div
          className={cn(
            "max-w-[200px] px-3 py-2 rounded-2xl relative",
            isOwn
              ? "gradient-fill rounded-br-sm"
              : "glass-surface rounded-bl-sm"
          )}
        >
          <p className="text-[12px] leading-relaxed text-white">{message.content}</p>
          {message.burnTimer === "burn_on_read" && (
            <div className="mt-1 flex items-center gap-1">
              <Flame className="w-2.5 h-2.5 text-warning/70" />
              <span className="text-[9px] text-white/50">Burns on read</span>
            </div>
          )}
        </div>
        {burnSeconds !== null && burnSeconds > 0 && (
          <BurnRing seconds={burnSeconds} />
        )}
      </div>
      {message.reaction && (
        <span className="text-base">{message.reaction}</span>
      )}
    </div>
  );
}

export function ChatThreadScreen({ onBack }: ChatThreadScreenProps) {
  const [inputText, setInputText] = useState("");
  const [isIncognito, setIsIncognito] = useState(true);
  const [showBurnPicker, setShowBurnPicker] = useState(false);
  const [selectedBurn, setSelectedBurn] = useState<string>("burn_on_read");
  const [localMessages, setLocalMessages] = useState(activeThreadMessages);
  const scrollRef = useRef<HTMLDivElement>(null);

  const zara = getContactById("cnt_zar01");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [localMessages]);

  const hasScreenshot = localMessages.some(
    (m) => m.status === "screenshot_detected"
  );

  function handleSend() {
    if (!inputText.trim()) return;
    const newMsg: Message = {
      id: `msg_new_${Date.now()}`,
      threadId: "thr_a1b2c",
      senderId: CURRENT_USER_ID,
      content: inputText.trim(),
      timestamp: "just now",
      sentAt: new Date().toISOString(),
      status: "sent",
      burnTimer: selectedBurn as Message["burnTimer"],
      isIncognito,
      reaction: null,
      burnSecondsRemaining:
        selectedBurn === "10m"
          ? 600
          : selectedBurn === "30s"
          ? 30
          : null,
    };
    setLocalMessages((prev) => [...prev, newMsg]);
    setInputText("");
  }

  const burnOptions = [
    { value: "none", label: "No timer", icon: "⏳" },
    { value: "burn_on_read", label: "On read", icon: "👁️" },
    { value: "30s", label: "30s", icon: "🔥" },
    { value: "10m", label: "10m", icon: "⏱️" },
    { value: "1h", label: "1h", icon: "⌛" },
  ];

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

      {/* Thread header */}
      <div
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 border-b border-border/20 shrink-0",
          isIncognito && "bg-primary/5"
        )}
      >
        <button
          onClick={onBack}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.55 0.22 285), oklch(0.72 0.20 320))",
          }}
        >
          ZO
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">
              {zara?.name ?? "Zara Okonkwo"}
            </span>
            {isIncognito && (
              <span className="flex items-center gap-0.5 text-[9px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                <Ghost className="w-2.5 h-2.5" />
                Incognito
              </span>
            )}
          </div>
          <p className="text-[10px] text-success">Online</p>
        </div>
        <Shield className="w-4 h-4 text-primary shrink-0" />
      </div>

      {/* Screenshot alert banner */}
      {hasScreenshot && (
        <div className="mx-3 mt-2 px-3 py-2 rounded-xl bg-destructive/15 border border-destructive/30 flex items-center gap-2 shrink-0">
          <Camera className="w-3.5 h-3.5 text-destructive shrink-0" />
          <p className="text-[11px] text-destructive font-medium leading-tight">
            Zara took a screenshot in this thread
          </p>
        </div>
      )}

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {/* Date separator */}
        <div className="flex items-center gap-2 my-1">
          <div className="flex-1 h-px bg-border/20" />
          <span className="text-[9px] text-muted-foreground/50 font-medium">
            Yesterday
          </span>
          <div className="flex-1 h-px bg-border/20" />
        </div>

        {localMessages.slice(0, 14).map((msg) => {
          const isOwn = msg.senderId === CURRENT_USER_ID;
          return (
            <div
              key={msg.id}
              className={cn("flex", isOwn ? "justify-end" : "justify-start")}
            >
              <div className="max-w-[75%]">
                <MessageBubble message={msg} isOwn={isOwn} />
                <p
                  className={cn(
                    "text-[9px] text-muted-foreground mt-0.5 px-1",
                    isOwn ? "text-right" : "text-left"
                  )}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          );
        })}

        {/* Today separator */}
        <div className="flex items-center gap-2 my-1">
          <div className="flex-1 h-px bg-border/20" />
          <span className="text-[9px] text-muted-foreground/50 font-medium">
            Today
          </span>
          <div className="flex-1 h-px bg-border/20" />
        </div>

        {localMessages.slice(14).map((msg) => {
          const isOwn = msg.senderId === CURRENT_USER_ID;
          return (
            <div
              key={msg.id}
              className={cn("flex", isOwn ? "justify-end" : "justify-start")}
            >
              <div className="max-w-[75%]">
                <MessageBubble message={msg} isOwn={isOwn} />
                <p
                  className={cn(
                    "text-[9px] text-muted-foreground mt-0.5 px-1",
                    isOwn ? "text-right" : "text-left"
                  )}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Burn timer picker sheet */}
      {showBurnPicker && (
        <div className="mx-3 mb-2 p-3 rounded-2xl glass-surface shrink-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-foreground">
              Burn Timer
            </span>
            <button onClick={() => setShowBurnPicker(false)}>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {burnOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setSelectedBurn(opt.value);
                  setShowBurnPicker(false);
                }}
                className={cn(
                  "flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors duration-150",
                  selectedBurn === opt.value
                    ? "gradient-fill border-transparent text-white"
                    : "border-border/30 text-muted-foreground hover:bg-white/5"
                )}
              >
                <span>{opt.icon}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Compose bar */}
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-2.5 border-t border-border/20 shrink-0",
          isIncognito && "bg-primary/5"
        )}
      >
        {/* Incognito toggle */}
        <button
          onClick={() => setIsIncognito((v) => !v)}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border shrink-0",
            isIncognito
              ? "gradient-fill border-transparent"
              : "border-border/40 bg-muted/20"
          )}
        >
          <Ghost className="w-3.5 h-3.5 text-white" />
        </button>

        {/* Burn timer toggle */}
        <button
          onClick={() => setShowBurnPicker((v) => !v)}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border shrink-0",
            showBurnPicker
              ? "bg-warning/20 border-warning/40"
              : "border-border/40 bg-muted/20"
          )}
        >
          <Timer
            className={cn(
              "w-3.5 h-3.5",
              selectedBurn !== "none" ? "text-warning" : "text-muted-foreground"
            )}
          />
        </button>

        {/* Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={isIncognito ? "Incognito message..." : "Message..."}
            className="w-full bg-muted/20 border border-border/30 rounded-full px-3 py-1.5 text-[12px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>

        {/* Send */}
        <button
          onClick={handleSend}
          disabled={!inputText.trim()}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0",
            inputText.trim()
              ? "gradient-fill"
              : "bg-muted/20 border border-border/30"
          )}
        >
          <Send
            className={cn(
              "w-3.5 h-3.5",
              inputText.trim() ? "text-white" : "text-muted-foreground"
            )}
          />
        </button>
      </div>
    </div>
  );
}
