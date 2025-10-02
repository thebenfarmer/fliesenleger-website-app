import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Zod Schema for Contact Form Validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Bitte wählen Sie eine Leistung aus'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body with Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validierungsfehler',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Log the contact request
    console.log('Contact Form Submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Nicht angegeben',
      service: data.service,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Email Integration (Optional - requires Resend package and RESEND_API_KEY)
    // To enable email notifications:
    // 1. Install: npm install resend
    // 2. Set RESEND_API_KEY in .env.local
    // 3. Uncomment the code below

    /*
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'website@fliesenleger.de',
          to: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@fliesenleger.de',
          subject: `Neue Kontaktanfrage: ${data.service}`,
          html: `
            <h2>Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>E-Mail:</strong> ${data.email}</p>
            <p><strong>Telefon:</strong> ${data.phone || 'Nicht angegeben'}</p>
            <p><strong>Leistung:</strong> ${data.service}</p>
            <p><strong>Nachricht:</strong></p>
            <p>${data.message}</p>
            <hr>
            <p><small>Gesendet am ${new Date().toLocaleString('de-DE')}</small></p>
          `,
        });

        console.log('Email sent successfully via Resend');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
      }
    }
    */

    // TODO: Additional integrations
    // - Save to database
    // - Send auto-reply to customer
    // - Integrate with CRM system

    return NextResponse.json(
      {
        success: true,
        message: 'Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      },
      { status: 500 }
    );
  }
}
