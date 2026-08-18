/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Emits <route>/index.html so static hosts serve /about and /services with a 200
  // instead of the 404/403 the flat <route>.html export produced.
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { ...config.resolve.fallback }
    }
    return config
  },
}

module.exports = nextConfig
