'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export default function PrivacyPolicy() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    content: useRef<HTMLElement>(null)
  }

  const privacyFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Your data is stored securely using encrypted systems and secure servers.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and share your information.'
    },
    {
      icon: FileText,
      title: 'Your Rights',
      description: 'You have the right to access, update, or delete your personal information at any time.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-cyan/20 to-accent-blue/20 z-[5]"></div>

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
              <Shield className="w-6 h-6 text-accent-blue mr-3" />
              <span className="text-gray-900 font-semibold font-poppins">Privacy Policy</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-poppins font-bold text-gray-900 mb-6"
            >
              Your Privacy <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-clip-text text-transparent">Matters</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-inter"
            >
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Features Section */}
      <section className="py-16 bg-gradient-to-br from-light-200 via-white to-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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

      {/* Privacy Policy Content Section */}
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
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Introduction
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
                  At Orbantis Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </motion.div>

              {/* Information We Collect */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Information We Collect
                </h2>
                <ul className="space-y-4">
                  {[
                    'Personal Information: Name, email address, phone number, and other contact details you provide',
                    'Usage Data: Information about how you interact with our website, including IP address, browser type, and pages visited',
                    'Cookies: We use cookies to enhance your browsing experience and analyze website traffic',
                    'Communication Data: Records of correspondence when you contact us'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
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

              {/* How We Use Your Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  How We Use Your Information
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
                  We use the information we collect for various purposes:
                </p>
                <ul className="space-y-3">
                  {[
                    'To provide and maintain our services',
                    'To notify you about changes to our services',
                    'To provide customer support and respond to inquiries',
                    'To analyze usage patterns and improve our website',
                    'To send marketing communications (with your consent)',
                    'To detect and prevent fraud or security issues'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
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

              {/* Data Security */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Data Security
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
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Your Rights
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
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-3">
                  {[
                    'Right to access: Request a copy of your personal data',
                    'Right to rectification: Correct inaccurate or incomplete data',
                    'Right to erasure: Request deletion of your personal data',
                    'Right to restrict processing: Limit how we use your data',
                    'Right to data portability: Receive your data in a structured format',
                    'Right to object: Object to processing of your personal data'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
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

              {/* Cookies */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Cookies
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
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </motion.div>

              {/* Changes to This Policy */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                  Changes to This Policy
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
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </motion.div>

              {/* Contact Us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 rounded-2xl p-8 border border-accent-blue/20"
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
                  If you have any questions about this Privacy Policy, please contact us:
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
                    className="inline-flex items-center text-accent-blue hover:text-accent-cyan font-semibold mt-4 transition-colors"
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
                transition={{ duration: 0.6, delay: 0.8 }}
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

