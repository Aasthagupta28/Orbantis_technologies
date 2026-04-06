'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

const ServicesPreview = dynamic(() => import('@/components/sections/ServicesPreview'), {
  loading: () => <div className="min-h-[40vh]" aria-hidden />,
})
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="min-h-[30vh]" aria-hidden />,
})
const WhoWeAre = dynamic(() => import('@/components/sections/WhoWeAre'), {
  loading: () => <div className="min-h-[40vh]" aria-hidden />,
})
const ClientReviews = dynamic(() => import('@/components/sections/ClientReviews'), {
  loading: () => <div className="min-h-[30vh]" aria-hidden />,
})
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => <div className="min-h-[24vh]" aria-hidden />,
})

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <WhoWeAre />
      <ClientReviews />
      <SkillsSection />
    </div>
  )
}
