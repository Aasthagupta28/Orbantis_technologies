import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'UI/UX & Marketing Design',
  description:
    'User experience, interface design, and marketing creative that converts — Orbantis Technologies.',
  path: '/services/ui-ux-marketing',
  keywords: 'UI UX design, product design, marketing design',
})

export default function UiUxLayout({ children }: { children: React.ReactNode }) {
  return children
}
