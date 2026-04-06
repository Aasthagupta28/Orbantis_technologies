'use client'

import { motion } from 'framer-motion'
import { Smartphone, CheckCircle, ArrowRight, Phone, AppWindow, SmartphoneIcon, ShoppingBag, Briefcase, Search, Rocket, Settings, Lightbulb, MessageSquare, BarChart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function MobileDevelopment() {
  const [showMore, setShowMore] = useState(false)
  const services = [
    {
      icon: AppWindow,
      title: 'iOS & Android Apps',
      description: 'Native mobile apps for iPhone and Android phones. Fast, smooth, and designed specifically for each platform to give your users the best experience.',
      benefits: ['Works perfectly on iPhone', 'Works perfectly on Android', 'Fast and smooth', 'Best user experience'],
      tools: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xcode']
    },
    {
      icon: SmartphoneIcon,
      title: 'Cross-Platform Apps',
      description: 'Build one app that works on both iOS and Android. Save time and money while reaching all your customers on any device.',
      benefits: ['One app for all devices', 'Save time and money', 'Reach more customers', 'Easy to maintain'],
      tools: ['React Native', 'Flutter', 'Ionic', 'Xamarin', 'Unity']
    },
    {
      icon: Briefcase,
      title: 'Business Mobile Apps',
      description: 'Mobile apps that help your business run better. Manage orders, track inventory, connect with customers - all from your phone.',
      benefits: ['Manage business on the go', 'Track everything easily', 'Connect with customers', 'Increase efficiency'],
      tools: ['React Native', 'Flutter', 'Firebase', 'AWS Amplify', 'Supabase']
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Mobile Apps',
      description: 'Shopping apps that make it easy for customers to buy from you. Secure payments, easy browsing, and order tracking all in one place.',
      benefits: ['Easy shopping experience', 'Secure payments', 'Order tracking', 'More sales'],
      tools: ['React Native', 'Shopify API', 'Stripe', 'WooCommerce', 'Magento']
    }
  ]

  const features = [
    {
      icon: Smartphone,
      title: 'React Native Development',
      description: 'Cross-platform mobile apps using React Native for iOS and Android. Build once, run everywhere - saving you time and money.',
      benefits: ['Single codebase for both platforms', 'Native performance', 'Hot reloading', 'Large community support'],
      userBenefit: 'Launch your app on both iPhone and Android at the same time, reaching all your customers faster.'
    },
    {
      icon: Smartphone,
      title: 'Flutter Applications',
      description: 'Beautiful, fast mobile apps using Google\'s Flutter framework. Modern design and smooth performance that users love.',
      benefits: ['Material Design', 'Fast development', 'Excellent performance', 'Rich widget library'],
      userBenefit: 'Get a beautiful app that looks professional and works smoothly on all devices, attracting more users.'
    },
    {
      icon: Smartphone,
      title: 'iOS & Android Native Apps',
      description: 'Native mobile applications for iOS and Android platforms. Best performance and full access to device features.',
      benefits: ['Platform-specific optimization', 'Native UI components', 'Best performance', 'Full platform access'],
      userBenefit: 'Get the fastest, most responsive app possible with full access to phone features like camera, GPS, and notifications.'
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps (PWA)',
      description: 'Web applications that work like native mobile apps. No app store needed - users can install directly from browser.',
      benefits: ['Offline functionality', 'Push notifications', 'App-like experience', 'Easy deployment'],
      userBenefit: 'Users can install your app without going to app stores. Faster to launch and easier to update.'
    }
  ]

  const technologies = [
    { name: 'react', displayName: 'React Native', category: 'Cross-Platform' },
    { name: 'flutter', displayName: 'Flutter', category: 'Cross-Platform' },
    { name: 'swift', displayName: 'Swift', category: 'iOS' },
    { name: 'kotlin', displayName: 'Kotlin', category: 'Android' },
    { name: 'firebase', displayName: 'Firebase', category: 'Backend' },
    { name: 'amazonwebservices', displayName: 'AWS', category: 'Backend' },
    { name: 'android', displayName: 'Android', category: 'Platform' },
    { name: 'apple', displayName: 'iOS', category: 'Platform' }
  ]

  const approach = [
    {
      icon: Lightbulb,
      title: 'Begin Research',
      description: 'Idea generation, discussion and consultation, research, defining objectives, and requirement gathering for your mobile app.'
    },
    {
      icon: Settings,
      title: 'System Architecture Design',
      description: 'Wireframing, UI/UX Designing, and Prototyping are all aspects of the mobile app architecture design process.'
    },
    {
      icon: Rocket,
      title: 'Product Development',
      description: 'Implementation of functional features, mobile app coding, and optimization for iOS and Android platforms.'
    },
    {
      icon: MessageSquare,
      title: 'Follow up',
      description: 'Surveilling, analyzing feedback, and all-round assistance to ensure your app meets user expectations.'
    },
    {
      icon: Search,
      title: 'Evaluation',
      description: 'Implementing the analytics and evaluating the performance of your mobile application.'
    }
  ]

  const whyChoose = [
    {
      icon: CheckCircle,
      text: 'Expert mobile developers who know how to build apps that users love.'
    },
    {
      icon: CheckCircle,
      text: 'We build apps that work smoothly, load fast, and keep your customers coming back.'
    },
    {
      icon: CheckCircle,
      text: 'From design to app store launch, we handle everything so you can focus on your business.'
    },
    {
      icon: CheckCircle,
      text: 'Get ongoing support and updates to keep your app running perfectly.'
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
                Mobile App Development
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
                A powerful mobile app can help your business reach customers anywhere, anytime. But where to find developers who build apps that actually work and bring results?
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
                <Smartphone className="w-32 h-32 text-accent-blue opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Why Choose Us For Mobile App Development?
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                We are a leading mobile app development company, offering superior app development services to create customized mobile applications for businesses and startups.
              </p>
              <p>
                We provide high-quality, secure, and user-friendly mobile apps with 100% project delivery. We specialize in developing apps for iOS, Android, and cross-platform solutions.
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
                    We create custom mobile applications, B2B and B2C apps, e-commerce mobile solutions and have expertise in native and cross-platform development as well as API integration, among other things.
                  </p>
                  <p>
                    Our mobile app solutions are created with the most up-to-date development tools and technologies and are secure, reliable, and scalable, allowing organizations to achieve their mobile business goals.
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
              Our Mobile App Development Services
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
              From concept to app store launch, we provide comprehensive mobile app development solutions.
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

      <section className="py-12 sm:py-16 lg:py-20 bg-light-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Modern Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use the latest mobile development technologies to build apps that perform excellently.
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
              Our Approach to <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Mobile App Development</span>
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
                We provide real-time performance reports for mobile apps, allowing you to track actual growth. Monitor your app's performance, user engagement, download rates, and business metrics with comprehensive analytics and reporting tools.
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
              The Benefit of Choosing a Reputable Company As Your Mobile App Development <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Partner</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg max-w-4xl mx-auto">
              <p>
                Our efficient mobile app development process optimizes performance and security while lowering administration and maintenance costs. We are committed to delivering the best mobile app solutions in the industry.
              </p>
              <p>
                By choosing us as your mobile app development partner, you get access to expert developers, proven methodologies, and ongoing support that ensures your app continues to perform at its best.
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
                  <Smartphone className="w-16 h-16 text-accent-blue opacity-50" />
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
                Integrating management processes with the development phase establishes transparency and achievable business objectives. You stay informed at every step, with regular updates, clear communication, and the ability to provide feedback throughout the mobile app development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
