'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Upload, UserPlus, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="section-padding bg-black">
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
            className="text-xl text-gray-300 max-w-3xl mx-auto"
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
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
          >
            <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Network
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Upload your CV and become part of our exclusive talent network. We'll connect you with exciting opportunities that match your skills.
            </p>
            
            <Link href="/join" className="btn-primary inline-flex items-center gap-2">
              Upload CV <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Refer a Friend Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
          >
            <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Refer a Friend
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Know someone great? Refer them to us and earn $1,000 when we successfully place them in a new role.
            </p>
            
            <Link href="/refer" className="btn-primary inline-flex items-center gap-2">
              Refer Now <ArrowRight className="w-4 h-4" />
            </Link>
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
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 inline-block">
            <p className="text-gray-300 text-lg mb-4">
              Ready to transform your career or business?
            </p>
            <Link href="/join" className="btn-primary text-lg">
              Send us your resume
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection 