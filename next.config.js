/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← static export enable kar raha hai
  images: {
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
