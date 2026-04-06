'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Server, CheckCircle, ArrowRight, Phone, Network, Database, Cloud, Lock, BarChart, Settings, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function BackendDevelopment() {
  const [showMore, setShowMore] = useState(false)
  const services = [
    {
      icon: Network,
      title: 'API Development',
      description: 'Build APIs that connect your website, mobile app, and other systems. Fast, secure, and reliable connections.',
      benefits: ['Connect all systems', 'Fast performance', 'Secure connections', 'Easy to use'],
      tools: ['REST API', 'GraphQL', 'FastAPI', 'Express.js', 'Django REST']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Organize and manage your business data efficiently. Fast access, secure storage, and easy backups.',
      benefits: ['Organized data', 'Fast access', 'Secure storage', 'Easy backups'],
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Move to the cloud for better scalability and reliability. Grow your business without worrying about infrastructure.',
      benefits: ['Easy to scale', 'More reliable', 'Save money', 'Better performance'],
      tools: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'Railway']
    },
    {
      icon: Lock,
      title: 'Server Management',
      description: 'Keep your servers running smoothly. Fast performance, reliable uptime, and secure hosting.',
      benefits: ['Fast performance', 'Reliable uptime', 'Secure hosting', '24/7 monitoring'],
      tools: ['Docker', 'Kubernetes', 'Nginx', 'PM2', 'Supervisor']
    }
  ]

  const features = [
    {
      icon: Server,
      title: 'Django & Python Backend',
      description: 'Robust backend systems built with Django framework for scalable applications. Perfect for businesses that need powerful systems.',
      benefits: ['Rapid development', 'Built-in admin panel', 'ORM integration', 'Security features'],
      userBenefit: 'Get a powerful backend system built fast. Manage everything easily and scale as your business grows.'
    },
    {
      icon: Server,
      title: 'FastAPI Development',
      description: 'High-performance APIs using FastAPI for modern web applications. Fast, modern, and easy to maintain.',
      benefits: ['Automatic documentation', 'Type hints', 'High performance', 'Easy testing'],
      userBenefit: 'Your APIs are fast and well-documented. Developers can integrate easily and your app performs better.'
    },
    {
      icon: Server,
      title: 'RESTful API Development',
      description: 'Well-designed REST APIs that follow industry best practices and standards. Reliable and easy to integrate.',
      benefits: ['RESTful architecture', 'HTTP methods', 'Status codes', 'API versioning'],
      userBenefit: 'Connect all your systems easily. Standard APIs that work with any platform or device.'
    },
    {
      icon: Server,
      title: 'Microservices Architecture',
      description: 'Scalable microservices architecture for large applications. Each service runs independently and scales as needed.',
      benefits: ['Independent scaling', 'Technology flexibility', 'Fault isolation', 'Team autonomy'],
      userBenefit: 'Your system grows with your business. Add new features without breaking existing ones.'
    }
  ]

  const technologies = [
    { name: 'django', displayName: 'Django', category: 'Backend' },
    { name: 'fastapi', displayName: 'FastAPI', category: 'Backend' },
    { name: 'nodejs', displayName: 'Node.js', category: 'Runtime' },
    { name: 'postgresql', displayName: 'PostgreSQL', category: 'Database' },
    { name: 'mongodb', displayName: 'MongoDB', category: 'Database' },
    { name: 'redis', displayName: 'Redis', category: 'Cache' },
    { name: 'amazonwebservices', displayName: 'AWS', category: 'Cloud' },
    { name: 'docker', displayName: 'Docker', category: 'DevOps' }
  ]

  const whyChoose = [
    {
      icon: CheckCircle,
      text: 'Expert backend developers who build systems that run smoothly and scale with your business.'
    },
    {
      icon: CheckCircle,
      text: 'We build backend systems that are fast, secure, and reliable so your business never stops.'
    },
    {
      icon: CheckCircle,
      text: 'From APIs to databases, we handle all backend needs so you can focus on your business.'
    },
    {
      icon: CheckCircle,
      text: 'Get ongoing support to keep your backend systems running perfectly and updated.'
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
                Backend Development
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                Strong backend systems that keep your website running smoothly. Fast, secure, and able to handle growth as your business expands. But where to find backend developers who build reliable systems?
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
                <Server className="w-32 h-32 text-accent-blue opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Why Choose Us For Backend Development?
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                
                We are a leading backend development company, offering superior backend solutions to power your applications with optimal performance.
              
              </p>
              <p>
                
                We provide robust, scalable, and secure backend systems that keep your business running smoothly and handle growth as you expand.
              
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

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Our Backend Development Services
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
              Robust backend systems and APIs for scalable applications.
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

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Modern Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use the latest backend technologies to build scalable and reliable systems.
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
                We provide real-time performance reports for backend systems, allowing you to track actual growth. Monitor your backend performance, API response times, server metrics, and business impact with comprehensive analytics and reporting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              The Benefit of Choosing a Reputable Company As Your Backend Development <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Partner</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                Our efficient backend development process optimizes performance and security while lowering administration and maintenance costs. We are committed to delivering the best backend solutions in the industry.
              </p>
              <p>
                By choosing us as your backend partner, you get access to expert developers, proven methodologies, and ongoing support that ensures your backend system continues to perform at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Control Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-accent-blue/10 via-accent-cyan/10 to-accent-blue/10 rounded-xl border border-accent-blue/20 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <Server className="w-16 h-16 text-accent-blue opacity-50" />
                  <Settings className="w-16 h-16 text-accent-cyan opacity-50" />
                  <Rocket className="w-16 h-16 text-accent-blue opacity-50" />
                  <CheckCircle className="w-16 h-16 text-accent-cyan opacity-50" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                More Control Over The <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Development Process</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Integrating management processes with the backend development phase establishes transparency and achievable business objectives. You stay informed at every step, with regular updates, clear communication, and the ability to provide feedback throughout the backend development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
