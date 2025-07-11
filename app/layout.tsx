import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import ToastProvider from './components/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recoded - Tech Powered Talent',
  description: 'Unlocking business potential with expert-led technology solutions. Technology recruitment and IT consulting services.',
  keywords: 'technology recruitment, IT consulting, software engineering, DevOps, data analytics, cybersecurity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <ToastProvider />
        {children}
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
      </body>
    </html>
  )
} 