import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Portfolio',
  description:
    'Explore Orbantis Technologies project portfolio — websites, mobile apps, and digital products built for clients.',
  path: '/portfolio',
  keywords: 'Orbantis portfolio, web projects, app development case studies',
})

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
