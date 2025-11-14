// src/types/github.d.ts

export interface GitHubEvent {
  id: string;
  type: string;
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    name: string;
  };
  payload: any;
  created_at: string;
}

/* PushEvent payload */
export interface GitHubPushPayload {
  commits?: {
    message: string;
  }[];
}

/* PullRequestEvent payload */
export interface GitHubPullRequestPayload {
  action: string;
  pull_request?: {
    title: string;
    merged: boolean;
  };
}

/* CreateEvent payload */
export interface GitHubCreatePayload {
  ref_type: string;
  ref: string | null;
}

/* WatchEvent payload */
export interface GitHubWatchPayload {
  action: string;
}
