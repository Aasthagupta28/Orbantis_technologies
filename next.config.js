/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
