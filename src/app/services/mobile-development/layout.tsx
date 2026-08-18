import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'Mobile App Development'
const PATH = '/services/mobile-development'
const DESCRIPTION =
  'Mobile app development services for iOS and Android. Orbantis Technologies takes your app from concept and design to launch, testing and store release.'

export const metadata: Metadata = pageMetadata({
  title: 'Mobile App Development Company | iOS & Android',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'mobile app development company',
    'iOS app development',
    'Android app development',
    'cross platform app development',
    'hire mobile app developers',
  ],
})

const jsonLd = [
  breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: NAME, path: PATH },
  ]),
  serviceJsonLd({ name: NAME, description: DESCRIPTION, path: PATH }),
]

export default function MobileDevLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
