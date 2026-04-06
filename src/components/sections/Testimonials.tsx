'use client'

const Testimonials = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col bg-light-200 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/simple-blue-white-background-with-text-space.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      <div className="relative z-5 flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="heading-title text-gray-900 mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block w-full text-center">
              Reasons Businesses <span className="bg-gradient-to-r from-aqua to-primary-400 bg-clip-text text-transparent">Trust Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
            {[
              {
                title: 'High-Quality Solutions',
                description: 'Scalable, secure, and performance-driven digital products.',
                icon: '🛡️'
              },
              {
                title: 'Customized Development',
                description: 'Every solution is tailored to your business goals.',
                icon: '⚙️'
              },
              {
                title: 'Experienced Tech Experts',
                description: 'Skilled developers, designers, and strategists with real-world experience.',
                icon: '👥'
              },
              {
                title: 'On-Time Project Delivery',
                description: 'We meet deadlines without compromising quality.',
                icon: '⏰'
              },
              {
                title: 'End-to-End Support',
                description: 'From planning and development to deployment and maintenance.',
                icon: '🎧'
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative h-full"
              >
                <div className="bg-white/95 backdrop-blur-lg border border-white/30 rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full flex flex-col">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="flex-grow text-sm sm:text-base md:text-lg text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
