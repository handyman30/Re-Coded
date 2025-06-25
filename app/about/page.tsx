import React from 'react'
import Navigation from '../components/Navigation'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutUs />
      </div>
      <Footer />
    </main>
  )
} 