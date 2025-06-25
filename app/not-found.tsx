import React from 'react'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              About Us
            </Link>
          </div>
          
          <div className="mt-12 text-gray-300">
            <p>Need help? Contact us at <a href="mailto:hello@re-coded.com.au" className="text-purple-300 hover:text-white">hello@re-coded.com.au</a></p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 