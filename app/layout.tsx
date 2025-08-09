import type { Metadata } from 'next'
import './globals.css'
import { SITE } from '@/lib/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  alternates: { canonical: '/' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he-IL" dir="rtl" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
