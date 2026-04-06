'use client'

import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'

const PortfolioPreview = () => {

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Django, and payment integration.',
      image: '/portfolio/ecommerce.jpg',
      category: 'Web Development',
      link: '#'
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Intelligent customer support chatbot with natural language processing.',
      image: '/portfolio/ai-chatbot.jpg',
      category: 'AI & Automation',
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication.',
      image: '/portfolio/mobile-banking.jpg',
      category: 'Mobile Development',
      link: '#'
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-magenta bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/600x400/f0f9ff/0066cc?text=${encodeURIComponent(project.title)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-accent-blue/90 backdrop-blur-md text-white text-sm font-bold rounded-lg">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-accent-blue to-accent-magenta text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview
