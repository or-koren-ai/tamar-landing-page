import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'שירותי המרפאה',
  description: 'סקירת כל שירותי המרפאה של ד"ר תמר קורן, כולל אבחון מחלות עור, בדיקת שומות, נשירת שיער, אקנה ועוד.',
  alternates: { canonical: '/services' },
  openGraph: { images: ['/leaf-og.png'], locale: 'he_IL' },
  twitter: { card: 'summary_large_image', images: ['/leaf-og.png'] },
}

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800" dir="rtl">
      <section className="py-10 md:py-16 bg-[#e8f0e8] bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-3xl md:text-5xl font-semibold text-[#6b8e6b] text-right m-0">שירותי המרפאה</h1>
            <Link href="/#שירותי-המרפאה" className="inline-flex items-center justify-center rounded-full border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors px-3 py-1.5 text-xs md:text-sm" aria-label="חזרה לדף הבית">
              חזרה
            </Link>
          </div>
          <p className="text-base md:text-lg text-gray-900 text-right max-w-3xl ml-auto">
            מבחר שירותים לאבחון וטיפול במחלות עור ושיער, תוך התאמת טיפול אישי לכל מטופל/ת.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <li key={s.key} className="bg-white rounded-xl shadow-md p-6 text-right">
                <h2 className="text-xl font-semibold text-[#859a85] mb-2">{s.title}</h2>
                <p className="mb-4 line-clamp-3 min-h-[3.5rem]">{s.description}</p>
                <Link href={`/services/${s.slug}`} className="text-sm text-[#A27B5C] hover:underline">
                  לקריאה נוספת
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
} 