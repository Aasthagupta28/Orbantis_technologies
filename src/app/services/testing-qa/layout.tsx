import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'Testing & QA'
const PATH = '/services/testing-qa'
const DESCRIPTION =
  'Software testing and QA services from Orbantis Technologies. Manual and automated testing, bug tracking and release checks for reliable applications.'

export const metadata: Metadata = pageMetadata({
  title: 'Software Testing & QA Services | Manual & Auto',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'software testing services',
    'QA services company',
    'test automation services',
    'manual testing company',
    'quality assurance outsourcing',
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

export default function TestingQALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
