'use client'

import { motion } from 'framer-motion'
import { Briefcase, Target, TrendingUp, Users, CheckCircle, Calendar, Award, Zap } from 'lucide-react'
import { useRef } from 'react'

export default function CaseStudy() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    content: useRef<HTMLElement>(null)
  }

  const caseStudyFeatures = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every project starts with clear objectives and measurable outcomes.'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'We focus on delivering tangible business value and ROI.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you every step of the way.'
    },
    {
      icon: Award,
      title: 'Proven Success',
      description: 'Track record of successful projects across various industries.'
    }
  ]

  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'TechStart Inc.',
      industry: 'Retail & E-Commerce',
      year: '2024',
      challenge: 'TechStart Inc. needed a modern, scalable e-commerce platform to replace their outdated system and support rapid business growth.',
      solution: 'We developed a full-stack e-commerce solution using React, Django, and PostgreSQL with integrated payment processing, inventory management, and analytics.',
      results: [
        '300% increase in online sales within 6 months',
        '50% reduction in page load time',
        '99.9% uptime with improved scalability',
        'Enhanced user experience with modern UI/UX'
      ],
      technologies: ['React', 'Django', 'PostgreSQL', 'Stripe', 'AWS', 'Redis'],
      image: '/simple-blue-white-background-with-text-space.jpg',
      category: 'Web Development'
    },
    {
      title: 'AI-Powered Customer Support System',
      client: 'SupportPro Solutions',
      industry: 'Customer Service',
      year: '2024',
      challenge: 'SupportPro needed an intelligent chatbot to handle customer inquiries 24/7 and reduce support team workload.',
      solution: 'We built an AI-powered customer support chatbot using OpenAI GPT-4, integrated with their existing CRM system for seamless operations.',
      results: [
        '80% reduction in support ticket volume',
        '24/7 customer support availability',
        '90% customer satisfaction rate',
        '60% cost savings on support operations'
      ],
      technologies: ['OpenAI', 'Python', 'FastAPI', 'React', 'LangChain', 'PostgreSQL'],
      image: '/1d19d578-7d3a-454b-9ce3-2dae3fd63c7b.jpg',
      category: 'AI & Automation'
    },
    {
      title: 'Mobile Banking Application',
      client: 'SecureBank',
      industry: 'Financial Services',
      year: '2023',
      challenge: 'SecureBank required a secure, user-friendly mobile banking app with advanced security features and real-time transaction capabilities.',
      solution: 'We developed a cross-platform mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.',
      results: [
        '500K+ active users within first year',
        'Zero security breaches',
        '4.8/5 app store rating',
        '40% increase in mobile transactions'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Biometric Auth', 'Blockchain'],
      image: '/simple-blue-white-background-with-text-space.jpg',
      category: 'Mobile Development'
    },
    {
      title: 'Data Analytics Dashboard',
      client: 'DataFlow Corp',
      industry: 'Business Intelligence',
      year: '2023',
      challenge: 'DataFlow needed a comprehensive analytics dashboard to visualize business metrics and make data-driven decisions.',
      solution: 'We created a real-time business intelligence dashboard with interactive charts, automated reports, and advanced data visualization capabilities.',
      results: [
        'Real-time data processing and visualization',
        '50% faster decision-making process',
        'Comprehensive insights across all departments',
        'Automated reporting saved 20 hours/week'
      ],
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
      image: '/1d19d578-7d3a-454b-9ce3-2dae3fd63c7b.jpg',
      category: 'Data Analytics'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section 
        ref={sectionRefs.hero}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/simple-blue-white-background-with-text-space.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20 z-[5]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <Briefcase className="w-6 h-6 text-purple-600 mr-3" />
              <span className="text-gray-900 font-semibold font-poppins">Case Studies</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-poppins font-bold text-gray-900 mb-6"
            >
              Success <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">Stories</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-inter"
            >
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Features Section */}
      <section className="py-16 bg-gradient-to-br from-light-200 via-white to-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {caseStudyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">
                  {feature.title}
                </h3>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        ref={sectionRefs.content}
        className="relative py-24 bg-white overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-5">
          <img
            src="/simple-blue-white-background-with-text-space.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Featured <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p 
              style={{
                fontSize: '18px',
                lineHeight: '1.44',
                fontWeight: 400,
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}
              className="max-w-3xl mx-auto"
            >
              Explore detailed case studies showcasing our successful projects and the impact we've made for our clients.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full min-h-[400px]">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/simple-blue-white-background-with-text-space.jpg'
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-purple-600 font-poppins">
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span 
                          style={{
                            fontSize: '16px',
                            lineHeight: '1.44',
                            fontWeight: 400,
                            color: '#666',
                            fontFamily: 'Poppins, sans-serif'
                          }}
                        >
                          {study.year}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span 
                          style={{
                            fontSize: '16px',
                            lineHeight: '1.44',
                            fontWeight: 400,
                            color: '#666',
                            fontFamily: 'Poppins, sans-serif'
                          }}
                        >
                          {study.client}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>

                    <div className="mb-6">
                      <span 
                        style={{
                          fontSize: '16px',
                          lineHeight: '1.44',
                          fontWeight: 500,
                          color: '#666',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                        className="text-purple-600"
                      >
                        {study.industry}
                      </span>
                    </div>

                    <div className="space-y-6">
                      {/* Challenge */}
                      <div>
                        <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-2 flex items-center">
                          <Target className="w-5 h-5 text-purple-600 mr-2" />
                          Challenge
                        </h4>
                        <p 
                          style={{
                            fontSize: '18px',
                            lineHeight: '1.44',
                            fontWeight: 400,
                            color: '#555',
                            fontFamily: 'Poppins, sans-serif'
                          }}
                        >
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-2 flex items-center">
                          <Zap className="w-5 h-5 text-pink-600 mr-2" />
                          Solution
                        </h4>
                        <p 
                          style={{
                            fontSize: '18px',
                            lineHeight: '1.44',
                            fontWeight: 400,
                            color: '#555',
                            fontFamily: 'Poppins, sans-serif'
                          }}
                        >
                          {study.solution}
                        </p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-3 flex items-center">
                          <TrendingUp className="w-5 h-5 text-rose-600 mr-2" />
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <motion.li
                              key={resultIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: resultIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                              <span 
                                style={{
                                  fontSize: '18px',
                                  lineHeight: '1.44',
                                  fontWeight: 400,
                                  color: '#555',
                                  fontFamily: 'Poppins, sans-serif'
                                }}
                              >
                                {result}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 px-4 py-2 rounded-full text-sm font-medium text-purple-700 font-poppins"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

