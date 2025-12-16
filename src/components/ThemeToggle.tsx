import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

// 初始化主题
function getInitialTheme(): Theme {
  const storedTheme = (localStorage.getItem('theme') as Theme) || null;

  if (storedTheme) return storedTheme;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return prefersDark ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed left-1 bottom-1 z-50"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
