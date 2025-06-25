import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import OurExpertise from './components/OurExpertise'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs />
      <OurExpertise />
      <CTASection />
      <Footer />
    </main>
  )
} 