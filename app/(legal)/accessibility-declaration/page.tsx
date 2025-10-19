import { Metadata } from "next";
import { SITE } from "@/lib/config/site-config";
import Image from "next/image";
import { Navigation } from "@/components/features/header/Navigation";
import { MobileMenu } from "@/components/features/header/MobileMenu";
import Script from 'next/script';

export const metadata: Metadata = {
  title: `הצהרת נגישות | ${SITE.name}`,
  description:
    "הצהרת נגישות של אתר הרופאה ד\"ר תמר קורן, דרמטולוגית מומחית בחיפה. מידע על התאמות נגישות, חריגים, יצירת קשר ומשוב.",
  alternates: { canonical: `${SITE.baseUrl}/accessibility-declaration` },
};

export default function AccessibilityDeclarationPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl">
      <header className="py-3 bg-white shadow-md sticky top-0 z-50 animate-header-slide">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Navigation />
              <MobileMenu />
            </div>
            <div className="flex-shrink-0">
              <a href="/">
                <Image
                  src="/assets/images/logo-tk.png"
                  alt={SITE.name}
                  width={200}
                  height={50}
                  className="h-auto w-auto max-w-[200px]"
                  priority
                  fetchPriority="high"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16" aria-labelledby="page-title">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 id="page-title" className="mb-8 text-center text-3xl font-bold text-gray-900">
              הצהרת נגישות
            </h1>

          <div className="prose prose-base max-w-none text-gray-700 leading-relaxed [&_h2]:text-[#6b8e6b] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:border-b-2 [&_h2]:border-gray-200 [&_h2]:pb-2 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-6 [&_li]:mb-2 [&_strong]:text-gray-800 [&_strong]:font-semibold [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm">
            <p>
              אתר <strong>{SITE.name}</strong> ({SITE.baseUrl}) שואף להנגיש את תכניו ושירותיו לכלל הציבור, כולל אנשים
              עם מוגבלויות. אנו פועלים בהתאם לעקרונות ההנגישות ולמיטב היכולת והמשאבים של המרפאה.
            </p>

            <h2>היקף ההצהרה</h2>
            <p>
              הצהרה זו חלה על אתר האינטרנט <strong>{SITE.baseUrl}</strong> בלבד. תכנים ושירותים של צדדים שלישיים
              המוטמעים באתר (למשל Google Maps, מערכת ביקורות MedReviews, הטמעות רשתות חברתיות) פועלים
              על־פי הנהלים של אותם ספקים ועלולים להיות פחות נגישים.
            </p>

            <h2>סטנדרטים ועמידה בהנחיות</h2>
            <ul>
              <li>אנו שואפים לעמידה בהנחיות WCAG 2.1 ברמה AA.</li>
              <li>האתר פותח במבנה סמנטי וברכיבים ידידותיים לקוראי מסך.</li>
              <li>תומכים בניווט מקלדת ובהפחתת תנועה למשתמשים עם העדפה <code>prefers-reduced-motion</code>.</li>
              <li>צבעים וניגודיות נבדקים לדרישות קריאות; איפה שנדרש נעשה חידוד ניגודיות.</li>
            </ul>

            <h2>מה יישמנו באתר</h2>
            <ul>
              <li>כותרות היררכיות, אזורי ניווט ו־Landmarks ברורים.</li>
              <li>טקסט חלופי משמעותי לתמונות ולסמלים איקוניים.</li>
              <li>מיקוד מקלדת גלוי והיגיון במעבר בין רכיבים.</li>
              <li>תוויות ברורות לכפתורים וקישורים, כולל תיאור מטרה.</li>
              <li>התאמות RTL מלאות ותמיכה בתוכן דו־לשוני.</li>
              <li>טעינה דחויה של רכיבים כבדים והפחתת זעזועי פריסה (CLS).</li>
            </ul>

            <h2>תוכן שאינו נגיש במלואו / מגבלות ידועות</h2>
            <p>למרות מאמצינו, ייתכנו אזורים שאינם נגישים במלואם:</p>
            <ul>
              <li>
                <strong>מפות:</strong> רכיב Google Maps מספק מידע חזותי שעשוי שלא להיות נגיש לחלוטין לקוראי מסך.
              </li>
              <li>
                <strong>תוכן צד ג׳:</strong> אזורי ביקורות חיצוניים וקרוסלות עשויים לכלול תגיות שאינן בשליטתנו.
              </li>
              <li>
                <strong>מסמכים חיצוניים/קבצים:</strong> ייתכן שחלקם לא הותאמו עדיין לפורמט נגיש.
              </li>
            </ul>
            <p>
              אנו ממשיכים לשפר ולתקן ליקויים שיידעו לנו, על־פי סדרי עדיפויות המבוססים על שימושיות והשפעה על
              המשתמשים.
            </p>

            <h2>חלופות נגישות</h2>
            <p>
              אם אינכם יכולים לבצע פעולה באתר או לצפות במידע מסוים, ניתן לקבל את השירות או המידע באמצעי חלופי
              ללא תשלום, למשל במענה טלפוני, בדוא״ל או במסמך נגיש לפי בקשה סבירה.
            </p>
            <h2>יצירת קשר ומשוב על נגישות</h2>
            <p>נשמח לקבל פניות, דיווחים והצעות לשיפור נגישות האתר:</p>
            <address className="not-italic">
              <ul>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={SITE.whatsapp.link}
                    className="text-[var(--accent-strong)] underline-offset-2 hover:underline"
                  >
                    {SITE.whatsapp.display}
                  </a>
                </li>
              </ul>
            </address>
            <p className="text-sm text-gray-600">
              נא פרטו בפנייה את שם הדף/הרכיב הבעייתי, תיאור התקלה, סוג הדפדפן/מערכת ההפעלה והטכנולוגיה המסייעת,
              ככל הידוע.
            </p>

            <h2>אחראי/ת נגישות באתר</h2>
            <p>צוות המרפאה משמש כגורם האחראי לטיפול בפניות נגישות באתר ולשיפור מתמשך.</p>

            <h2>אכיפה וסיוע חיצוני</h2>
            <p>
              אם פניתם אלינו וקיבלתם מענה שאינו מספק, ניתן לפנות לגורמי אכיפה וסיוע ממשלתיים לפי הדין. נשמח
              לסייע בהכוונה.
            </p>

            <h2>תאריך עדכון</h2>
            <p>
              הצהרה זו עודכנה לאחרונה בתאריך{" "}
              <time dateTime={new Date().toISOString()}>
                {new Date().toLocaleDateString("he-IL")}
              </time>
              , ונבחנת אחת לתקופה או בעת שינוי משמעותי באתר.
            </p>
          </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#859a85] text-white py-8 text-center font-normal overflow-hidden relative z-30">
        <div className="container mx-auto px-4">
          <div className="footer-content opacity-100 translate-y-0 transition-all duration-700 ease-out">
            <div className="mb-2">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity duration-300 text-lg"
                aria-label="עקבו אחרינו באינסטגרם"
              >
                <span>Instagram</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833ab4" />
                      <stop offset="50%" stopColor="#fd1d1d" />
                      <stop offset="100%" stopColor="#fcb045" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instagram-gradient-footer)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                </svg>
              </a>
            </div>
            <p className="flex flex-col md:flex-row items-center justify-center gap-2">
              <span>&copy; {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות.</span>
              <span className="flex items-center gap-2">
                <a href="/accessibility-declaration" className="text-white hover:opacity-80 transition-opacity duration-300">הצהרת נגישות</a>
                <span>|</span>
                <a href="/privacy-policy" className="text-white hover:opacity-80 transition-opacity duration-300">מדיניות פרטיות</a>
              </span>
            </p>
          </div>
        </div>
      </footer>

      <Script id="footer-anim" strategy="afterInteractive">
        {`
          (function () {
            var footer = document.querySelector('footer');
            var footerContent = footer && footer.querySelector('.footer-content');
            if (!footer || !footerContent || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

            var observer = new IntersectionObserver(function(entries){
              for (var i=0;i<entries.length;i++) {
                if (entries[i].isIntersecting) {
                  footerContent.classList.remove('opacity-0', 'translate-y-8');
                  footerContent.classList.add('opacity-100', 'translate-y-0');
                  observer.disconnect();
                  break;
                }
              }
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            observer.observe(footer);
          })();
        `}
      </Script>
    </div>
  );
}
