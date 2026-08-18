import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | How Orbantis Protects Your Data',
  description:
    'Read the Orbantis Technologies privacy policy to understand what personal information we collect, how we use and store it, and what rights you have.',
  path: '/privacy',
  keywords: [
    'Orbantis privacy policy',
    'data protection policy',
    'personal information handling',
  ],
})

const jsonLd = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy' },
])

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
