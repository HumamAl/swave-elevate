"use client";

import { useState } from "react";
import {
  MessageSquare,
  Ghost,
  Bell,
  User,
  MessageCircle,
} from "lucide-react";
import { ScreenNavigator } from "@/components/interactions/screen-navigator";
import { ChatsScreen } from "@/components/dashboard/chats-screen";
import { ChatThreadScreen } from "@/components/dashboard/chat-thread-screen";
import { IncognitoScreen } from "@/components/dashboard/incognito-screen";
import { ActivityScreen } from "@/components/dashboard/activity-screen";
import { ProfileScreen } from "@/components/dashboard/profile-screen";

type ScreenId = "chats" | "thread" | "incognito" | "activity" | "profile";

const SCREENS = [
  {
    id: "chats",
    label: "Chats",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    id: "thread",
    label: "Zara",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    id: "incognito",
    label: "Incognito",
    icon: <Ghost className="w-5 h-5" />,
  },
  {
    id: "activity",
    label: "Activity",
    icon: <Bell className="w-5 h-5" />,
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User className="w-5 h-5" />,
  },
];

export default function DemoPage() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>("chats");

  function handleScreenChange(screenId: string) {
    setActiveScreen(screenId as ScreenId);
  }

  function handleThreadSelect(_threadId: string) {
    setActiveScreen("thread");
  }

  function handleBackToChats() {
    setActiveScreen("chats");
  }

  function renderScreen() {
    switch (activeScreen) {
      case "chats":
        return <ChatsScreen onThreadSelect={handleThreadSelect} />;
      case "thread":
        return <ChatThreadScreen onBack={handleBackToChats} />;
      case "incognito":
        return <IncognitoScreen />;
      case "activity":
        return <ActivityScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <ChatsScreen onThreadSelect={handleThreadSelect} />;
    }
  }

  return (
    <ScreenNavigator
      screens={SCREENS}
      activeScreen={activeScreen}
      onScreenChange={handleScreenChange}
      variant="bottom-tabs"
      transition="slide"
    >
      {renderScreen()}
    </ScreenNavigator>
  );
}
