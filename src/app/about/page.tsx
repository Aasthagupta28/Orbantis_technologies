'use client'

import { motion } from 'framer-motion'
import { Lightbulb, DollarSign, FileText, Target, Users, Award, Clock, Globe } from 'lucide-react'
import CountUp from '@/components/CountUp'
import { useRef } from 'react'
import ClientReviews from '@/components/sections/ClientReviews'

export default function About() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    coreBeliefs: useRef<HTMLElement>(null),
    values: useRef<HTMLElement>(null),
    strengths: useRef<HTMLElement>(null)
  }

  const foundationalValues = [
    {
      icon: Lightbulb,
      title: 'Invent the Future',
      description: 'We continuously innovate and create cutting-edge solutions that shape tomorrow\'s technology landscape.',
      gradient: 'from-accent-blue to-accent-cyan'
    },
    {
      icon: DollarSign,
      title: 'Be Budget-Efficient',
      description: 'We deliver maximum value while maintaining cost-effectiveness, ensuring optimal ROI for our clients.',
      gradient: 'from-accent-cyan to-accent-blue'
    },
    {
      icon: FileText,
      title: 'Be Open and Accountable',
      description: 'Transparency and accountability are at the core of everything we do, building trust through honest communication.',
      gradient: 'from-accent-blue to-accent-cyan' 
    },
    {
      icon: Target,
      title: 'Stand by Your Goals',
      description: 'We are committed to achieving your objectives, delivering results that align with your vision and mission.',
      gradient: 'from-accent-cyan to-accent-blue'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Users },
    { number: '100%', label: 'Dedication', icon: Award },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '∞', label: 'Potential', icon: Globe }
  ]


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Light Theme with Image Background */}
      <section 
        ref={sectionRefs.hero}
        className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24"
      >
        {/* Image Background */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <motion.img
                src="/banner-image-04.png"
                alt="Banner Illustration"
                className="w-full h-auto max-w-[200px] sm:max-w-xs lg:max-w-sm object-contain mx-auto"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed text-gray-700 font-poppins">
                <span className="text-accent-blue font-bold">We are creators and innovators in digital transformation.</span>
                <span className="text-gray-700"> Our goal is to help you succeed in the digital world with the latest technologies and reliable solutions. Our experienced team is committed to delivering the best. Ready to go digital? Think Orbantis.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Beliefs Section */}
     

      {/* Foundational Values Section */}
      <section 
        ref={sectionRefs.values}
        className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-light-200 via-white to-light-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {foundationalValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 font-poppins">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed text-gray-700 font-poppins">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 font-poppins px-4"
          >
            These aren't just words—they're the building blocks of everything we stand for.
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-light-200 via-white to-light-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ================= Section 1 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
          <span className="text-gray-900">A Strong </span>
          <span className="text-accent-blue">Foundation</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
          Built on real projects and continuous learning, we bring experience and a growth mindset to every client partnership for enduring success.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-start"
      >
        <img
          src="/strong.png"
          alt="Strong Foundation"
          className="w-full max-w-xs sm:max-w-md rounded-lg object-contain"
        />
      </motion.div>

    </div>

    {/* ================= Section 2 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-start order-2 lg:order-1"
      >
        <img
          src="/core.png"
          alt="Core Beliefs"
          className="w-full max-w-xs sm:max-w-md rounded-lg object-contain"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6 order-1 lg:order-2"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
          <span className="text-gray-900">Our Core </span>
          <span className="text-accent-blue">Beliefs</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
          Success in the digital and IT landscape comes from principles, hard work, and goal-oriented strategies. We take pride in our commitment to clients, and future-ready technologies.
        </p>
      </motion.div>

    </div>

    {/* ================= Section 3 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
          <span className="text-gray-900">Our Professional </span>
          <span className="text-accent-blue">Strengths</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
          We are a team of forward-thinking IT professionals delivering diverse forward-thinking solutions. With unmatched marketing expertise and proficiency in modern web and mobile applications.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-start"
      >
        <img
          src="/professional.png"
          alt="Professional Strengths"
          className="w-full max-w-xs sm:max-w-md rounded-lg object-contain"
        />
      </motion.div>

    </div>

    {/* ================= Section 4 ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-start order-2 lg:order-1"
      >
        <img
          src="/dive.png"
          alt="Innovation Dive"
          className="w-full max-w-xs sm:max-w-md rounded-lg object-contain"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6 order-1 lg:order-2"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
          <span className="text-gray-900">We Dive Into the Core of </span>
          <span className="text-accent-blue">Innovation — For You</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
          Through thorough research and data analysis, our team uncovers valuable insights transforming intelligence into forward-thinking technologies tailored for your needs.
        </p>
      </motion.div>

    </div>

  </div>
</section>



      {/* Client Reviews Section - Using shared component */}
      <ClientReviews />

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-br from-accent-blue/5 via-accent-cyan/5 to-accent-blue/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Our <span className="text-accent-blue">Impact</span>
            </h2>
            <p 
              style={{
                fontSize: '18px',
                lineHeight: '1.44',
                fontWeight: 400,
                color: '#555',
                fontFamily: 'Poppins, sans-serif'
              }}
              className="max-w-4xl mx-auto"
            >
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <CountUp end={stat.number} className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent mb-2 block" />
                <div className="text-gray-600 text-sm lg:text-base font-medium font-poppins">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
