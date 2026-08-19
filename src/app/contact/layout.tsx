import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, canonicalUrl, pageMetadata, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Contact Orbantis Technologies | Get a Free Quote',
  description:
    'Contact Orbantis Technologies for web development, mobile app and AI projects. Request a free quote, call +91 8352841945 or send us a message today.',
  path: '/contact',
  keywords: [
    'contact Orbantis Technologies',
    'hire web developers',
    'free project quote',
    'IT consultation India',
  ],
})

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${SITE_NAME}`,
  url: canonicalUrl('/contact'),
  mainEntity: {
    '@type': 'Organization',
    name: SITE_NAME,
    telephone: '+91-8352841945',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ghumarwin',
      addressRegion: 'Himachal Pradesh',
      addressCountry: 'IN',
    },
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-16:00'],
  },
}

const jsonLd = [
  breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]),
  contactPageJsonLd,
]

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
