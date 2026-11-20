import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/layout/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Product Management Skill Jev: AI co-pilot for product managers',
    template: '%s | Product Management Skill Jev',
  },
  description:
    'Score features with RICE, write PRDs, manage Epics, detect conflicts, track stakeholders. Plain language. Files you own.',
  keywords: ['product management', 'PRD', 'AI', 'RICE scoring', 'product requirements'],
  authors: [{ name: 'Nhat Nguyet', url: 'https://nhatnguyet.org' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nhatnguyet.org',
    siteName: 'Nhat Nguyet',
    title: 'Product Management Skill Jev: AI co-pilot for product managers',
    description: 'Score features with RICE, write PRDs, manage Epics. Plain language. Files you own.',
  },
  twitter: {
    card: 'summary',
    title: 'Product Management Skill Jev',
    description: 'AI Co-pilot for Product Managers',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
