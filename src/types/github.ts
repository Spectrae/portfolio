// src/types/github.ts
export type GitHubEventType =
  | 'PushEvent'
  | 'PullRequestEvent'
  | 'IssuesEvent'
  | 'IssueCommentEvent'
  | 'WatchEvent'
  | 'CreateEvent'
  | 'ForkEvent'
  | string;

export interface GitHubUserBrief {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepoBrief {
  id: number;
  name: string; // "owner/repo"
  url: string; // API url
  html_url?: string;
}

export interface GitHubPushPayload {
  push_id: number;
  size: number;
  commits: Array<{
    sha: string;
    message: string;
    url: string;
    author: { name: string; email?: string };
  }>;
}

export interface GitHubBaseEvent {
  id: string;
  type: GitHubEventType;
  actor: GitHubUserBrief;
  repo: GitHubRepoBrief;
  created_at: string; // ISO timestamp
  payload?: any;
}

export interface GitHubEvent extends GitHubBaseEvent {
  // payload typed more specifically for push events
  payload?: GitHubPushPayload | Record<string, unknown>;
}