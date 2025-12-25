'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
    </div>
  )
}
