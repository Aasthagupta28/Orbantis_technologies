import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'AI & Machine Learning',
  description:
    'AI and machine learning solutions — automation, models, and intelligent features for your business.',
  path: '/services/ai-machine-learning',
  keywords: 'machine learning consulting, AI automation, intelligent systems',
})

export default function AIMLLayout({ children }: { children: React.ReactNode }) {
  return children
}
