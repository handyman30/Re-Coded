import React from 'react'
import Navigation from '../components/Navigation'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-20">
        <AboutUs />
      </div>
      <Footer />
    </main>
  )
} 