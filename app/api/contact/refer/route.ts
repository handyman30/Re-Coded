import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

// Use test email in development, client email in production
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'hello@re-coded.com.au'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Extract form fields
    const {
      referrerName,
      referrerEmail,
      referrerPhone,
      friendName,
      friendEmail,
      friendPhone,
      friendSkills,
      relationship,
      additionalInfo
    } = body

    // Validate required fields
    if (!referrerName || !referrerEmail || !friendName || !friendEmail || !friendSkills) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailContent = `
      <h2>New Referral Submission</h2>
      
      <h3>Referrer Information</h3>
      <p><strong>Name:</strong> ${referrerName}</p>
      <p><strong>Email:</strong> ${referrerEmail}</p>
      <p><strong>Phone:</strong> ${referrerPhone || 'Not provided'}</p>
      
      <h3>Candidate Information</h3>
      <p><strong>Name:</strong> ${friendName}</p>
      <p><strong>Email:</strong> ${friendEmail}</p>
      <p><strong>Phone:</strong> ${friendPhone || 'Not provided'}</p>
      <p><strong>Relationship:</strong> ${relationship || 'Not specified'}</p>
      
      <h3>Skills & Experience</h3>
      <p>${friendSkills}</p>
      
      ${additionalInfo ? `<h3>Additional Information</h3><p>${additionalInfo}</p>` : ''}
    `

    // Send email to Recoded
    console.log(`Attempting to send referral email to: ${RECIPIENT_EMAIL}`)
    const { data, error } = await resend.emails.send({
      from: 'Recoded Website <onboarding@resend.dev>',
      to: [RECIPIENT_EMAIL],
      subject: `New Referral: ${friendName} (referred by ${referrerName})`,
      html: emailContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to referrer
    await resend.emails.send({
      from: 'Recoded <onboarding@resend.dev>',
      to: [referrerEmail],
      subject: 'Referral Received - Thank You!',
      html: `
        <h2>Thank you for your referral!</h2>
        <p>Hi ${referrerName},</p>
        <p>We've received your referral for ${friendName}. Our team will reach out to them soon to discuss potential opportunities.</p>
        <p>If they're successfully placed in a role through Recoded and meet our terms and conditions, you'll receive your $1,000 referral reward.</p>
        <p>We'll keep you updated on the progress.</p>
        <p>Best regards,<br>The Recoded Team</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error processing referral:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 