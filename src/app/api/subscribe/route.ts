// src/app/api/subscribe/route.ts

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase();

  const { error } = await supabase.auth.signUp({
    email: normalizedEmail,
    password: `helm-dummy-password-${Date.now()}`,
  });

  if (error) {
    // Log the full error object to our server console for any future debugging.
    console.log("Supabase returned an error object:", error);

    // --- THE DEFINITIVE FIX ---
    // We will now create a list of "graceful errors" that we want to treat as a success
    // from the user's perspective. We check the HTTP status code.
    const gracefulErrorStatusCodes = [
      429, // Rate Limiting: "Too Many Requests"
      409  // Conflict: "User already registered"
    ];

    const isGracefulError = gracefulErrorStatusCodes.includes((error as any).status);

    // If the error is NOT one of our graceful errors, it's a real, unexpected problem.
    if (!isGracefulError) {
      console.error('Unexpected Supabase SignUp Error:', error.message);
      return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
    }
  }

  // For a new user OR for a user triggering one of our graceful errors (429 or 409),
  // we always return a success message to the frontend.
  return NextResponse.json({ success: true }, { status: 200 });
}