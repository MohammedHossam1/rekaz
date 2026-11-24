"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  label: string;
}

export function ThemeToggle({ label }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="border border-border/80 bg-card/60 text-foreground-strong backdrop-blur-sm hover:border-border-gold hover:bg-surface-subtle"
    >
      <Sun className="hidden size-4 text-primary dark:block" />
      <Moon className="block size-4 text-foreground-strong dark:hidden" />
    </Button>
  );
}
