'use client'

import React from 'react'

// Example of super simple form submission using FormSubmit
// No API key needed, just change the email!
export default function SimpleContactForm() {
  return (
    <form
      action="https://formsubmit.co/your-email@example.com"
      method="POST"
      className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_subject" value="New Contact from Recoded Website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      
      {/* Redirect after submission */}
      <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
      
      {/* Form fields */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
      >
        Send Message
      </button>
    </form>
  )
} 