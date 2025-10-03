// src/components/ui/ThemeToggle.tsx
'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-sky-400" />
      )}
    </button>
  );
}
