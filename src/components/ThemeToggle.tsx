"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-muted/50 border border-border/50 animate-pulse" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-full border border-border/50 glass hover:bg-muted/50 transition-colors flex items-center justify-center text-foreground cursor-pointer group"
      aria-label="Toggle Theme"
      id="theme-toggle"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
