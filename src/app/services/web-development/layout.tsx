import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Web Development Services',
  description:
    'Custom websites and web apps with modern stacks — performance, SEO, and scalable architecture by Orbantis Technologies.',
  path: '/services/web-development',
  keywords: 'React development, Next.js, web application development, custom website',
})

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return children
}
