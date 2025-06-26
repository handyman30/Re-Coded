'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Ensure we're on the client side before rendering video
    setIsClient(true)
  }, [])

  return (
    <section className="min-h-screen relative bg-black overflow-hidden">
      {/* Full-width video background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder while video loads */}
        {(!videoLoaded || !isClient) && (
          <div className="absolute inset-0">
            <Image
              src="/assets/download.png"
              alt="Loading..."
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        {/* YouTube video */}
        {isClient && (
            <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out'
            }}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source 
              src="https://s3.ap-southeast-2.amazonaws.com/recoded-banner-2.mp4/left%20-%20RESIZE%20-%20Videobolt.net.mp4"
              type="video/mp4"
            />
          </video>
        )}
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Text content overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              TECH
              <br />
              POWERED
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TALENT
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-gray-300 mb-8">
              We uncover the talent and you let it run! Connecting exceptional technology professionals with innovative companies.
            </p>
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
  )
}

export default Hero 