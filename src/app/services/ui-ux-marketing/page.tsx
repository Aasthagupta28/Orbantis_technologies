'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Palette, CheckCircle, ArrowRight, Phone, Paintbrush, Megaphone, Share2, Target, BarChart, Settings, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function UIUXMarketing() {
  const [showMore, setShowMore] = useState(false)
  const services = [
    {
      icon: Paintbrush,
      title: 'Website Design',
      description: 'Beautiful website designs that make your site easy to use. When customers enjoy using your site, they stay longer and buy more.',
      benefits: ['Easy to navigate', 'Attractive design', 'Better user experience', 'More conversions'],
      tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer']
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Professional logos and brand designs that make your business look trustworthy. Consistent design across all your materials.',
      benefits: ['Professional logo', 'Consistent branding', 'Builds trust', 'Memorable design'],
      tools: ['Adobe Illustrator', 'Photoshop', 'Canva Pro', 'Figma', 'Affinity Designer']
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Get more customers with digital marketing. Reach people online, build your brand, and grow your business.',
      benefits: ['Reach more customers', 'Build your brand', 'Increase sales', 'Online presence'],
      tools: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'TikTok Ads', 'Meta Business']
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Connect with customers on social media. Share your story, engage with followers, and grow your community.',
      benefits: ['Connect with customers', 'Share your story', 'Engage followers', 'Grow community'],
      tools: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later', 'Canva']
    }
  ]

  const features = [
    {
      icon: Palette,
      title: 'Figma UI/UX Design',
      description: 'Professional user interface and user experience design using Figma. Create designs that customers love to use.',
      benefits: ['User-centered design', 'Interactive prototypes', 'Design systems', 'Collaborative workflows'],
      userBenefit: 'Your website looks professional and is easy to use, making customers want to stay and buy from you.'
    },
    {
      icon: Palette,
      title: 'Brand Identity & Logo Design',
      description: 'Complete brand identity solutions including logos, color schemes, and style guides. Make your business memorable.',
      benefits: ['Logo design', 'Brand guidelines', 'Color psychology', 'Visual identity systems'],
      userBenefit: 'Customers remember your brand and trust you more. Consistent design builds recognition and loyalty.'
    },
    {
      icon: Palette,
      title: 'SEO & Content Marketing',
      description: 'Search engine optimization and content marketing strategies to improve online visibility. Get found on Google for free.',
      benefits: ['Keyword research', 'On-page optimization', 'Content strategy', 'Link building'],
      userBenefit: 'More customers find you on Google without paying for ads. Free traffic that grows over time.'
    },
    {
      icon: Target,
      title: 'Digital Marketing Strategy',
      description: 'Complete digital marketing plans that help you reach the right customers at the right time with the right message.',
      benefits: ['Targeted campaigns', 'Multi-channel marketing', 'ROI tracking', 'Conversion optimization'],
      userBenefit: 'Reach customers who actually want your products. Spend marketing money wisely and see real results.'
    }
  ]

  const technologies = [
    { name: 'figma', displayName: 'Figma', category: 'Design' },
    { name: 'photoshop', displayName: 'Photoshop', category: 'Design' },
    { name: 'illustrator', displayName: 'Illustrator', category: 'Design' },
    { name: 'xd', displayName: 'Adobe XD', category: 'Design' },
    { name: 'sketch', displayName: 'Sketch', category: 'Design' },
    { name: 'html5', displayName: 'HTML5', category: 'Language' },
    { name: 'css3', displayName: 'CSS3', category: 'Language' },
    { name: 'javascript', displayName: 'JavaScript', category: 'Language' }
  ]

  const whyChoose = [
    {
      icon: CheckCircle,
      text: 'Expert designers who create designs that customers love and that bring results.'
    },
    {
      icon: CheckCircle,
      text: 'We design websites and brands that make your business look professional and trustworthy.'
    },
    {
      icon: CheckCircle,
      text: 'From logo design to digital marketing, we help you build a strong online presence.'
    },
    {
      icon: CheckCircle,
      text: 'Get ongoing support to keep your designs updated and marketing campaigns running.'
    }
  ]

  return (
    <div className="min-h-screen bg-light-200">
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 mb-6">
                UI/UX & Digital Marketing
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                Beautiful designs that make your website easy to use. When customers enjoy using your site, they stay longer and buy more. But where to find designers who create designs that actually work?
              </p>
              <p className="text-base sm:text-lg text-gray-900 mb-8 font-semibold">
                See what sets us apart:
              </p>
              
              <div className="space-y-4 mb-8">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm sm:text-base">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-accent-blue to-accent-cyan text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  LET'S TALK
                </Link>
                <a
                  href="tel:+919805871945"
                  className="inline-flex items-center text-gray-700 hover:text-accent-blue transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="text-lg font-semibold">+91 9805871945</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-full h-96 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-lg">
                <Palette className="w-32 h-32 text-accent-blue opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Why Choose Us For UI/UX & Digital Marketing?
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                
                We are a leading design and digital marketing company, offering superior design and marketing services to help businesses build a strong online presence.
              
              </p>
              <p>
                
                We provide beautiful designs and effective marketing strategies that help you attract more customers and grow your business online.
              
              </p>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p>
                    We create custom solutions and have expertise in various technologies and services, among other things.
                  </p>
                  <p>
                    Our solutions are created with the most up-to-date tools and technologies and are secure, reliable, and scalable, allowing organizations to achieve their goals.
                  </p>
                </motion.div>
              )}
            </div>
            <div className="mt-8">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-gray-300"
              >
                {showMore ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-accent-blue via-accent-blue to-accent-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Our UI/UX & Digital Marketing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 border-2 border-accent-blue rounded-xl flex items-center justify-center bg-accent-blue/10">
                    <service.icon className="w-10 h-10 text-accent-blue" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete design and digital marketing solutions for business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-200 rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-accent-blue mb-2">How This Helps You:</p>
                  <p className="text-gray-700 text-sm">{feature.userBenefit}</p>
                </div>

                <div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-accent-blue via-accent-blue to-accent-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Modern Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use the latest design and marketing tools to create effective campaigns.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-light-200 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 border border-gray-200 min-h-[120px] sm:min-h-[140px]"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 flex items-center justify-center">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-original.svg`}
                    alt={tech.displayName || tech.name}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const parent = e.currentTarget.parentElement
                      if (parent) {
                        const displayName = tech.displayName || tech.name
                        parent.innerHTML = `
                          <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-xl flex items-center justify-center mb-3">
                            <span class="text-white font-bold text-lg sm:text-xl">${displayName.charAt(0)}</span>
                          </div>
                          <h3 class="text-sm sm:text-base font-poppins font-bold text-gray-900 text-center">${displayName}</h3>
                        `
                      }
                    }}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-poppins font-bold text-gray-900 text-center">{tech.displayName || tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Improve Your Design & Marketing?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss how design and marketing can help your business. Contact us for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-accent-blue to-accent-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
