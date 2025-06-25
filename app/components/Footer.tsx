'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image
              src="/assets/Recoded Long Logo (White).png"
              alt="RECODED"
              width={150}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Unlocking business potential with expert-led technology solutions. 
              We bridge the gap between exceptional talent and innovative companies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-300 hover:text-white transition-colors duration-200">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Join Our Network
                </Link>
              </li>
              <li>
                <Link href="/refer" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Refer a Friend
                </Link>
              </li>
              <li>
                <a
                  href="https://recoded.oncoreservices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Timesheets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    501 Bourke Street<br />
                    Melbourne, Victoria 3000<br />
                    Australia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="mailto:hello@re-coded.com.au"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  hello@re-coded.com.au
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Recoded Pty Ltd. ABN 41 638 810090. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Tech Powered Talent
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 