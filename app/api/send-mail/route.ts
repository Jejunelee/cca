import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { randomUUID } from 'crypto';

// Initialize Resend with API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const yourEmail = process.env.YOUR_EMAIL;
const WEBHOOK_URL = 'https://cca-manila.techops.ph/web/hook/36d5c291-c32a-4407-a67d-74635f3654c0';

// Log environment check (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Resend API Key exists:', !!resendApiKey);
  console.log('Your email exists:', !!yourEmail);
  console.log('Webhook URL configured:', !!WEBHOOK_URL);
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

    // Generate unique identifier for this submission
    const submissionId = randomUUID();
    const trackingId = `JOINUS_${Date.now()}_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

    // Log the received data (development only)
    if (process.env.NODE_ENV === 'development') {
      console.log('Received Join Us form data:', { submissionId, trackingId, interest, startDate, fullName, email, mobile, note });
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

    // Prepare payload for external webhook with unique identifiers
    const webhookPayload = {
      unique_id: submissionId,
      tracking_id: trackingId,
      timestamp: new Date().toISOString(),
      formType: 'Join Us',
      data: {
        interest,
        startDate,
        fullName,
        email,
        mobile,
        note: note || '',
      },
      source: 'CCA Connect Website',
      metadata: {
        ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        user_agent: request.headers.get('user-agent') || 'unknown',
        submitted_at: new Date().toISOString(),
      }
    };

    // Send to external webhook
    const webhookPromise = fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    }).catch(error => {
      console.error('Webhook error:', error);
      return null;
    });

    // Send email using Resend with unique IDs in the email
    const emailPromise = resend.emails.send({
      from: 'CCA Connect NoReply <leejejune2002@gmail.com>',
      to: [yourEmail || 'leejejune2002@gmail.com'],
      replyTo: email,
      subject: `[${trackingId}] New Join Us Inquiry: ${fullName} is interested in ${interest}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Join Us Inquiry from CCA Connect</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #AFCFE4 0%, #9fb8cc 100%); color: #1a2b3c; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🤝 New Join Us Inquiry!</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">Someone wants to connect with CCA Connect</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #eee; border-top: none;">
            <div style="background: #f0f0f0; padding: 10px; border-radius: 6px; margin-bottom: 20px; font-family: monospace; font-size: 12px;">
              <strong>🔑 Tracking ID:</strong> ${trackingId}<br>
              <strong>🆔 Submission ID:</strong> ${submissionId}
            </div>
            
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
            <p style="font-family: monospace; font-size: 10px; margin-top: 10px;">Reference: ${trackingId}</p>
          </div>
        </body>
        </html>
      `,
      text: `
NEW JOIN US INQUIRY FROM CRAVINGS WEBSITE

Tracking ID: ${trackingId}
Submission ID: ${submissionId}

Interest: ${interest}
Intended Start Date: ${new Date(startDate).toLocaleDateString()}
Full Name: ${fullName}
Email: ${email}
Mobile: ${mobile}
${note ? `\nAdditional Notes:\n${note}` : ''}

---
This inquiry was submitted at ${new Date().toLocaleString()}
Reference: ${trackingId}
      `,
    });

    // Execute both promises simultaneously
    const [webhookResult, emailResult] = await Promise.allSettled([webhookPromise, emailPromise]);

    // Handle email errors
    let emailError = null;
    let emailData = null;
    
    if (emailResult.status === 'rejected') {
      emailError = emailResult.reason;
      console.error('Resend error:', emailError);
      return NextResponse.json(
        { error: `Failed to send inquiry: ${emailError.message}` },
        { status: 500 }
      );
    } else {
      emailData = emailResult.value;
      if (emailData.error) {
        console.error('Resend error:', emailData.error);
        return NextResponse.json(
          { error: `Failed to send inquiry: ${emailData.error.message}` },
          { status: 500 }
        );
      }
    }

    // Log webhook result (don't fail the request if webhook fails)
    if (webhookResult.status === 'fulfilled' && webhookResult.value) {
      const webhookResponse = await webhookResult.value;
      if (webhookResponse.ok) {
        console.log('Webhook sent successfully with ID:', submissionId);
      } else {
        console.error('Webhook failed with status:', webhookResponse.status);
      }
    } else if (webhookResult.status === 'rejected') {
      console.error('Webhook request failed:', webhookResult.reason);
    }

    // Success response with unique identifiers
    return NextResponse.json(
      { 
        success: true,
        message: 'Inquiry sent successfully! You will also receive free training material.',
        data: emailData?.data,
        submissionId: submissionId,
        trackingId: trackingId
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