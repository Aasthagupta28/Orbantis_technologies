import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

const routes = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/services',
  '/services/web-development',
  '/services/mobile-development',
  '/services/ai-machine-learning',
  '/services/data-analytics',
  '/services/backend-development',
  '/services/graphic-design',
  '/services/ui-ux-marketing',
  '/services/seo',
  '/services/testing-qa',
  '/privacy',
  '/terms',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/services' ? 0.9 : 0.8,
  }))
}
