const isVercel = process.env.VERCEL === '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger static hosting needs `output: 'export'`.
  // Vercel must keep the Next.js server so /api/contact works.
  ...(!isVercel ? { output: 'export' } : {}),
  trailingSlash: true,
  skipTrailingSlashRedirect: isVercel,
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
