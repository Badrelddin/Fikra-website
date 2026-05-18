/**
 * POST /api/contact
 *
 * Accepts a contact form submission, validates it, and queues it for delivery.
 *
 * Request body (application/json):
 * {
 *   fullName:    string  — required, 2–100 chars
 *   companyName: string  — optional, max 100 chars
 *   email:       string  — required, valid email
 *   phone:       string  — optional, max 30 chars
 *   industry:    "Healthcare" | "Finance" | "Government" |
 *                "Real Estate" | "E-commerce" | "Other"  — optional
 *   projectType: "Custom Software" | "Mobile App" | "Web App" |
 *                "System Integration" | "Not sure"       — optional
 *   message:     string  — required, 10–2000 chars
 *   budgetRange: string  — optional, max 50 chars
 * }
 *
 * Responses:
 *   200 { success: true,  message: string }
 *   400 { success: false, errors: ZodFlattenedFieldErrors }
 *   429 { success: false, error: string }
 *   500 { success: false, error: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Derive the caller IP; fall back to loopback in non-proxied environments.
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      '127.0.0.1';

    // Enforce rate limit before performing any further work.
    const allowed = rateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests' },
        { status: 429 },
      );
    }

    // Parse raw JSON body. A malformed payload will throw and be caught below.
    const body: unknown = await request.json();

    // Validate against the schema.
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const data = result.data;

    // Structured log so server-side monitoring can pick it up.
    console.log('[contact] New submission received', {
      email: data.email,
      fullName: data.fullName,
      companyName: data.companyName ?? null,
      industry: data.industry ?? null,
      projectType: data.projectType ?? null,
      budgetRange: data.budgetRange ?? null,
      messageLength: data.message.length,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with sendEmail(data) — integrate nodemailer or Resend here

    return NextResponse.json(
      {
        success: true,
        message: 'Message received. We will respond within 24 hours.',
      },
      { status: 200 },
    );
  } catch (error) {
    // Log the raw error server-side but never expose internals to the caller.
    console.error('[contact] Unexpected error handling submission:', error);

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 },
    );
  }
}
