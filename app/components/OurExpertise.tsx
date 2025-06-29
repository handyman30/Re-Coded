'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  Code, 
  BarChart3, 
  Shield, 
  Briefcase, 
  Settings,
  Brain,
  Database,
  Palette 
} from 'lucide-react'

const OurExpertise = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Engineering & Architecture',
      description: 'Build scalable applications with cutting-edge development practices and architectural patterns.'
    },
    {
      icon: Cloud,
      title: 'Cloud, DevOps & SRE',
      description: 'Modernize your infrastructure with cloud-native solutions, DevOps practices, and site reliability engineering.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and threat prevention strategies.'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Unlock insights from your data with advanced analytics solutions and data-driven decision making.'
    },
    {
      icon: Brain,
      title: 'AI',
      description: 'Leverage artificial intelligence and machine learning to automate processes and gain competitive advantage.'
    },
    {
      icon: Settings,
      title: 'Infrastructure',
      description: 'Design and implement robust IT infrastructure solutions that scale with your business needs.'
    },
    {
      icon: Briefcase,
      title: 'Project Services',
      description: 'End-to-end project management and delivery services ensuring successful outcomes.'
    },
    {
      icon: BarChart3,
      title: 'Business Transformation',
      description: 'Transform your business processes with technology-driven solutions and strategic innovation.'
    },
    {
      icon: Palette,
      title: 'Digital',
      description: 'Create exceptional digital experiences through innovative design, UX/UI, and creative solutions.'
    }
  ]

  return (
    <section id="expertise" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlocking business potential with expert-led technology solutions across multiple domains.
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl p-8 shadow-lg card-hover border border-gray-800"
              >
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurExpertise 