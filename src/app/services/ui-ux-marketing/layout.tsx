import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'UI/UX & Marketing Design'
const PATH = '/services/ui-ux-marketing'
const DESCRIPTION =
  'UI UX design and marketing creative from Orbantis Technologies. We design user journeys, interfaces and campaign assets that turn visitors into leads.'

export const metadata: Metadata = pageMetadata({
  title: 'UI UX Design Services | Web & Mobile App Design',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'UI UX design services',
    'product design agency',
    'mobile app UI design',
    'website redesign services',
    'marketing design services',
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

export default function UiUxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
