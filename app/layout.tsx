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
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Dr. Tamar Koren',
    title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
    description: 'טיפול אישי ומקצועי לילדים ומבוגרים, מרפאה פרטית בחיפה, זימון תור מהיר',
    images: [
      {
        url: '/logo-tk.png',
        width: 1200,
        height: 630,
        alt: 'ד״ר תמר קורן - לוגו',
      },
    ],
    locale: 'he_IL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
    description: 'טיפול אישי ומקצועי לילדים ומבוגרים, מרפאה פרטית בחיפה, זימון תור מהיר',
    images: ['/logo-tk.png'],
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
