import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'Data & Analytics'
const PATH = '/services/data-analytics'
const DESCRIPTION =
  'Data analytics and business intelligence services from Orbantis Technologies: SQL data pipelines, ETL, dashboards and reporting that drive decisions.'

export const metadata: Metadata = pageMetadata({
  title: 'Data Analytics Services | BI Dashboards & ETL',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'data analytics services',
    'business intelligence company',
    'ETL development',
    'BI dashboard development',
    'data pipeline services',
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

export default function DataAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
