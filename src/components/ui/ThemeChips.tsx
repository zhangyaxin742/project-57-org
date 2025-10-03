// src/components/ui/ThemeChips.tsx
'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export default function ThemeChips() {
  const { theme, setTheme } = useTheme();

  const base =
    'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-white/30';
  const off =
    'border-white/10 bg-white/5 text-white/80 hover:bg-white/10';
  const on =
    'border-white/20 bg-white/15 text-white shadow-[0_8px_30px_rgba(255,255,255,0.08)]';

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={cn(base, theme === 'light' ? on : off)}
        aria-pressed={theme === 'light'}
      >
        <Moon className={cn('h-4 w-4', theme === 'light' ? 'text-sky-400' : 'text-sky-300/80')} />
        Light
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={cn(base, theme === 'dark' ? on : off)}
        aria-pressed={theme === 'dark'}
      >
        <Sun className={cn('h-4 w-4', theme === 'dark' ? 'text-yellow-400' : 'text-yellow-300/80')} />
        Dark
      </button>
    </div>
  );
}
