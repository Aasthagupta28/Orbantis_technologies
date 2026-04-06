import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  description:
    'Orbantis Technologies services: web development, mobile apps, AI & ML, UI/UX, backend, QA, SEO, analytics, and design.',
  path: '/services',
  keywords:
    'web development services, mobile app development, AI consulting, UI UX agency, software testing',
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
