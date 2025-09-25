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
  title: 'רופאת עור בחיפה - ד״ר תמר קורן | דרמטולוגית מומחית',
  description: 'דרמטולוגית ורופאת עור מומחית בחיפה והקריות. אבחון וטיפול באקנה, נקודות חן, פסוריאזיס, אטופיק, רוזצאה ועוד. קליניקה פרטית במוריה 84, חיפה. קביעת תור מהיר.',
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
    title: 'רופאת עור בחיפה - ד״ר תמר קורן | דרמטולוגית מומחית',
    description: 'דרמטולוגית ורופאת עור מומחית בחיפה והקריות. אבחון וטיפול באקנה, נקודות חן, פסוריאזיס, אטופיק, רוזצאה ועוד. קליניקה פרטית במוריה 84, חיפה. קביעת תור מהיר.',
    images: [
      {
        url: '/doctor-photo-large.jpg',
        width: 1200,
        height: 630,
        alt: 'ד״ר תמר קורן',
      },
    ],
    locale: 'he_IL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'רופאת עור בחיפה - ד״ר תמר קורן | דרמטולוגית מומחית',
    description: 'דרמטולוגית ורופאת עור מומחית בחיפה והקריות. אבחון וטיפול באקנה, נקודות חן, פסוריאזיס, אטופיק, רוזצאה ועוד. קליניקה פרטית במוריה 84, חיפה. קביעת תור מהיר.',
    images: ['/doctor-photo-large.jpg'],
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
