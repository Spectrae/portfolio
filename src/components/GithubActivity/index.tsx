// src/components/GithubActivity/index.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { FiGithub } from "react-icons/fi";

// Dynamically import to fix SSR hydration issues
const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "";

export default function GithubActivity() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<any>(null);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch API safely
  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((json) => {
        if (!json || json.error) return; // prevent crash
        setData(json);
      })
      .catch(() => {});
  }, []);

  // while not mounted
  if (!mounted) {
    return (
      <section id="github-activity" className="py-24">
        <h2 className="mb-12 text-center text-4xl font-bold">
          GitHub Contributions
        </h2>
        <div className="glass-effect h-48 w-full animate-pulse rounded-xl p-6 shadow-lg" />
      </section>
    );
  }

  // Ensure username exists
  if (!GITHUB_USERNAME) return null;

  // Wait for API
  if (!data) {
    return (
      <section id="github-activity" className="py-24">
        <h2 className="mb-12 text-center text-4xl font-bold">
          GitHub Contributions
        </h2>
        <div className="glass-effect h-48 w-full animate-pulse rounded-xl p-6 shadow-lg" />
      </section>
    );
  }

  // Set theme colors
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const explicitTheme = {
    light: ["hsl(0, 0%, 92%)", "#c6e484", "#7bc96f", "#239a3b", "#196127"],
    dark: ["hsl(0, 0%, 10%)", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section id="github-activity" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        GitHub Contributions
      </h2>

      <div className="glass-effect flex flex-col items-center gap-6 rounded-xl p-6 shadow-lg">
        {/* Contribution calendar */}
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

        {/* View on GitHub button */}
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
}
