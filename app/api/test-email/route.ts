import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function GET(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder') {
      return NextResponse.json({
        error: 'RESEND_API_KEY is not configured',
        status: 'FAILED',
        details: 'API key missing in environment variables'
      })
    }

    // Test email configuration
    const { data, error } = await resend.emails.send({
      from: 'Recoded Website <onboarding@resend.dev>',
      to: ['hello@re-coded.com.au'],
      subject: 'Email Test - Recoded Website',
      html: `
        <h2>Email Test</h2>
        <p>This is a test email to verify Resend configuration.</p>
        <p>Time: ${new Date().toISOString()}</p>
        <p>API Key configured: ${process.env.RESEND_API_KEY ? 'YES' : 'NO'}</p>
      `,
    })

    if (error) {
      return NextResponse.json({
        error: 'Failed to send test email',
        status: 'FAILED',
        details: error,
        apiKeyConfigured: !!process.env.RESEND_API_KEY
      })
    }

    return NextResponse.json({
      success: true,
      status: 'SUCCESS',
      messageId: data?.id,
      apiKeyConfigured: !!process.env.RESEND_API_KEY
    })

  } catch (error) {
    return NextResponse.json({
      error: 'Internal server error',
      status: 'FAILED',
      details: error instanceof Error ? error.message : 'Unknown error',
      apiKeyConfigured: !!process.env.RESEND_API_KEY
    })
  }
} 