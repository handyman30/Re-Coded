import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder') {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 503 }
      )
    }

    const formData = await request.formData()
    
    // Extract form fields
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const location = formData.get('location') as string
    const experience = formData.get('experience') as string
    const skills = formData.get('skills') as string
    const resumeFile = formData.get('resume') as File

    // Validate required fields
    if (!firstName || !lastName || !email || !resumeFile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Convert file to buffer for email attachment
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())

    // Prepare email content
    const emailContent = `
      <h2>New Talent Network Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Location:</strong> ${location || 'Not provided'}</p>
      <p><strong>Experience:</strong> ${experience || 'Not specified'}</p>
      <p><strong>Skills & Technologies:</strong></p>
      <p>${skills || 'Not provided'}</p>
    `

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: 'Recoded Website <onboarding@resend.dev>',
      to: ['hello@re-coded.com.au'],
      subject: `New Talent Application: ${firstName} ${lastName}`,
      html: emailContent,
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeBuffer,
        },
      ],
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to applicant
    await resend.emails.send({
      from: 'Recoded <onboarding@resend.dev>',
      to: [email],
      subject: 'Application Received - Recoded',
      html: `
        <h2>Thank you for your application!</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your application to join the Recoded network. Our team will review your details and get back to you soon.</p>
        <p>Best regards,<br>The Recoded Team</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 