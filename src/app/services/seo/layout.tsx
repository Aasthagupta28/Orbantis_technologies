import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'SEO Services'
const PATH = '/services/seo'
const DESCRIPTION =
  'SEO services from Orbantis Technologies: technical audits, on-page optimisation, site structure and content strategy that grow your organic traffic.'

export const metadata: Metadata = pageMetadata({
  title: 'SEO Services Company | Technical & On-Page SEO',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'SEO services company',
    'technical SEO audit',
    'on page SEO services',
    'search engine optimization agency',
    'organic traffic growth',
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

export default function SeoServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
