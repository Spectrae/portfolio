// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail'; // Adjust path if needed

// Initialize Resend with your API key
// This key should be in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // --- 1. Validate the Data ---
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      // Return validation errors
      return NextResponse.json(
        { errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Get the validated data
    const { name, email, message } = validation.data;

    // --- 2. Send the Email ---
    const { data, error } = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: ["srick2004@gmail.com"],
      subject: `New Message from ${name} via Portfolio`,
      
      // --- THIS IS THE FIX ---
      replyTo: [email], 
      
      react: ContactEmail({
        name,
        email,
        message,
      }),
    });

    // Handle Resend errors
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // --- 3. Send Success Response ---
    return NextResponse.json(
      { message: 'Your message has been sent successfully!', data },
      { status: 200 }
    );

  } catch (error) {
    // Handle other errors (e.g., req.json() failing)
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}