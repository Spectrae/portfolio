// src/app/api/github/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { GitHubEvent } from '@/types/github';

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET(req: NextRequest) {
  if (!GITHUB_USERNAME) {
    return NextResponse.json(
      { error: 'GITHUB_USERNAME not set' },
      { status: 400 }
    );
  }

  const url = `https://api.github.com/users/${GITHUB_USERNAME}/events/public`;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
  };
  if (GITHUB_TOKEN) headers['Authorization'] = `token ${GITHUB_TOKEN}`;

  try {
    const res = await fetch(url, { headers, next: { revalidate: 600 } }); // cache for 10 minutes
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch from GitHub', status: res.status },
        { status: 502 }
      );
    }
    const data = (await res.json()) as GitHubEvent[];
    
    // Sanitize and filter to reduce payload
    const out = data
      .filter(e => e.type === "PushEvent" || e.type === "PullRequestEvent" || e.type === "WatchEvent" || e.type === "CreateEvent")
      .map((e) => ({
        id: e.id,
        type: e.type,
        repo: { name: e.repo.name },
        actor: { login: e.actor.login, avatar_url: e.actor.avatar_url },
        created_at: e.created_at,
        payload: {
          commits: (e.payload as GitHubPushPayload)?.commits?.map(c => ({ message: c.message })),
        },
      }));

    return NextResponse.json(out);
  } catch (err) {
    return NextResponse.json(
      { error: 'Exception fetching GitHub', details: String(err) },
      { status: 500 }
    );
  }
}