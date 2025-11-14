// src/app/api/github/contributions/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  
  if (!username) {
    return NextResponse.json(
      { error: "Environment variable NEXT_PUBLIC_GITHUB_USERNAME is missing." },
      { status: 400 }
    );
  }

  const url = `https://github-contributions-api.jogruber.de/v4/${username}?format=json`;

  try {
    const res = await fetch(url, {
      headers: { "Cache-Control": "no-cache" },
      next: { revalidate: 3600 } // Cache for 1 hour in Vercel
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub contributions", status: res.status },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Exception during GitHub contributions request", details: String(err) },
      { status: 500 }
    );
  }
}
