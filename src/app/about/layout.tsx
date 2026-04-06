import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description:
    'Meet Orbantis Technologies — our values, team strengths, and how we deliver web, mobile, and AI solutions for businesses worldwide.',
  path: '/about',
  keywords: 'about Orbantis, IT company, software team, digital agency',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
