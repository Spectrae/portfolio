// src/app/api/github/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type {
  GitHubEvent,
  GitHubPushPayload,
  GitHubPullRequestPayload,
  GitHubCreatePayload,
  GitHubWatchPayload
} from '@/types/github';

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET(_req: NextRequest) {
  if (!GITHUB_USERNAME) {
    return NextResponse.json(
      { error: 'Environment variable NEXT_PUBLIC_GITHUB_USERNAME is missing.' },
      { status: 400 }
    );
  }

  const url = `https://api.github.com/users/${GITHUB_USERNAME}/events/public`;

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
  };

  if (GITHUB_TOKEN) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(url, {
      headers,
      next: { revalidate: 600 }, // Revalidate cache every 10 minutes
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch GitHub events', status: res.status },
        { status: 502 }
      );
    }

    const events = (await res.json()) as GitHubEvent[];

    const filtered = events
      .filter((e) =>
        ['PushEvent', 'PullRequestEvent', 'WatchEvent', 'CreateEvent'].includes(e.type)
      )
      .map((e) => {
        let payload: any = {};

        switch (e.type) {
          case 'PushEvent': {
            const p = e.payload as GitHubPushPayload;
            payload = {
              commits: p.commits?.map((c) => ({ message: c.message })) ?? [],
            };
            break;
          }

          case 'PullRequestEvent': {
            const p = e.payload as GitHubPullRequestPayload;
            payload = {
              action: p.action,
              title: p.pull_request?.title,
              merged: p.pull_request?.merged,
            };
            break;
          }

          case 'CreateEvent': {
            const p = e.payload as GitHubCreatePayload;
            payload = {
              ref_type: p.ref_type,
              ref: p.ref,
            };
            break;
          }

          case 'WatchEvent': {
            const p = e.payload as GitHubWatchPayload;
            payload = {
              action: p.action,
            };
            break;
          }
        }

        return {
          id: e.id,
          type: e.type,
          repo: { name: e.repo.name },
          actor: {
            login: e.actor.login,
            avatar_url: e.actor.avatar_url,
          },
          created_at: e.created_at,
          payload,
        };
      });

    return NextResponse.json(filtered);
  } catch (err) {
    return NextResponse.json(
      { error: 'Exception during GitHub API request', details: String(err) },
      { status: 500 }
    );
  }
}
