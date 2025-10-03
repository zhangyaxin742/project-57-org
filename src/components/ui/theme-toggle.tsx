import React, { createContext, useContext, useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

// Define type for theme
type Theme = 'light' | 'dark';

// Create context with default (no-op functions for TS)
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => {},
});

// Provider component to wrap your app
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light'); // default to light

  // On mount, set theme from localStorage or system preference
  useEffect(() => {
    // Check localStorage
    const saved = window.localStorage.getItem('theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
      document.documentElement.classList.add(saved); // add 'dark' if saved is 'dark'
      if (saved === 'light') {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // No saved theme, use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Whenever theme changes, update the html class and localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light/dark
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for consuming theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be inside ThemeProvider");
  return context;
}

// The toggle button component
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark
        ? <Sun className="h-5 w-5 text-yellow-400" />
        : <Moon className="h-5 w-5 text-gray-800" />}
    </button>
  );
}
