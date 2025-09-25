import type { Metadata } from 'next'
import Image from 'next/image'
import { MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/site-config'
import { HyperhidrosisIcon } from '@/components/icons/HyperhidrosisIcon'

export const generateMetadata = (): Metadata => ({
  title: 'טיפול בהזעת יתר באמצעות בוטוקס | ד״ר תמר קורן',
  description:
    'טיפול יעיל בהזעת יתר באמצעות זריקות בוטוקס לידיים, כפות רגליים ובתי השחי. פתרון ארוך טווח למשך 6-12 חודשים בחיפה.',
  alternates: { canonical: 'https://drkoren.skin/services/hyperhidrosis' },
  openGraph: {
    title: 'טיפול בהזעת יתר באמצעות בוטוקס | ד״ר תמר קורן',
    description: 'טיפול יעיל בהזעת יתר באמצעות זריקות בוטוקס. פתרון ארוך טווח בחיפה.',
    url: 'https://drkoren.skin/services/hyperhidrosis',
    locale: 'he_IL',
    images: ['/doctor-photo-large.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/doctor-photo-large.jpg'] },
})

export default function HyperhidrosisPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl">
      <header className="py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex-shrink-0">
              <Image
                src="/logo-tk.png"
                alt={SITE.name}
                width={200}
                height={50}
                className="h-auto w-auto max-w-[200px]"
                priority
              />
            </a>
            <nav className="hidden md:block">
              <a href="/" className="text-[#859a85] hover:text-[#6b8e6b] transition-colors">
                חזרה לעמוד הראשי
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-[#A27B5C] flex items-center justify-center">
              <HyperhidrosisIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-[#6b8e6b] mb-2">
                טיפול בהזעת יתר
              </h1>
              <p className="text-xl">זריקות בוטוקס לטיפול יעיל בהזעת יתר</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-right">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#859a85] mb-6">מה זו הזעת יתר?</h2>
              <p className="text-xl leading-relaxed mb-6">
                הזעת יתר (הייפרהידרוזיס) היא מצב רפואי הגורם להזעה מוגזמת מעבר לצרכי ויסות החום הטבעיים של הגוף. 
                המצב יכול להשפיע על איכות החיים באופן משמעותי ולגרום למצוקה חברתית ורגשית.
              </p>
              <p className="text-xl leading-relaxed">
                הזעת יתר יכולה להתרחש באזורים שונים בגוף, כגון כפות הידיים, כפות הרגליים, בתי השחי ואף הפנים.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#859a85] mb-6">טיפול בבוטוקס להזעת יתר</h2>
              <p className="text-xl leading-relaxed mb-6">
                זריקות בוטוקס הן פתרון יעיל ובטוח לטיפול בהזעת יתר. הבוטוקס פועל על ידי חסימת האותות העצביים 
                המגיעים לבלוטות הזיעה, ובכך מפחית משמעותית את כמות הזיעה המופרשת באזור המטופל.
              </p>
              
              <h3 className="text-xl font-medium text-[#6b8e6b] mb-4">יעילות הטיפול:</h3>
              <ul className="text-lg space-y-3 mb-6">
                <li>• הפחתה של עד 87% ברמת ההזעה</li>
                <li>• שיפור מיידי תוך 2-4 ימים מהטיפול</li>
                <li>• יעילות מרבית תוך 2 שבועות</li>
                <li>• משך פעילות של 6-12 חודשים</li>
              </ul>

              <h3 className="text-xl font-medium text-[#6b8e6b] mb-4">אזורי טיפול:</h3>
              <ul className="text-lg space-y-3">
                <li>• כפות הידיים</li>
                <li>• בתי השחי</li>
                <li>• כפות הרגליים</li>
                <li>• אזור הפנים (במקרים מסוימים)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#859a85] mb-6">תהליך הטיפול</h2>
              <div className="space-y-6">
                <div className="bg-[#f8faf8] p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">1. ייעוץ ראשוני</h3>
                  <p>
                    בדיקה מקיפה ואבחון מצב ההזעה, הסבר על תהליך הטיפול ותשובה לכל השאלות.
                  </p>
                </div>
                
                <div className="bg-[#f8faf8] p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">2. הכנה לטיפול</h3>
                  <p>
                    הרדמה מקומית קלה באזור הטיפול להפחתת אי נוחות.
                  </p>
                </div>
                
                <div className="bg-[#f8faf8] p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">3. ביצוע הטיפול</h3>
                  <p>
                    זריקות בוטוקס מדויקות באזור המטופל. הטיפול אורך כ-15-30 דקות.
                  </p>
                </div>
                
                <div className="bg-[#f8faf8] p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">4. מעקב</h3>
                  <p>
                    מעקב לאחר הטיפול והערכת התוצאות תוך שבועיים.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#859a85] mb-6">שאלות נפוצות</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">האם הטיפול כואב?</h3>
                  <p>
                    הטיפול כולל אי נוחות קלה בלבד. משתמשים בהרדמה מקומית ובמחטים דקות במיוחד.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">מה לגבי תופעות לוואי?</h3>
                  <p>
                    תופעות הלוואי נדירות וזמניות, ועשויות לכלול נפיחות קלה או חולשה זמנית באזור הטיפול.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#6b8e6b] mb-3">כמה זמן נמשך הטיפול?</h3>
                  <p>
                    תוצאות הטיפול נמשכות בין 6-12 חודשים, לאחר מכן ניתן לחזור על הטיפול.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#e8f0e8] bg-opacity-30 p-8 rounded-2xl mb-12">
              <h2 className="text-2xl font-medium text-[#859a85] mb-6 text-center">קבעו תור היום</h2>
              <p className="text-lg text-center mb-8">
                לייעוץ מקצועי וטיפול בהזעת יתר באמצעות בוטוקס
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                  href={SITE.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] text-[#25D366] bg-white hover:bg-[#25D366] hover:text-white transition-colors px-6 py-3 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>קביעת תור בוואטסאפ</span>
                </a>

                <a
                  href={SITE.clinicPhone.link}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A27B5C] text-white hover:bg-[#859a85] transition-colors px-6 py-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>התקשרות למרפאה</span>
                </a>
              </div>
            </section>

            <div className="text-center">
              <a 
                href="/" 
                className="inline-flex items-center gap-2 text-[#859a85] hover:text-[#6b8e6b] transition-colors text-lg"
              >
                <ArrowRight className="w-5 h-5" />
                <span>חזרה לעמוד הראשי</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}