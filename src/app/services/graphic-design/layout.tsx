import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Graphic Design',
  description:
    'Brand and visual design — logos, marketing assets, and creative direction from Orbantis.',
  path: '/services/graphic-design',
  keywords: 'graphic design, branding, visual identity',
})

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return children
}
