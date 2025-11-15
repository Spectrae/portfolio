// app/api/github-activity/route.ts

import { NextResponse } from 'next/server';

type GHEvent = any;

// Categorize GitHub event types
function mapEventToCategory(event: GHEvent) {
  const t = event.type;

  if (t === 'PushEvent') return 'commits';
  if (t === 'PullRequestReviewEvent') return 'code_review';
  if (t === 'PullRequestEvent') return 'pull_request';
  if (t === 'IssuesEvent') return 'issues';

  return 'other';
}

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return NextResponse.json(
      { error: 'Environment variable NEXT_PUBLIC_GITHUB_USERNAME missing' },
      { status: 400 }
    );
  }

  const url = `https://api.github.com/users/${username}/events/public`;

  const headers: Record<string, string> = {
    'User-Agent': 'nextjs-github-activity',
    Accept: 'application/vnd.github+json',
  };

  // Authenticated = higher rate limits
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, { headers });

    // Check GitHub API error
    if (!res.ok) {
      const details = await res.text();
      return NextResponse.json(
        {
          error: `GitHub API Error: ${res.status}`,
          details,
        },
        { status: res.status }
      );
    }

    const events: GHEvent[] = await res.json();

    // Analyze latest 50–60 events
    const N = Math.min(events.length, 60);

    const counts = {
      commits: 0,
      code_review: 0,
      pull_request: 0,
      issues: 0,
      other: 0,
    };

    for (let i = 0; i < N; i++) {
      const e = events[i];
      const cat = mapEventToCategory(e);

      switch (cat) {
        case 'commits':
          counts.commits += e.payload?.commits?.length ?? 1;
          break;

        case 'pull_request':
          counts.pull_request += 1;
          break;

        case 'code_review':
          counts.code_review += 1;
          break;

        case 'issues':
          counts.issues += 1;
          break;

        default:
          counts.other += 1;
      }
    }

    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;

    const percentages = {
      commits: Math.round((counts.commits / total) * 100),
      code_review: Math.round((counts.code_review / total) * 100),
      pull_request: Math.round((counts.pull_request / total) * 100),
      issues: Math.round((counts.issues / total) * 100),
      other: Math.round((counts.other / total) * 100),
    };

    // Build recent events for UI
    const recentEvents = events.slice(0, 12).map((e) => ({
      id: e.id,
      type: e.type,
      repo: e.repo?.name ?? '',
      created_at: e.created_at,
      text:
        e.type === 'PushEvent'
          ? `Pushed ${e.payload?.commits?.length ?? 1} commit(s) to ${e.repo?.name}`
          : e.type === 'PullRequestEvent'
          ? `${e.payload?.action ?? 'Updated'} pull request in ${e.repo?.name}`
          : e.type === 'PullRequestReviewEvent'
          ? `Reviewed a PR in ${e.repo?.name}`
          : e.type === 'IssuesEvent'
          ? `${e.payload?.action ?? 'Updated'} issue in ${e.repo?.name}`
          : `${e.type} in ${e.repo?.name}`,
    }));

    // Final JSON output
    return NextResponse.json(
      {
        counts,
        percentages,
        recentEvents,
        fetched_at: new Date().toISOString(),
      },
      {
        headers: {
          'Cache-Control': 's-maxage=60, stale-while-revalidate=120',
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        error: 'Server Error',
        details: err.message ?? String(err),
      },
      { status: 500 }
    );
  }
}
