'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Image, CheckCircle, ArrowRight, Phone, Palette, Brush, FileImage, Package, BarChart, Settings, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function GraphicDesign() {
  const [showMore, setShowMore] = useState(false)
  const services = [
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Professional logos that make your business look trustworthy. Memorable designs that customers remember.',
      benefits: ['Professional look', 'Memorable design', 'Builds trust', 'Represents your brand'],
      tools: ['Adobe Illustrator', 'Figma', 'Canva Pro', 'Affinity Designer', 'Inkscape']
    },
    {
      icon: Brush,
      title: 'Brand Design',
      description: 'Complete brand designs including colors, fonts, and style. Consistent look across all your materials.',
      benefits: ['Consistent branding', 'Professional look', 'Builds recognition', 'Complete package'],
      tools: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva Pro', 'Procreate']
    },
    {
      icon: FileImage,
      title: 'Marketing Materials',
      description: 'Designs for flyers, brochures, social media posts, and more. Attractive designs that get attention.',
      benefits: ['Get attention', 'Professional designs', 'More engagement', 'Better results'],
      tools: ['Adobe Photoshop', 'InDesign', 'Canva', 'Figma', 'Illustrator']
    },
    {
      icon: Package,
      title: 'Print Design',
      description: 'Designs for business cards, posters, banners, and other print materials. High-quality designs ready to print.',
      benefits: ['High quality', 'Print ready', 'Professional look', 'Attracts customers'],
      tools: ['Adobe InDesign', 'Illustrator', 'Photoshop', 'CorelDRAW', 'Affinity Publisher']
    }
  ]

  const features = [
    {
      icon: Image,
      title: 'Logo Design & Brand Identity',
      description: 'Unique and memorable logo designs that represent your brand identity and values. Make your business stand out.',
      benefits: ['Brand identity creation', 'Multiple design concepts', 'Vector format delivery', 'Brand guidelines'],
      userBenefit: 'Customers remember your brand and trust you more. A professional logo builds credibility and recognition.'
    },
    {
      icon: Image,
      title: 'Print Design',
      description: 'Professional print materials including brochures, flyers, business cards, and marketing materials. High-quality designs that attract customers.',
      benefits: ['Business cards', 'Brochures & flyers', 'Posters & banners', 'Print-ready files'],
      userBenefit: 'Professional marketing materials that get attention. Stand out at events and attract more customers.'
    },
    {
      icon: Image,
      title: 'Digital Graphics',
      description: 'Eye-catching digital graphics for websites, social media, and online marketing. Designs that engage and convert.',
      benefits: ['Social media graphics', 'Web graphics', 'Banner ads', 'Infographics'],
      userBenefit: 'Engage customers online with attractive graphics. More likes, shares, and conversions from your marketing.'
    },
    {
      icon: Image,
      title: 'Packaging Design',
      description: 'Product packaging that catches the eye and protects your products. Make your products stand out on shelves.',
      benefits: ['Product packaging', 'Label design', 'Box design', 'Brand consistency'],
      userBenefit: 'Your products look professional and attract customers. Better packaging means more sales.'
    }
  ]

  const technologies = [
    { name: 'illustrator', displayName: 'Illustrator', category: 'Design' },
    { name: 'photoshop', displayName: 'Photoshop', category: 'Design' },
    { name: 'indesign', displayName: 'InDesign', category: 'Layout' },
    { name: 'figma', displayName: 'Figma', category: 'Design' },
    { name: 'xd', displayName: 'Adobe XD', category: 'Design' },
    { name: 'sketch', displayName: 'Sketch', category: 'Design' },
    { name: 'aftereffects', displayName: 'After Effects', category: 'Animation' },
    { name: 'premierepro', displayName: 'Premiere Pro', category: 'Video' }
  ]

  const whyChoose = [
    {
      icon: CheckCircle,
      text: 'Expert designers who create designs that make your business look professional and trustworthy.'
    },
    {
      icon: CheckCircle,
      text: 'We design logos and materials that customers remember and that represent your brand well.'
    },
    {
      icon: CheckCircle,
      text: 'From logos to marketing materials, we create designs that help you stand out and attract customers.'
    },
    {
      icon: CheckCircle,
      text: 'Get ongoing support to keep your designs updated and create new materials as needed.'
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
                Graphic Design
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                Eye-catching designs for your brand. Professional logos, banners, and graphics that make your business look trustworthy and professional. But where to find designers who create designs that actually work?
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
                <Image className="w-32 h-32 text-accent-blue opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Why Choose Us For Graphic Design?
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                
                We are a leading graphic design company, offering superior design services to create visual materials that capture your brand essence and engage your audience.
              
              </p>
              <p>
                
                We provide creative and compelling designs that make your business look professional and help you stand out from competitors.
              
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
              Our Graphic Design Services
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
              Creative and compelling visual designs that capture your brand essence and engage your audience.
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
              We use the latest design tools to create professional and engaging visuals.
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
                We provide real-time performance reports for graphic design projects, allowing you to track actual growth. Monitor your design performance, brand recognition, engagement rates, and business impact with comprehensive analytics and reporting tools.
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
              The Benefit of Choosing a Reputable Company As Your Graphic Design <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Partner</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                Our efficient graphic design process optimizes performance and quality while lowering administration and maintenance costs. We are committed to delivering the best design solutions in the industry.
              </p>
              <p>
                By choosing us as your design partner, you get access to expert designers, proven methodologies, and ongoing support that ensures your brand continues to perform at its best.
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
                  <Image className="w-16 h-16 text-accent-blue opacity-50" />
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
                Integrating management processes with the graphic design phase establishes transparency and achievable business objectives. You stay informed at every step, with regular updates, clear communication, and the ability to provide feedback throughout the design lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
