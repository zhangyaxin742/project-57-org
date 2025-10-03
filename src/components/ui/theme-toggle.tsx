import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './button';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9 relative"
        >
            <Sun className={`h-4 w-4 transition-all scale-100 rotate-0 ${theme === 'dark' ? 'scale-0 rotate-90' : ''
                }`} />
            <Moon className={`absolute h-4 w-4 transition-all scale-0 rotate-90 ${theme === 'dark' ? 'scale-100 rotate-0' : ''
                }`} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}