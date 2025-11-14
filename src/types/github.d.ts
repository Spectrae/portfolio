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

/* PushEvent Payload */
export interface GitHubPushPayload {
  commits?: {
    message: string;
  }[];
}

/* PullRequestEvent Payload */
export interface GitHubPullRequestPayload {
  action: string;
  pull_request?: {
    title: string;
    merged: boolean;
  };
}

/* CreateEvent Payload (repo/branch creation) */
export interface GitHubCreatePayload {
  ref_type: string;
  ref: string | null;
}

/* WatchEvent Payload (starring a repo) */
export interface GitHubWatchPayload {
  action: string;
}
