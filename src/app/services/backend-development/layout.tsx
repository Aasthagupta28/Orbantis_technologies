import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Backend Development',
  description:
    'APIs, databases, and scalable server-side systems — secure backend development by Orbantis Technologies.',
  path: '/services/backend-development',
  keywords: 'backend development, API development, Django, Node.js',
})

export default function BackendLayout({ children }: { children: React.ReactNode }) {
  return children
}
