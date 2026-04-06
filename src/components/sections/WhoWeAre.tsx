'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const WhoWeAre = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-blue">
                WHO WE ARE
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-gray-900 mb-4 sm:mb-6">
            Where ideas take shape and become reality
            </h2>
            
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-left leading-relaxed text-gray-700 font-poppins">
              Over the years, we drive innovation and deliver impactful solutions across the digital landscape. 
              Our unwavering commitment to excellence has established a legacy of remarkable achievements. 
              We harness technology to unlock unparalleled growth and shape a brighter future for your business. 
              Let's partner to rewrite the rules and leave a lasting impact on the world.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-accent-blue to-accent-cyan text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
            <motion.img
              src="/hst-03.png"
              alt="Who We Are"
              className="w-full h-full object-contain"
              animate={{ y: [0, -20, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut"
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre

