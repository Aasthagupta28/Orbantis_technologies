import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo'

const NAME = 'AI & Machine Learning'
const PATH = '/services/ai-machine-learning'
const DESCRIPTION =
  'AI and machine learning development from Orbantis Technologies: workflow automation, predictive models, chatbots and intelligent product features.'

export const metadata: Metadata = pageMetadata({
  title: 'AI & Machine Learning Development Services Company',
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    'AI development services',
    'machine learning consulting',
    'AI automation company',
    'predictive analytics solutions',
    'chatbot development',
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

export default function AIMLLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
