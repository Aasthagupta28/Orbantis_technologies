'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, CheckCircle, AlertCircle, ArrowRight, Shield } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export default function TermsOfService() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    content: useRef<HTMLElement>(null)
  }

  const termsFeatures = [
    {
      icon: FileText,
      title: 'Clear Terms',
      description: 'Transparent and easy-to-understand terms and conditions for all our services.'
    },
    {
      icon: Scale,
      title: 'Fair Usage',
      description: 'Fair and reasonable terms that protect both parties in our business relationship.'
    },
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Comprehensive legal framework to ensure clarity and protection for all parties.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'All terms comply with applicable laws and regulations.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-accent-blue/20 to-accent-cyan/20 z-[5]"></div>

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
              <FileText className="w-6 h-6 text-accent-cyan mr-3" />
              <span className="text-gray-900 font-semibold font-poppins">Terms of Service</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-poppins font-bold text-gray-900 mb-6"
            >
              Terms of <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan bg-clip-text text-transparent">Service</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-inter"
            >
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Terms Features Section */}
      <section className="py-16 bg-gradient-to-br from-light-200 via-white to-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {termsFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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

      {/* Terms Content Section */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-200"
          >
            <div className="space-y-8">
              {/* Agreement to Terms */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Agreement to Terms
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  className="mb-6"
                >
                  By accessing or using the services provided by Orbantis Technologies, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </motion.div>

              {/* Use License */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Use License
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  className="mb-4"
                >
                  Permission is granted to temporarily access and use our services for personal or commercial purposes. This license does not include:
                </p>
                <ul className="space-y-3">
                  {[
                    'Modifying or copying materials from our website',
                    'Using materials for commercial purposes without permission',
                    'Removing copyright or proprietary notations',
                    'Transferring materials to another person or server'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <AlertCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                      <span 
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Service Description */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Service Description
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  className="mb-4"
                >
                  Orbantis Technologies provides the following services:
                </p>
                <ul className="space-y-3">
                  {[
                    'Web development and design services',
                    'Mobile application development',
                    'AI and machine learning solutions',
                    'UI/UX design services',
                    'Backend development and API integration',
                    'Data analytics and business intelligence',
                    'Testing and quality assurance services'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0 mt-1" />
                      <span 
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Payment Terms */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Payment Terms
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  className="mb-4"
                >
                  Payment terms will be specified in individual project agreements. Generally:
                </p>
                <ul className="space-y-3">
                  {[
                    'Payment schedules are agreed upon before project commencement',
                    'Invoices are due within the specified payment terms',
                    'Late payments may incur additional charges',
                    'All prices are subject to change without notice',
                    'Refunds are handled on a case-by-case basis'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                      <span 
                        style={{
                          fontSize: '18px',
                          lineHeight: '1.44',
                          fontWeight: 400,
                          color: '#555',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Intellectual Property */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Intellectual Property
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the property of Orbantis Technologies and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Limitation of Liability
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  In no event shall Orbantis Technologies be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Termination
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service.
                </p>
              </motion.div>

              {/* Changes to Terms */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Changes to Terms
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </motion.div>

              {/* Contact Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 rounded-2xl p-8 border border-accent-cyan/20"
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p 
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#555',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  className="mb-6"
                >
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <p 
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.44',
                      fontWeight: 400,
                      color: '#555',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    <strong>Email:</strong> info@orbantistechnologies.com
                  </p>
                  <p 
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.44',
                      fontWeight: 400,
                      color: '#555',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    <strong>Phone:</strong> 9805871945
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-accent-cyan hover:text-accent-blue font-semibold mt-4 transition-colors"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>

              {/* Last Updated */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-center pt-8 border-t border-gray-200"
              >
                <p 
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.44',
                    fontWeight: 400,
                    color: '#777',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

