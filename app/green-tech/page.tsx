'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const GreenTechPage = () => {
  const stats = [
    { value: '>95%', label: 'client satisfaction rating' },
    { value: '<7 days', label: 'time to shortlist' },
    { value: '500+', label: 'placements across tech' },
  ]

  return (
    <main className="min-h-screen bg-[#0a2e23]">
      {/* Use the main site navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
            alt="Wind turbines in green landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Green overlay for brand color */}
          <div className="absolute inset-0 bg-[#0a2e23]/70" />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e23]/90 via-[#0a2e23]/60 to-transparent" />
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e23] via-transparent to-[#0a2e23]/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Green-Tech Logo */}
              <div className="mb-8">
                <Image
                  src="/assets/greentech-logo-full.png"
                  alt="Green-Tech by Recoded"
                  width={280}
                  height={80}
                  className="h-16 sm:h-20 w-auto"
                />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Connecting{' '}
                <span className="text-[#3ecf8e]">Climate Tech Talent</span>,
                <br />
                Decarbonising the World.
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl">
                Tech recruitment focused on renewables, storage, carbon & climate, mobility, and circular economy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-[#3ecf8e] text-[#3ecf8e] rounded-full text-base font-semibold hover:bg-[#3ecf8e] hover:text-[#0a2e23] transition-all text-center"
                >
                  Hire Climate Talent
                </a>
                <a
                  href="#join"
                  className="px-8 py-4 bg-[#3ecf8e] text-[#0a2e23] rounded-full text-base font-semibold hover:bg-[#2dd4bf] transition-all text-center"
                >
                  Join Our Network
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-8 lg:gap-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0a2e23]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Building <span className="text-[#3ecf8e]">Climate Tech Teams</span> That Matter
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Green-Tech is a specialist consultancy focused on Climate Technology in the Green Energy space.
              We connect tech and climate professionals to impact-driven companies making a difference for the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialisations Section */}
      <section id="specialisations" className="py-20 bg-[#0d3d2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Our <span className="text-[#3ecf8e]">Specialisations</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Renewables', description: 'Solar, wind, hydro and emerging renewable technologies' },
                { title: 'Energy Storage', description: 'Battery technology, grid storage and energy management systems' },
                { title: 'Carbon & Climate', description: 'Carbon capture, emissions reduction and climate analytics' },
                { title: 'E-Mobility', description: 'Electric vehicles, charging infrastructure and transport electrification' },
                { title: 'Circular Economy', description: 'Sustainable materials, recycling tech and waste reduction' },
                { title: 'Green Software', description: 'Sustainable software engineering and carbon-aware computing' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-[#0a2e23]/50 rounded-2xl border border-[#3ecf8e]/20 hover:border-[#3ecf8e]/50 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[#0a2e23]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-[#3ecf8e]">Make an Impact</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Whether you&apos;re hiring climate tech talent or looking for your next role in sustainability, we&apos;re here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:charlie@green-tech.com.au"
                className="px-8 py-4 bg-[#3ecf8e] text-[#0a2e23] rounded-full text-base font-semibold hover:bg-[#2dd4bf] transition-all"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/company/recoded"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#3ecf8e] text-[#3ecf8e] rounded-full text-base font-semibold hover:bg-[#3ecf8e] hover:text-[#0a2e23] transition-all"
              >
                Follow on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default GreenTechPage
