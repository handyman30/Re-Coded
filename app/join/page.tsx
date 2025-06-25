'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Upload, User, Mail, Phone, MapPin, FileText, CheckCircle } from 'lucide-react'

export default function JoinPage() {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    experience: string;
    skills: string;
    resume: File | null;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    skills: '',
    resume: null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Exclusive Opportunities',
      description: 'Access to premium roles that aren\'t advertised elsewhere.'
    },
    {
      icon: CheckCircle,
      title: 'Learning Investment',
      description: 'Up to $500 investment in courses or conferences for successful placements.'
    },
    {
      icon: CheckCircle,
      title: 'Career Guidance',
      description: 'Personalized career advice from technology recruitment experts.'
    },
    {
      icon: CheckCircle,
      title: 'Fast-Track Process',
      description: 'Streamlined interview process with direct client connections.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Join Our <span className="gradient-text">Network</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Connect with leading technology companies and accelerate your career growth with Recoded.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="gradient-text">Recoded?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to supporting your career journey beyond just placement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg card-hover"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Upload Your <span className="gradient-text">CV</span>
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards your next career opportunity.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Melbourne, Australia"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select experience level</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                Key Skills & Technologies
              </label>
              <textarea
                id="skills"
                name="skills"
                rows={4}
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="e.g., React, Node.js, AWS, Python, DevOps..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume/CV *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors duration-300">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="resume" className="cursor-pointer">
                  <span className="text-purple-600 font-medium">Click to upload</span> or drag and drop
                  <p className="text-sm text-gray-500 mt-2">PDF, DOC, or DOCX (max 5MB)</p>
                  {formData.resume && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ {formData.resume.name}
                    </p>
                  )}
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              Submit Application
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  )
} 