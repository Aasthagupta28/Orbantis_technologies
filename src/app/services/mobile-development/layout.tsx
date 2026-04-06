import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Mobile App Development',
  description:
    'iOS and Android app development — from concept to launch with Orbantis Technologies.',
  path: '/services/mobile-development',
  keywords: 'mobile app developer, iOS Android apps, cross-platform development',
})

export default function MobileDevLayout({ children }: { children: React.ReactNode }) {
  return children
}
