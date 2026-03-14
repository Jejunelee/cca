import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const yourEmail = process.env.YOUR_EMAIL;

// Log environment check (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Resend API Key exists:', !!resendApiKey);
  console.log('Your email exists:', !!yourEmail);
}

if (!resendApiKey) {
  console.error('RESEND_API_KEY is missing from environment variables');
}

if (!yourEmail) {
  console.error('YOUR_EMAIL is missing from environment variables');
}

const resend = new Resend(resendApiKey);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { interest, startDate, fullName, email, mobile, note } = body;

    // Log the received data (development only)
    if (process.env.NODE_ENV === 'development') {
      console.log('Received Join Us form data:', { interest, startDate, fullName, email, mobile, note });
    }

    // Basic validation
    if (!interest || !startDate || !fullName || !email || !mobile) {
      return NextResponse.json(
        { error: 'All required fields must be filled out' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Resend is properly initialized
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured properly' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'CCA Connect NoReply <send@ccaconnect.co>', // Use Resend's default domain for testing
      to: [yourEmail || 'leejejune02@gmail.com'], // Fallback for testing
      replyTo: email,
      subject: `New Join Us Inquiry: ${fullName} is interested in ${interest}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Join Us Inquiry from Cravings</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #AFCFE4 0%, #9fb8cc 100%); color: #1a2b3c; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🤝 New Join Us Inquiry!</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">Someone wants to connect with Cravings</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #eee; border-top: none;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #AFCFE4; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <p><strong style="color: #1a2b3c;">🎯 Interest:</strong> ${interest}</p>
              <p><strong style="color: #1a2b3c;">📅 Intended Start Date:</strong> ${new Date(startDate).toLocaleDateString()}</p>
              <p><strong style="color: #1a2b3c;">👤 Full Name:</strong> ${fullName}</p>
              <p><strong style="color: #1a2b3c;">📧 Email:</strong> <a href="mailto:${email}" style="color: #0a0a0a;">${email}</a></p>
              <p><strong style="color: #1a2b3c;">📱 Mobile:</strong> <a href="tel:${mobile}" style="color: #0a0a0a;">${mobile}</a></p>
              ${note ? `
                <p><strong style="color: #1a2b3c;">📝 Additional Notes:</strong></p>
                <div style="margin-top: 8px; background: #f5f5f5; padding: 15px; border-radius: 6px; white-space: pre-line;">
                  ${note.replace(/\n/g, '<br>')}
                </div>
              ` : ''}
            </div>
            
            <div style="text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #AFCFE4; color: #1a2b3c; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: 500;">✉️ Reply to ${fullName}</a>
              <a href="tel:${mobile}" style="display: inline-block; background: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin: 5px; font-weight: 500;">📱 Call Now</a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This inquiry was submitted from your Cravings website Join Us form.</p>
            <p>Time received: ${new Date().toLocaleString()}</p>
          </div>
        </body>
        </html>
      `,
      text: `
NEW JOIN US INQUIRY FROM CRAVINGS WEBSITE

Interest: ${interest}
Intended Start Date: ${new Date(startDate).toLocaleDateString()}
Full Name: ${fullName}
Email: ${email}
Mobile: ${mobile}
${note ? `\nAdditional Notes:\n${note}` : ''}

---
This inquiry was submitted at ${new Date().toLocaleString()}
      `,
    });

    // Handle Resend errors
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: `Failed to send inquiry: ${error.message}` },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Inquiry sent successfully! You will also receive free training material.',
        data: data
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Server error:', error);
    
    // Return a proper JSON response even for unexpected errors
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Add OPTIONS method for CORS if needed
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}