import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'Backend Development'
const PATH = '/services/backend-development'
const DESCRIPTION =
  'Backend development services from Orbantis Technologies. We build secure REST APIs, databases and scalable server-side systems with Django and Node.js.'

export const metadata: Metadata = pageMetadata({
  title: 'Backend Development Services | APIs & Databases',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'backend development services',
    'REST API development',
    'Django development company',
    'Node.js development services',
    'database design services',
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

export default function BackendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
