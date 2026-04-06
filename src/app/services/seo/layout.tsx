import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'SEO Services',
  description:
    'Technical and on-page SEO to improve visibility — audits, structure, and content strategy with Orbantis.',
  path: '/services/seo',
  keywords: 'SEO services, technical SEO, search optimization',
})

export default function SeoServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
