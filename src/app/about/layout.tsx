import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Orbantis Technologies | Our Team & Values',
  description:
    'Learn about Orbantis Technologies, the team behind our web, mobile and AI projects, the values we work by and how we help businesses grow online.',
  path: '/about',
  keywords: [
    'about Orbantis Technologies',
    'software development team',
    'digital transformation agency',
    'IT consulting company',
  ],
})

const jsonLd = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
])

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
