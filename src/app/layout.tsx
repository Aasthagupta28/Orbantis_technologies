import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ConditionalLetsTalk from '@/components/ConditionalLetsTalk'
import JsonLd from '@/components/JsonLd'
import { canonicalUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

const homeTitle = 'Orbantis Technologies | Web, Mobile & AI Development'
const homeDescription =
  'Orbantis Technologies builds custom websites, mobile apps, AI solutions and UI/UX design for growing businesses. Get a free project quote today.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: '%s',
  },
  description: homeDescription,
  keywords: [
    'web development company',
    'mobile app development company',
    'AI development services',
    'custom software development',
    'UI UX design agency',
    'SEO services company',
    'Orbantis Technologies',
    'IT services company India',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    type: 'website',
    locale: 'en_US',
    url: canonicalUrl('/'),
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: canonicalUrl('/'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0066cc',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
  name: SITE_NAME,
  url: canonicalUrl('/'),
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description: homeDescription,
  telephone: '+91-8352841945',
  email: 'support@orbantistechnologies.com',
  areaServed: ['IN', 'Worldwide'],
  knowsAbout: [
    'Web development',
    'Mobile app development',
    'Artificial intelligence',
    'UI UX design',
    'Search engine optimization',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ghumarwin',
    addressRegion: 'Himachal Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8352841945',
    email: 'support@orbantistechnologies.com',
    contactType: 'customer service',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://github.com/arunkumarbhardwaj1999',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: canonicalUrl('/'),
  description: homeDescription,
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: SITE_NAME },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Orbantis Technologies offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Orbantis Technologies offers web development, mobile app development, AI and machine learning, backend development, UI/UX design, graphic design, SEO, data analytics, and software testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Orbantis Technologies located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Orbantis Technologies is based in Ghumarwin, Bilaspur district, Himachal Pradesh, India, and works with clients worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get a quote from Orbantis Technologies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the contact form at https://orbantistechnologies.com/contact/, email support@orbantistechnologies.com, or call +91 8352841945.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <JsonLd data={[organizationJsonLd, websiteJsonLd, faqJsonLd]} />
        <Header />
        <div className="relative">
          <main className="min-h-screen relative z-20">{children}</main>
          <ConditionalLetsTalk />
          <Footer />
        </div>
      </body>
    </html>
  )
}
