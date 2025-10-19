import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { SITE } from '@/lib/config/site-config'
import { Assistant } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

const assistant = Assistant({
  subsets: ['hebrew'],
  weight: ['200', '300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ד״ר תמר קורן - מומחית ברפואת עור ומין',
  description: `ד״ר תמר קורן - דרמטולוגית מומחית בחיפה. טיפול אישי ומקצועי בילדים ומבוגרים: אקנה, בדיקת שומות, פסוריאזיס, נשירת שיער, אקזמה ועוד. קביעת תור: ${SITE.clinicPhone.display}`,
  authors: [{ name: 'Or Koren' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  keywords: [
    'ד״ר תמר קורן',
    'רופאת עור חיפה',
    'רופא עור חיפה',
    'רופאת עור בחיפה',
    'רופא עור בחיפה',
    'רופא עור מומלץ חיפה',
    'רופאת עור מומלצת חיפה',
    'רופא עור פרטי חיפה',
    'רופא עור דחוף חיפה',
    'רופא עור ילדים חיפה',
    'רופאת עור ילדים חיפה',
    'דרמטולוגית חיפה',
    'דרמטולוג חיפה',
    'רופא עור קריות',
    'רופאת עור קריות',
    'רופא עור צפון',
    'רופאת עור צפון',
    'רופא עור קרית אתא',
    'רופא עור קרית מוצקין',
    'מומחית רפואת עור ומין',
    'מומחית רפואת עור ומין',
    'בדיקת שומות חיפה', 
    'טיפול באקנה חיפה',
    'פסוריאזיס חיפה',
    'נשירת שיער חיפה',
    'אקזמה חיפה',
    'רוזציאה חיפה',
    'פיגמנטציה חיפה',
    'ויטיליגו חיפה',
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
    'service-area': 'Haifa, Kiryat Ata, Kiryat Motzkin, Kiryat Yam, Yokneam, Emek Yezreel, North Israel',
    'practice-type': 'Private medical practice',
    'target-audience': 'Children and adults seeking dermatological care',
  },
  metadataBase: new URL(SITE.baseUrl), // 'https://drkoren.skin' (no trailing slash)
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/assets/graphics/herb/herb.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/assets/graphics/herb/herb.svg',
    other: [
      { rel: 'icon', url: '/assets/graphics/herb/herb-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/assets/graphics/herb/herb-512.png', sizes: '512x512', type: 'image/png' },
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
        url: '/assets/graphics/herb/herb.png',
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
    images: ['/assets/graphics/herb/herb.png'],
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
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="8e5e2547-96fa-490f-8581-06674034debc"
          strategy="afterInteractive"
        />
        <SpeedInsights />
      </body>
    </html>
  )
}
