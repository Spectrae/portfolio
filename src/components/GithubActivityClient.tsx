// components/GithubActivityClient.tsx
'use client';

import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FiGithub } from 'react-icons/fi';

type ApiResp = {
  counts: Record<string, number>;
  percentages: Record<string, number>;
  recentEvents: Array<{
    id: string;
    type: string;
    repo: string;
    created_at: string;
    text: string;
  }>;
  fetched_at: string;
};

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || '';

export default function GithubActivityClient() {
  const [data, setData] = useState<ApiResp | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    fetch('/api/github-activity')
      .then((r) => r.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false));
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section className="w-full max-w-5xl mx-auto mt-10 px-4 md:px-0 space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FiGithub /> GitHub Activity
        </h2>
        <span className="text-sm text-gray-500">
          {data?.fetched_at && `Updated: ${new Date(data.fetched_at).toLocaleString()}`}
        </span>
      </div>

      {/* 🔥 LAYOUT AS PER YOUR TEXT: 
        - Row 1: Heatmap (full-width)
        - Row 2: 60/40 grid with Activity Feed (left) and Radial Chart (right)
      */}

      {/* Top Row — Heatmap */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 flex justify-center">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          blockSize={14}
          blockMargin={4}
          fontSize={13}
        />
      </div>

      {/* Bottom Row — Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6">

        {/* Bottom-Left Column — Activity Feed */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 min-h-[250px] flex flex-col">
          <h3 className="text-lg font-semibold mb-3">Activity overview</h3>

          {/* This content div has a max-height for scrolling */}
          <div className="flex-1 overflow-y-auto max-h-[260px] space-y-3 pr-2">
            {data?.recentEvents.map((ev) => (
              <div key={ev.id} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[9px] font-bold text-gray-600 dark:text-gray-300">
                  {ev.type.replace("Event", "").slice(0, 2)}
                </div>

                <div className="text-sm leading-tight">
                  <p className="font-medium">{ev.text}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(ev.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-Right Column — Radial Chart */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 flex items-center justify-center min-h-[250px]">
          {data ? <PerfectRadial percentages={data.percentages} /> : <p>Loading…</p>}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   PERFECT RADIAL CHART — (No changes needed here)
--------------------------------------------------------- */
function PerfectRadial({ percentages }: { percentages: Record<string, number> }) {
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const arm = 65; 

  const clamp = (n = 0) => Math.max(0, Math.min(100, Math.round(n)));

  const commits = clamp(percentages.commits);
  const issues = clamp(percentages.issues);
  const reviews = clamp(percentages.code_review);
  const prs = clamp(percentages.pull_request);

  const len = (p: number) => (p / 100) * arm;

  const axis = "#d0d7de";
  const green = "#2da44e";

  const offset = 20;

  return (
    <svg width={size} height={size} className="overflow-visible">

      {/* Axis lines */}
      <line x1={cx - arm} y1={cy} x2={cx + arm} y2={cy} stroke={axis} strokeWidth="4" strokeLinecap="round" />
      <line x1={cx} y1={cy - arm} x2={cx} y2={cy + arm} stroke={axis} strokeWidth="4" strokeLinecap="round" />

      {/* Arms */}
      <line x1={cx} y1={cy} x2={cx - len(commits)} y2={cy} stroke={green} strokeWidth="6" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={cx + len(issues)} y2={cy} stroke={green} strokeWidth="6" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={cx} y2={cy - len(reviews)} stroke={green} strokeWidth="6" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={cx} y2={cy + len(prs)} stroke={green} strokeWidth="6" strokeLinecap="round" />

      {/* End dots */}
      <circle cx={cx - len(commits)} cy={cy} r="5" fill={green} stroke="#fff" strokeWidth="2" />
      <circle cx={cx + len(issues)} cy={cy} r="5" fill={green} stroke="#fff" strokeWidth="2" />
      <circle cx={cx} cy={cy - len(reviews)} r="5" fill={green} stroke="#fff" strokeWidth="2" />
      <circle cx={cx} cy={cy + len(prs)} r="5" fill={green} stroke="#fff" strokeWidth="2" />

      {/* Top */}
      <text x={cx} y={cy - arm - offset} textAnchor="middle" fontSize="11" fontWeight="600" fill="#57606a">
        {reviews}%
      </text>
      <text x={cx} y={cy - arm - offset - 12} textAnchor="middle" fontSize="10" fill="#8b949e">
        Code review
      </text>

      {/* Bottom */}
      <text x={cx} y={cy + arm + offset} textAnchor="middle" fontSize="11" fontWeight="600" fill="#57606a">
        {prs}%
      </text>
      <text x={cx} y={cy + arm + offset + 12} textAnchor="middle" fontSize="10" fill="#8b949e">
        Pull requests
      </text>

      {/* Left */}
      <text x={cx - arm - offset} y={cy - 4} textAnchor="end" fontSize="11" fontWeight="600" fill="#57606a">
        {commits}%
      </text>
      <text x={cx - arm - offset} y={cy + 12} textAnchor="end" fontSize="10" fill="#8b949e">
        Commits
      </text>

      {/* Right */}
      <text x={cx + arm + offset} y={cy - 4} textAnchor="start" fontSize="11" fontWeight="600" fill="#57606a">
        {issues}%
      </text>
      <text x={cx + arm + offset} y={cy + 12} textAnchor="start" fontSize="10" fill="#8b949e">
        Issues
      </text>

    </svg>
  );
}