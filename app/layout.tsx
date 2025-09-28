import type { Metadata } from 'next'
import './globals.css'
import { SITE } from '@/lib/site-config'
import { Assistant } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const assistant = Assistant({
  subsets: ['hebrew'],
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
  description: 'ד״ר תמר קורן - דרמטולוגית מומחית בחיפה. טיפול אישי ומקצועי בילדים ומבוגרים: אקנה, בדיקת שומות, פסוריאזיס, נשירת שיער, אקזמה ועוד. קביעת תור: 04-8340280',
  keywords: [
    'ד״ר תמר קורן',
    'רופאת עור חיפה',
    'רופא עור חיפה',
    'רופא עור מומלץ חיפה',
    'דרמטולוגית חיפה',
    'דרמטולוג חיפה',
    'מומחית רפואת עור ומין',
    'בדיקת שומות חיפה', 
    'טיפול באקנה חיפה',
    'פסוריאזיס חיפה',
    'נשירת שיער חיפה',
    'אקזמה חיפה',
    'רוזציאה חיפה',
    'פיגמנטציה חיפה',
    'ויטיליגו חיפה',
    'חיפה והקריות',
    'מרפאה פרטית רפואת עור חיפה',
    'Dermatologist Haifa',
    'Skin doctor Haifa',
    'Dr Tamar Koren'
  ],
  // AI/LLM-specific metadata
  other: {
    'ai-content-description': 'Medical practice website for Dr. Tamar Koren, dermatologist in Haifa, Israel. Provides information about skin treatments, medical services, appointment booking, and contact details.',
    'content-language': 'he-IL',
    'medical-specialty': 'Dermatology, Venereology',
    'service-area': 'Haifa, Kiryat Ata, Kiryat Motzkin, Kiryat Yam, North Israel',
    'practice-type': 'Private medical practice',
    'target-audience': 'Children and adults seeking dermatological care',
  },
  metadataBase: new URL(SITE.baseUrl), // 'https://drkoren.skin' (no trailing slash)
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/herb/herb.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/herb/herb.svg',
    other: [
      { rel: 'icon', url: '/herb/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/herb/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Dr. Tamar Koren',
    title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
    description: 'טיפול אישי ומקצועי לילדים ומבוגרים, מרפאה פרטית בחיפה, זימון תור מהיר',
    images: [
      {
        url: '/herb/android-chrome-512x512.png',
        alt: 'עלים - ד״ר תמר קורן',
        width: 512,
        height: 512,
      },
    ],
    locale: 'he_IL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
    description: 'טיפול אישי ומקצועי לילדים ומבוגרים, מרפאה פרטית בחיפה, זימון תור מהיר',
    images: ['/herb/android-chrome-512x512.png'],
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
        <SpeedInsights />
      </body>
    </html>
  )
}
