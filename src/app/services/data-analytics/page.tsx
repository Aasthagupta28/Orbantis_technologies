'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Database, CheckCircle, ArrowRight, Phone, FileBarChart, DatabaseIcon, TrendingUp, Shield, Search, Rocket, Settings, Lightbulb, MessageSquare, BarChart } from 'lucide-react'
import Link from 'next/link'

export default function DataAnalytics() {
  const [showMore, setShowMore] = useState(false)
  const services = [
    {
      icon: FileBarChart,
      title: 'Business Reports',
      description: 'Get clear reports that show how your business is performing. Understand sales, customers, and trends at a glance.',
      benefits: ['See business performance', 'Track sales easily', 'Understand customers', 'Find trends'],
      tools: ['Tableau', 'Power BI', 'Google Analytics', 'Looker', 'Metabase']
    },
    {
      icon: DatabaseIcon,
      title: 'Data Management',
      description: 'Organize and manage your business data efficiently. Fast access, secure storage, and easy backups.',
      benefits: ['All data in one place', 'Easy to find', 'Easy to update', 'Better decisions'],
      tools: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Snowflake']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track how well your business is doing. See what\'s working and what needs improvement.',
      benefits: ['Track performance', 'See what works', 'Find problems early', 'Improve results'],
      tools: ['Google Analytics 4', 'Mixpanel', 'Amplitude', 'Segment', 'Heap']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Keep your business data safe and secure. Protect customer information and business secrets.',
      benefits: ['Secure data storage', 'Protect customer info', 'Backup systems', 'Safe and reliable'],
      tools: ['AWS Security', 'Azure Security', 'Encryption', 'GDPR Compliance', 'Data Governance']
    }
  ]

  const features = [
    {
      icon: Database,
      title: 'SQL Database Design & Optimization',
      description: 'Design and optimize SQL databases for maximum performance and scalability. Your data loads faster and handles more users.',
      benefits: ['Query optimization', 'Index management', 'Performance tuning', 'Database normalization'],
      userBenefit: 'Your website loads faster, handles more traffic, and stores data efficiently - saving you money on hosting.'
    },
    {
      icon: Database,
      title: 'ETL (Extract, Transform, Load) Processes',
      description: 'Automated data pipelines that move and transform data between systems. No manual work needed - data flows automatically.',
      benefits: ['Data integration', 'Automated workflows', 'Data quality assurance', 'Real-time processing'],
      userBenefit: 'All your data stays synchronized automatically. No more manual copying or worrying about outdated information.'
    },
    {
      icon: Database,
      title: 'Data Warehousing Solutions',
      description: 'Centralized data storage and management for business intelligence and analytics. All your data in one secure place.',
      benefits: ['Centralized data storage', 'Historical data analysis', 'Business intelligence', 'Data governance'],
      userBenefit: 'Access all your business data from one place. Make better decisions with complete information at your fingertips.'
    },
    {
      icon: Database,
      title: 'Business Intelligence & Reporting',
      description: 'Clear reports and dashboards that show what\'s happening in your business. Make decisions based on real data, not guesswork.',
      benefits: ['Visual dashboards', 'Custom reports', 'Real-time insights', 'Data visualization'],
      userBenefit: 'See exactly how your business is performing. Identify opportunities and problems before they become big issues.'
    }
  ]

  const technologies = [
    { name: 'postgresql', displayName: 'PostgreSQL', category: 'Database' },
    { name: 'mongodb', displayName: 'MongoDB', category: 'Database' },
    { name: 'mysql', displayName: 'MySQL', category: 'Database' },
    { name: 'redis', displayName: 'Redis', category: 'Cache' },
    { name: 'python', displayName: 'Python', category: 'Language' },
    { name: 'pandas', displayName: 'Pandas', category: 'Library' },
    { name: 'numpy', displayName: 'NumPy', category: 'Library' },
    { name: 'jupyter', displayName: 'Jupyter', category: 'Platform' }
  ]

  const approach = [
    {
      icon: Lightbulb,
      title: 'Begin Research',
      description: 'Idea generation, discussion and consultation, research, defining objectives, and requirement gathering for your data analytics solution.'
    },
    {
      icon: Settings,
      title: 'System Architecture Design',
      description: 'Designing the data pipeline, database architecture, and analytics system for optimal performance.'
    },
    {
      icon: Rocket,
      title: 'Product Development',
      description: 'Implementation of data processing, analytics models, testing, and optimization for your business needs.'
    },
    {
      icon: MessageSquare,
      title: 'Follow up',
      description: 'Surveilling, analyzing feedback, system optimization, and all-round assistance to ensure your analytics solution meets expectations.'
    },
    {
      icon: Search,
      title: 'Evaluation',
      description: 'Implementing the analytics and evaluating the performance of your data analytics solution.'
    }
  ]

  const whyChoose = [
    {
      icon: CheckCircle,
      text: 'Expert data analysts who turn your data into clear insights you can use.'
    },
    {
      icon: CheckCircle,
      text: 'We help you understand your business better with easy-to-read reports and dashboards.'
    },
    {
      icon: CheckCircle,
      text: 'From data collection to reporting, we handle everything so you can focus on your business.'
    },
    {
      icon: CheckCircle,
      text: 'Get ongoing support to keep your data organized and reports updated.'
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
                Data & Analytics
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                Understand your business better with clear data reports. Make smart decisions based on real numbers. But where to find experts who make data easy to understand?
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
                <Database className="w-32 h-32 text-accent-blue opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Why Choose Us For Data & Analytics?
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                
                We are a leading data analytics company, offering superior data solutions to help businesses understand their performance and make better decisions.
              
              </p>
              <p>
                
                We provide clear, easy-to-understand reports and dashboards that help you see what's working and what needs improvement in your business.
              
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
              Our Data & Analytics Services
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
              Comprehensive data solutions including SQL databases, ETL processes, and business intelligence.
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
              We use the latest data analytics technologies to help you make better business decisions.
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

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Our Approach to <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Data & Analytics</span>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-accent-blue via-accent-blue to-accent-cyan">
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
                We provide real-time performance reports for data analytics solutions, allowing you to track actual growth. Monitor your data insights, business metrics, and analytics performance with comprehensive reporting tools.
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
              The Benefit of Choosing a Reputable Company As Your Data & Analytics <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Partner</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                Our efficient data analytics process optimizes performance and accuracy while lowering administration and maintenance costs. We are committed to delivering the best data solutions in the industry.
              </p>
              <p>
                By choosing us as your data analytics partner, you get access to expert data scientists, proven methodologies, and ongoing support that ensures your analytics solution continues to perform at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Control Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-accent-blue via-accent-blue to-accent-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-accent-blue/10 via-accent-cyan/10 to-accent-blue/10 rounded-xl border border-accent-blue/20 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <Database className="w-16 h-16 text-accent-blue opacity-50" />
                  <Settings className="w-16 h-16 text-accent-cyan opacity-50" />
                  <BarChart className="w-16 h-16 text-accent-blue opacity-50" />
                  <CheckCircle className="w-16 h-16 text-accent-cyan opacity-50" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                More Control Over The <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Development Process</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Integrating management processes with the data analytics development phase establishes transparency and achievable business objectives. You stay informed at every step, with regular updates, clear communication, and the ability to provide feedback throughout the analytics development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
