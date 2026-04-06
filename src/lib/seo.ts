import type { Metadata } from 'next'

export const SITE_URL = 'https://orbantistechnologies.com'
export const SITE_NAME = 'Orbantis Technologies'
export const DEFAULT_OG_IMAGE = '/logo2.png'

type PageMeta = {
  title: string
  description: string
  path: string
  keywords?: string
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  const socialTitle = `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}
