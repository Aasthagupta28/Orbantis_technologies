import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact Orbantis Technologies for web development, mobile apps, and AI projects. Request a quote or call +91 9805871945.',
  path: '/contact',
  keywords: 'contact Orbantis, software quote, IT consultation',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
