'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Upload, UserPlus, ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-purple-100 max-w-3xl mx-auto"
          >
            Join our network of exceptional talent or find the perfect candidates for your team.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload CV Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Network
            </h3>
            
            <p className="text-purple-100 mb-6 leading-relaxed">
              Upload your CV and become part of our exclusive talent network. We'll connect you with exciting opportunities that match your skills.
            </p>
            
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center gap-2">
              Upload CV <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Refer a Friend Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Refer a Friend
            </h3>
            
            <p className="text-purple-100 mb-6 leading-relaxed">
              Know someone great? Refer them to us and earn $1,000 when we successfully place them in a new role.
            </p>
            
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center gap-2">
              Refer Now <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 inline-block">
            <p className="text-white text-lg mb-4">
              Ready to transform your career or business?
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 text-lg">
              Send us your resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection 