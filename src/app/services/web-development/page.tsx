'use client'

import { motion } from 'framer-motion'
import { Code, CheckCircle, ArrowRight, Phone, ShoppingCart, Building, Layers, Brackets, Search, Rocket, Settings, Lightbulb, MessageSquare, BarChart, TrendingUp, Gauge, Shield } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function WebDevelopment() {
  const [showMore, setShowMore] = useState(false)
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Build online stores that help you sell products 24/7. Get secure payment systems, easy inventory management, and mobile-friendly shopping experience.',
      benefits: ['Sell products online', 'Secure payments', 'Easy to manage', 'Works on all devices'],
      tools: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal']
    },
    {
      icon: Building,
      title: 'CMS',
      description: 'Professional content management systems that make it easy to update your website. No coding needed - just edit and publish.',
      benefits: ['Easy to update', 'No coding needed', 'Multiple users', 'Content control'],
      tools: ['WordPress', 'Drupal', 'Strapi', 'Contentful', 'Sanity']
    },
    {
      icon: Layers,
      title: 'API & Backend',
      description: 'Strong backend systems that keep your website running smoothly. Secure data storage, fast performance, and reliable service.',
      benefits: ['Fast performance', 'Secure data', 'Reliable service', 'Easy to scale'],
      tools: ['REST API', 'GraphQL', 'Node.js', 'Django', 'FastAPI']
    },
    {
      icon: Brackets,
      title: 'Custom Development',
      description: 'Get web apps built specifically for your business needs. Automate your work, manage data better, and improve productivity.',
      benefits: ['Built for your needs', 'Save time', 'Better data management', 'Increase productivity'],
      tools: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript']
    }
  ]

  const approach = [
    {
      icon: Search,
      title: 'Evaluation',
      description: 'Implementing the analytics and evaluating the performance.'
    },
    {
      icon: MessageSquare,
      title: 'Follow up',
      description: 'Surveilling, analyzing feedback, and all-round assistance.'
    },
    {
      icon: Lightbulb,
      title: 'Begin Research',
      description: 'Idea generation, discussion and consultation, research, defining objectives, and requirement gathering.'
    },
    {
      icon: Settings,
      title: 'System Architecture Design',
      description: 'Wireframing, UI/UX Designing, and Prototyping are all aspects of the system architecture design process.'
    },
    {
      icon: Rocket,
      title: 'Product Development',
      description: 'Implementation of functional features, software coding, and optimization.'
    }
  ]

  const technologies = [
    { name: 'php', displayName: 'PHP', category: 'Backend' },
    { name: 'laravel', displayName: 'Laravel', category: 'Framework' },
    { name: 'magento', displayName: 'Magento', category: 'E-commerce' },
    { name: 'wordpress', displayName: 'WordPress', category: 'CMS' },
    { name: 'woocommerce', displayName: 'WooCommerce', category: 'E-commerce' },
    { name: 'html5', displayName: 'HTML5', category: 'Language' },
    { name: 'bootstrap', displayName: 'Bootstrap', category: 'Framework' },
    { name: 'javascript', displayName: 'JavaScript', category: 'Language' },
    { name: 'jquery', displayName: 'jQuery', category: 'Library' },
    { name: 'angularjs', displayName: 'Angular', category: 'Framework' },
    { name: 'react', displayName: 'React', category: 'Framework' },
    { name: 'ionic', displayName: 'Ionic', category: 'Framework' },
    { name: 'css3', displayName: 'CSS3', category: 'Language' },
    { name: 'nodejs', displayName: 'Node.js', category: 'Runtime' }
  ]

  const whyChoose = [
    {
      icon: CheckCircle,
      text: 'UAE\'s leading digital performance professionals and specialists, all under one roof.'
    },
    {
      icon: CheckCircle,
      text: 'Credibility is our virtue! Our leading technicians show confidence in us, and many new ones with big aspirations are partnering with us.'
    },
    {
      icon: CheckCircle,
      text: 'Backed by expertise and capabilities of leading independent partners and certified professionals.'
    },
    {
      icon: CheckCircle,
      text: 'Find Web development, designing, marketing, consultation, IT support, and more all in one place.'
    }
  ]

  return (
    <div className="min-h-screen bg-light-200">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 mb-6">
                Web Development Company
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                A professional and smartly developed website can take your business to the other side of the globe, crossing local boundaries. But where to get such a website constructed? Where to find a web development company that goes beyond aesthetic appeal?
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
                <Code className="w-32 h-32 text-accent-blue opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Why Choose Us For <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Web Development</span>?
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                We are a leading web design and development company, offering superior web development services to create customized websites, web apps, web tools, etc., for global business organizations and startups.
              </p>
              <p>
                We provide high-end, secure, intuitive, and top-notch web services with 100% project delivery. We specialize in developing multi-level business-grade web solutions to fulfill a wide range of corporate requirements.
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
                    We create custom web portals, B2B and B2C applications, e-commerce solutions and have expertise in CMS and backend development as well as API services, among other things.
                  </p>
                  <p>
                    Our business IT and web solutions are created with the most up-to-date development tools and technologies and are secure, reliable, and scalable, allowing organizations to achieve their goals.
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

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Our Web Development <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Services</span>
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
                {service.title === 'E-Commerce' && (
                  <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      We're a prominent eCommerce web development company that creates stunning web-based eCommerce solutions for the best online shopping experiences.
                    </p>
                    <p>
                      From aspiring new startups to medium-large scale organizations, we provide eCommerce website development services to all, that includes full-featured web designing of online eCommerce store and bespoke eCommerce web development.
                    </p>
                    <p>
                      We have experience in Magento-based e-commerce website development, Shopify, WooCommerce, and many others, enabling us to serve your e-commerce needs in the best way possible.
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-light-200 rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-accent-blue mb-2">Key Benefits:</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-2">Modern Tools We Use:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-xs font-medium rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Our Approach to <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Web Development</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {approach.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-poppins font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results That You Can Measure Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-lg">
                <BarChart className="w-32 h-32 text-accent-blue opacity-30" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                Results That You Can <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Measure</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide real-time performance reports for websites and apps, allowing you to track actual growth. Monitor your website's performance, user engagement, conversion rates, and business metrics with comprehensive analytics and reporting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge Technology Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Cutting-Edge Web Technology That Provides You a <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Competitive Advantage</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our web professionals leverage new technologies for client benefits and long-term advantages. We stay updated with the latest frameworks, tools, and best practices to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6">
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
                      // Fallback to text if logo doesn't load
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

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              The Benefit of Choosing a Reputable Company As Your Web Development <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Partner</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                Our efficient web design process optimizes performance and security while lowering administration and maintenance costs. We are committed to delivering the best web development solutions in the industry.
              </p>
              <p>
                By choosing us as your web development partner, you get access to expert developers, proven methodologies, and ongoing support that ensures your website continues to perform at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Control Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-accent-blue/10 via-accent-cyan/10 to-accent-blue/10 rounded-xl border border-accent-blue/20 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <Code className="w-16 h-16 text-accent-blue opacity-50" />
                  <Settings className="w-16 h-16 text-accent-cyan opacity-50" />
                  <Layers className="w-16 h-16 text-accent-blue opacity-50" />
                  <Shield className="w-16 h-16 text-accent-cyan opacity-50" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                More Control Over The <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Development Process</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Integrating management processes with the development phase establishes transparency and achievable business objectives. You stay informed at every step, with regular updates, clear communication, and the ability to provide feedback throughout the development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
