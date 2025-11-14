// src/hooks/useTheme.ts
// This is now handled by next-themes, but here is a custom hook example if needed.
// For this project, we are using next-themes' `useTheme` hook directly.
// This file can be removed or used for other theme-related logic.
import { useTheme as useNextTheme } from 'next-themes';

export const useAppTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  return {
    theme,
    setTheme,
    isDark: resolvedTheme === 'dark',
  };
};