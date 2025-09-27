import type { Metadata } from 'next'
import './globals.css'
import { SITE } from '@/lib/site-config'
import { Assistant } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

const assistant = Assistant({
  subsets: ['hebrew'],
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
  description: 'טיפול אישי ומקצועי לילדים ומבוגרים, מרפאה פרטית בחיפה, זימון תור מהיר',
  keywords: [
    'רופאת עור חיפה',
    'רופא עור חיפה',
    'דרמטולוגית חיפה',
    'דרמטולוג חיפה',
    'רופא עור מומלץ חיפה',
    'מרפאת עור חיפה',
    'רפואת עור ומין',
    'דרמטולוגית מומחית',
    'חיפה והקריות',
    'Dermatologist Haifa',
    'Skin doctor Haifa',
  ],
  metadataBase: new URL(SITE.baseUrl), // 'https://drkoren.skin' (no trailing slash)
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Dr. Tamar Koren',
    title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
    description: 'טיפול אישי ומקצועי לילדים ומבוגרים, מרפאה פרטית בחיפה, זימון תור מהיר',
    images: [
      {
        url: '/herb.png',
        alt: 'עלים',
      },
    ],
    locale: 'he_IL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
    description: 'טיפול אישי ומקצועי לילדים ומבוגרים, מרפאה פרטית בחיפה, זימון תור מהיר',
    images: ['/herb.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he-IL" dir="rtl" className="scroll-smooth">
      <body className={assistant.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
