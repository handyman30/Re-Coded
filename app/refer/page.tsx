'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Users, DollarSign, CheckCircle, ArrowRight, Star } from 'lucide-react'

export default function ReferPage() {
  const [formData, setFormData] = useState<{
    referrerName: string;
    referrerEmail: string;
    referrerPhone: string;
    friendName: string;
    friendEmail: string;
    friendPhone: string;
    friendSkills: string;
    relationship: string;
    additionalInfo: string;
  }>({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    friendName: '',
    friendEmail: '',
    friendPhone: '',
    friendSkills: '',
    relationship: '',
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Referral submitted:', formData)
  }

  const steps = [
    {
      number: 1,
      title: 'Submit Referral',
      description: 'Tell us about your talented friend using our simple form.'
    },
    {
      number: 2,
      title: 'We Connect',
      description: 'Our team reaches out to your referral to discuss opportunities.'
    },
    {
      number: 3,
      title: 'Successful Placement',
      description: 'When they secure a role through us, you earn your reward.'
    },
    {
      number: 4,
      title: 'Get Rewarded',
      description: 'Receive $1,000 as a thank you for the successful referral.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Refer a <span className="gradient-text">Friend</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Good people refer good people. Share the opportunity and earn $1,000 for successful placements.
            </p>
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, -2, 2, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <span className="text-2xl font-bold text-green-400">$1,000</span>
              <span className="text-gray-200">Referral Reward</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our referral process is simple and transparent. Here's how you can start earning rewards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Referral Form */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Submit Your <span className="gradient-text">Referral</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your talented friend and start the referral process.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {/* Your Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Your Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="referrerName"
                    name="referrerName"
                    required
                    value={formData.referrerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="referrerEmail"
                    name="referrerEmail"
                    required
                    value={formData.referrerEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="referrerPhone"
                  name="referrerPhone"
                  value={formData.referrerPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Friend's Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-600" />
                Friend's Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="friendName" className="block text-sm font-medium text-gray-700 mb-2">
                    Friend's Name *
                  </label>
                  <input
                    type="text"
                    id="friendName"
                    name="friendName"
                    required
                    value={formData.friendName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="friendEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Friend's Email *
                  </label>
                  <input
                    type="email"
                    id="friendEmail"
                    name="friendEmail"
                    required
                    value={formData.friendEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="friendPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Friend's Phone Number
                </label>
                <input
                  type="tel"
                  id="friendPhone"
                  name="friendPhone"
                  value={formData.friendPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="friendSkills" className="block text-sm font-medium text-gray-700 mb-2">
                  Friend's Skills & Experience *
                </label>
                <textarea
                  id="friendSkills"
                  name="friendSkills"
                  rows={4}
                  required
                  value={formData.friendSkills}
                  onChange={handleInputChange}
                  placeholder="Tell us about their technical skills, experience level, and what type of roles they're interested in..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Relationship
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select relationship</option>
                  <option value="colleague">Current/Former Colleague</option>
                  <option value="friend">Personal Friend</option>
                  <option value="classmate">University/School Friend</option>
                  <option value="professional">Professional Contact</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Any additional information that might help us connect with your friend..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
            >
              Submit Referral <ArrowRight className="w-5 h-5" />
            </button>
          </motion.form>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Terms and Conditions:</span> Minimum 6 month employment period required.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 