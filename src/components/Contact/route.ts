import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ENV CHECK
    if (!process.env.CONTACT_API_KEY) {
      console.error('❌ CONTACT_API_KEY is missing in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Example External API call (Replace with yours)
    const res = await fetch("https://api.yourmailer.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.CONTACT_API_KEY}`,
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      console.error("❌ Mail provider error:", await res.text());
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('❌ Unexpected server error:', error);
    return NextResponse.json(
      { error: 'Unexpected server error' },
      { status: 500 }
    );
  }
}
