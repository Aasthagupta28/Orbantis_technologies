import type { Metadata } from 'next'

export const SITE_URL = 'https://orbantistechnologies.com'
export const SITE_NAME = 'Orbantis Technologies'
export const DEFAULT_OG_IMAGE = '/logo2.png'

const BASE_KEYWORDS = [
  'Orbantis Technologies',
  'software development company',
  'IT services company India',
  'Ghumarwin Himachal Pradesh',
]

type PageMeta = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function canonicalUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.replace(/\/$/, '')}/`
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMeta): Metadata {
  const url = canonicalUrl(path)

  return {
    title: { absolute: title },
    description,
    keywords: [...keywords, ...BASE_KEYWORDS],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

type Crumb = { name: string; path: string }

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  }
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: name,
    url: canonicalUrl(path),
    areaServed: 'Worldwide',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: canonicalUrl('/'),
      logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    },
  }
}
