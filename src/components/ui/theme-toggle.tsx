// src/components/ui/ThemeToggle.tsx
'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // Active chip style when current theme is active (always true for single-chip)
  const active =
    'border-white/20 bg-white/15 text-white shadow-[0_8px_30px_rgba(255,255,255,0.08)]';
  const inactive =
    'border-white/10 bg-white/5 text-white/80 hover:bg-white/10';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark} // pressed = dark mode
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition',
        'focus:outline-none focus:ring-2 focus:ring-white/30',
        isDark ? active : inactive
      )}
    >
      {isDark ? (
        <>
          {/* Dark mode = Moon icon + "Dark" */}
          <Moon className="h-4 w-4 text-sky-400" />
          <span>Dark</span>
        </>
      ) : (
        <>
          {/* Light mode = Sun icon + "Light" */}
          <Sun className="h-4 w-4 text-yellow-400" />
          <span>Light</span>
        </>
      )}
    </button>
  );
}
