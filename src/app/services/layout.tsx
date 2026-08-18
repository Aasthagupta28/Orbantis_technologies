import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'IT Services | Web, Mobile, AI & Design Solutions',
  description:
    'Explore Orbantis Technologies services: web development, mobile apps, AI and machine learning, backend, UI/UX design, QA testing, SEO and analytics.',
  path: '/services',
  keywords: [
    'web development services',
    'mobile app development services',
    'AI consulting services',
    'UI UX design agency',
    'software testing services',
  ],
})

const jsonLd = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
])

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
