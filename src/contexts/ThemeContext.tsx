// src/contexts/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void; // for chips / direct set
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, _setTheme] = useState<Theme>('light'); // default light; we'll correct on mount

  // Read saved/system preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved === 'dark' || saved === 'light') {
        _setTheme(saved);
        if (saved === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial: Theme = prefersDark ? 'dark' : 'light';
        _setTheme(initial);
        if (initial === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      }
    } catch {
      // fail safe: leave defaults
    }
  }, []);

  // Sync DOM + storage when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark'); // light = no class
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const setTheme = (t: Theme) => _setTheme(t);
  const toggleTheme = () => _setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
