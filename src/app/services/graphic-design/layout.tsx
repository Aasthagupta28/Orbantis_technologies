import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'Graphic Design'
const PATH = '/services/graphic-design'
const DESCRIPTION =
  'Graphic design services from Orbantis Technologies: logo design, brand identity, marketing creative and visual assets that make your business stand out.'

export const metadata: Metadata = pageMetadata({
  title: 'Graphic Design Services | Logo & Brand Identity',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'graphic design services',
    'logo design company',
    'brand identity design',
    'marketing creative design',
    'visual design agency',
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

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
