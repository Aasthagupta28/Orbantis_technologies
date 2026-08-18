import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service | Orbantis Technologies Website',
  description:
    'Read the terms of service for the Orbantis Technologies website, covering acceptable use, project engagement, intellectual property and our liability.',
  path: '/terms',
  keywords: [
    'Orbantis terms of service',
    'website terms and conditions',
    'service agreement terms',
  ],
})

const jsonLd = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Terms of Service', path: '/terms' },
])

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
