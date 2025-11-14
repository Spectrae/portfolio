// src/components/Header/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-6 w-6" />;

  const isDark = theme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-full p-1.5 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};
