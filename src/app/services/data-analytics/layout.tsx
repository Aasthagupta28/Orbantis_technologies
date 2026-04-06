import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Data & Analytics',
  description:
    'Data pipelines, analytics, and BI with Orbantis — SQL, ETL, dashboards, and reporting.',
  path: '/services/data-analytics',
  keywords: 'data analytics, business intelligence, ETL, reporting',
})

export default function DataAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return children
}
