import type { Metadata } from 'next'
import './globals.css'
import { SITE } from '@/lib/site-config'
import { Assistant } from 'next/font/google'

const assistant = Assistant({
  subsets: ['hebrew'],
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl), // 'https://drkoren.skin' (no trailing slash)
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Dr. Tamar Koren',
    title: 'ד״ר תמר קורן – רופאת עור בחיפה',
    description: 'מרפאת עור מתקדמת בחיפה. קביעת תור מהירה.',
    images: [
      {
        url: 'https://drkoren.skin/og.jpg',
        width: 1200,
        height: 630,
        alt: 'ד״ר תמר קורן',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ד״ר תמר קורן – רופאת עור בחיפה',
    description: 'מרפאת עור מתקדמת בחיפה. קביעת תור מהירה.',
    images: ['https://drkoren.skin/og.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he-IL" dir="rtl" className="scroll-smooth">
      <body className={assistant.className}>{children}</body>
    </html>
  )
}
