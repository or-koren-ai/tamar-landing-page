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
      <body className={assistant.className}>{children}</body>
    </html>
  )
}
