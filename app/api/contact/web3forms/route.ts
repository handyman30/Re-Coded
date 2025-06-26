import { NextRequest, NextResponse } from 'next/server'

// Example using Web3Forms - no domain verification needed!
// Get your free access key at: https://web3forms.com

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Add your Web3Forms access key
    const formData = {
      access_key: process.env.WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
      ...body,
      // Web3Forms specific options
      subject: `New Contact from ${body.name || 'Website'}`,
      from_name: 'Recoded Website',
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ success: true, message: result.message })
    } else {
      console.error('Web3Forms error:', result)
      return NextResponse.json(
        { error: 'Failed to send message', details: result },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 