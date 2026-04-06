'use client'

import Link from 'next/link'
import { Code, Smartphone, Brain, Palette, Database, Shield, ArrowRight, Server, Image, Search } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Our Web Development Services Transform Concepts into Stunning Websites that Reflect Your Brand and Achieve Business Goals',
      image: '/service_02.png',
      href: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Our Mobile Application development services can elevate your business growth. Let\'s connect to turn your concept into cutting edge reality',
      image: '/service_01.png',
      href: '/services/mobile-development'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Our AI-powered Systems Adapt, Learn, and Evolve to Keep Businesses Ahead in the Era of Constant Change',
      image: '/services-06.png',
      href: '/services/ai-machine-learning'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'SQL databases, ETL processes, and business intelligence solutions.',
      image: '/services-04.png',
      href: '/services/data-analytics'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Our UI/UX Design Services Help Businesses Stand Out with Engaging and Memorable User Interfaces.',
      image: '/service_03.png',
      href: '/services/ui-ux-marketing'
    },
    {
      icon: Shield,
      title: 'Testing & QA',
      description: 'Comprehensive testing solutions including automated and manual testing.',
      image: '/service_05.png',
      href: '/services/testing-qa'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust and scalable backend solutions to power your applications with optimal performance.',
      image: '/backend.png',
      href: '/services/backend-development'
    },
    {
      icon: Image,
      title: 'Graphic Design',
      description: 'Creative and compelling visual designs that capture your brand essence and engage your audience.',
      image: '/graphic.png',
      href: '/services/graphic-design'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.',
      image: '/seo.png',
      href: '/services/seo'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Services Grid - Banner Page Design */}
      <section className="relative min-h-screen flex flex-col bg-light-200 overflow-hidden pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/simple-blue-white-background-with-text-space.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="text-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Our Services
            </h2>
            <p className="max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-gray-700 font-poppins px-2 sm:px-4">
              Transform Your Business
            </p>
          </div>

          <div className="pt-2 pb-8 sm:pb-12">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className="mb-3 sm:mb-4 flex justify-center">
                      <div className={`${service.title === 'Backend Development' || service.title === 'Graphic Design' || service.title === 'SEO' ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-14 h-14 sm:w-16 sm:h-16'} flex items-center justify-center`}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-contain max-w-full max-h-full"
                          style={service.title === 'Backend Development' || service.title === 'Graphic Design' || service.title === 'SEO' ? { minWidth: '60px', minHeight: '60px' } : {}}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            const parent = e.currentTarget.parentElement
                            const isLargeIcon = service.title === 'Backend Development' || service.title === 'Graphic Design' || service.title === 'SEO'
                            if (parent) {
                              parent.innerHTML = `
                                <div class="${isLargeIcon ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-14 h-14 sm:w-16 sm:h-16'} bg-accent-blue/10 rounded-xl flex items-center justify-center">
                                  <svg class="${isLargeIcon ? 'w-12 h-12 sm:w-16 sm:h-16' : 'w-10 h-10 sm:w-12 sm:h-12'} text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
                                </div>
                              `
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base text-left leading-relaxed text-gray-700 font-poppins">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex justify-center">
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-accent-blue font-semibold text-xs sm:text-sm md:text-base hover:text-accent-cyan transition-colors group/link"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
