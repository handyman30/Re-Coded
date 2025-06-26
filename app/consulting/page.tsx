'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Code, Cloud, BarChart3, Shield, Users, ArrowRight } from 'lucide-react'

export default function ConsultingPage() {
  const services = [
    {
      icon: Code,
      title: 'Legacy System Transformation',
      description: 'Modernize your legacy systems with cutting-edge technology solutions.'
    },
    {
      icon: BarChart3,
      title: 'Enterprise Program Capability Uplift',
      description: 'Deliver complex enterprise-wide programs with expert technology professionals.'
    },
    {
      icon: Cloud,
      title: 'End-to-End Project Services',
      description: 'Deliver full project lifecycle support —from strategy and design through to execution and delivery — ensuring outcomes are met with precision.'
    },
    {
      icon: Shield,
      title: 'Data Services, Solutions, and Insights',
      description: 'Harness your data and analytics solutions to drive smarter decisions and business growth.'
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
              IT <span className="gradient-text">Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock your business potential with expert-led technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                We Don't Just Advise — <span className="gradient-text">We Execute</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Recoded, we partner with organisations to solve complex challenges through tailored IT consulting services. Whether you're transforming legacy systems, building new development features, optimising DevOps pipelines or delivering enterprise-wide programs, our consultants bring deep domain expertise and a hands-on approach.
                </p>
                
                <p>
                  Our network of high-impact specialists embeds directly into your teams, accelerating delivery, reducing risk, and ensuring sustainable outcomes.
                </p>
                
                <p>
                  From short-term interventions to long-term delivery partnerships, Recoded delivers the people, process, and technology alignment that drives success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">200+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                    <div className="text-sm text-gray-600">Expert Consultants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT consulting services tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
                  >
                    <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our expert consultants can help accelerate your technology initiatives.
            </p>
            <a 
              href="mailto:hello@re-coded.com.au?subject=IT Consulting Inquiry&body=Hi, I'm interested in learning more about your IT consulting services."
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 text-lg flex items-center gap-2 mx-auto inline-flex"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 