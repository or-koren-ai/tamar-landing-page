import type { Metadata } from 'next'
import Link from 'next/link'
import { servicesList } from '@/lib/data/services-list'
import { SITE } from '@/lib/config/site-config'

export const metadata: Metadata = {
  title: 'שירותי המרפאה | ד״ר תמר קורן',
  description: 'סקירת כל שירותי המרפאה של ד״ר תמר קורן - רופאת עור מומחית בחיפה. אבחון מחלות עור, בדיקת שומות, נשירת שיער, אקנה, פיגמנטציה ועוד.',
  alternates: { canonical: '/services' },
  openGraph: { images: ['/assets/images/og-doctor-photo.jpg'], locale: 'he_IL' },
  twitter: { card: 'summary_large_image', images: ['/assets/images/og-doctor-photo.jpg'] },
}

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "שירותי המרפאה של ד״ר תמר קורן",
  itemListElement: servicesList.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MedicalTherapy",
      name: s.title,
      description: s.description,
      url: `${SITE.baseUrl}/services/${s.slug}`,
    },
  })),
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
            {servicesList.map((s) => (
              <li key={s.key} className="bg-white rounded-xl shadow-md p-6 text-right">
                <h2 className="text-xl font-semibold text-[#859a85] mb-2">{s.title}</h2>
                <p className="mb-4 line-clamp-3 min-h-[3.5rem]">{s.description}</p>
                <Link href={`/services/${s.slug}`} prefetch={true} className="text-sm text-[#A27B5C] hover:underline">
                  לקריאה נוספת
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesListSchema),
        }}
      />
    </main>
  )
}
