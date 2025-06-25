'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About <span className="gradient-text">Us</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                With successful backgrounds in technology recruitment and IT consulting, Recoded was developed out of a desire to look at recruitment and consulting differently. We believe the industry hasn't significantly changed in a long time, and we are looking at recoding the solutions we build, relationships we foster and services we provide to our customers.
              </p>
              
              <p>
                We want to ensure that what we do remains simple but is delivered to an exceptional level of standard across a breadth of technical specialisations.
              </p>
              
              <p>
                Recruitment is scientific. We understand that every problem needs a different solution, and we use data driven decisions to give you informed choices when transforming your business into a higher performing organisation.
              </p>
              
              <p>
                By applying well-thought-out strategies, Recoded will make your business more efficient, increase the return on your talent investment and reduce risk.
              </p>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-gradient rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500 rounded-full opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold gradient-text mb-6">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To bridge the gap between exceptional technology talent and innovative companies, creating lasting partnerships that drive success in the digital age.
                </p>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">500+</div>
                    <div className="text-sm text-gray-600">Placements Made</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">95%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs 