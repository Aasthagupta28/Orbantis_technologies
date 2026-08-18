import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Portfolio | Web & Mobile Projects by Orbantis',
  description:
    'Browse the Orbantis Technologies portfolio of websites, mobile apps and digital products, and see the results we deliver for clients worldwide.',
  path: '/portfolio',
  keywords: [
    'Orbantis portfolio',
    'web development case studies',
    'mobile app projects',
    'software development work',
  ],
})

const jsonLd = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
])

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
