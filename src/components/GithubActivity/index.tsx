// src/components/GithubActivity/index.tsx
'use client';

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { FiGithub } from 'react-icons/fi';
import { useEffect, useState } from 'react';

// Dynamically import GitHubCalendar to avoid SSR hydration errors
const GitHubCalendar = dynamic(() => import('react-github-calendar'), {
  ssr: false,
});

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || '';

const GithubActivity = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by rendering only after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme
  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  // Explicit color themes
  const explicitTheme = {
    light: ['hsl(0, 0%, 92%)', '#c6e484', '#7bc96f', '#239a3b', '#196127'],
    dark: ['hsl(0, 0%, 10%)', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  // Skeleton UI while mounting or theme not resolved
  if (!mounted || !currentTheme) {
    return (
      <section id="github-activity" className="py-24">
        <h2 className="mb-12 text-center text-4xl font-bold">
          GitHub Contributions
        </h2>
        <div className="glass-effect h-48 w-full animate-pulse rounded-xl p-6 shadow-lg" />
      </section>
    );
  }

  return (
    <section id="github-activity" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        GitHub Contributions
      </h2>

      <div className="glass-effect flex flex-col items-center gap-6 rounded-xl p-6 shadow-lg">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          blockSize={14}
          theme={{
            light: explicitTheme.light,
            dark: explicitTheme.dark,
          }}
          hideTotalCount={false}
          hideColorLegend
        />

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-light-primary px-6 py-3 font-semibold text-light-primary-foreground shadow-lg transition-transform hover:scale-105 dark:bg-dark-primary dark:text-dark-primary-foreground"
        >
          <FiGithub />
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default GithubActivity;
