import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Testing & QA',
  description:
    'Quality assurance and software testing — manual and automated QA for reliable releases.',
  path: '/services/testing-qa',
  keywords: 'software testing, QA services, test automation',
})

export default function TestingQALayout({ children }: { children: React.ReactNode }) {
  return children
}
