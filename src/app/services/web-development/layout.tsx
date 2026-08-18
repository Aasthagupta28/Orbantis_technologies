import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'Web Development'
const PATH = '/services/web-development'
const DESCRIPTION =
  'Custom web development services from Orbantis Technologies. We build fast, secure and SEO-friendly websites and web apps with React, Next.js and Django.'

export const metadata: Metadata = pageMetadata({
  title: 'Web Development Company | Custom Websites & Apps',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'web development company',
    'custom website development',
    'React development services',
    'Next.js development agency',
    'web application development',
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

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
