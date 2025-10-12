import { Metadata } from "next";
import { SITE } from "@/lib/site-config";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { MobileMenu } from "@/components/MobileMenu";
import Script from 'next/script';

export const metadata: Metadata = {
  title: `מדיניות פרטיות | ${SITE.name}`,
  description:
    "מדיניות פרטיות של אתר הרופאה ד\"ר תמר קורן, דרמטולוגית מומחית בחיפה. מידע על איסוף, שימוש ואבטחת מידע אישי.",
  alternates: { canonical: `${SITE.baseUrl}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
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
                  src="/logo-tk.png"
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
              מדיניות פרטיות
            </h1>

          <div className="prose prose-base max-w-none text-gray-700 leading-relaxed [&_h2]:text-[#6b8e6b] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:border-b-2 [&_h2]:border-gray-200 [&_h2]:pb-2 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-6 [&_li]:mb-2 [&_strong]:text-gray-800 [&_strong]:font-semibold [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm">
            <p>
              אתר <strong>{SITE.name}</strong> ({SITE.baseUrl}) מכבד את פרטיותכם. אתר זה הוא אתר מידע בלבד ואינו אוסף 
              מידע אישי מזהה של המבקרים באתר.
            </p>

            <h2>היקף המדיניות</h2>
            <p>
              מדיניות פרטיות זו חלה על אתר האינטרנט <strong>{SITE.baseUrl}</strong> בלבד. תכנים ושירותים של צדדים 
              שלישיים המוטמעים באתר (למשל Google Maps, מערכת ביקורות MedReviews) 
              פועלים על־פי מדיניות הפרטיות של אותם ספקים.
            </p>

            <h2>איסוף מידע באתר</h2>
            <p>
              <strong>האתר אינו אוסף מידע אישי מזהה.</strong> אין באתר טפסים למילוי פרטים, ואין באתר דרך להשאיר 
              פרטים אישיים כגון שם, מספר טלפון או כתובת דוא״ל.
            </p>
            <p>
              כל יצירת קשר עם המרפאה נעשית באמצעים חיצוניים לאתר - WhatsApp, טלפון או דוא״ל ישיר - ומידע שנמסר 
              בערוצים אלו אינו נאסף או מנוהל דרך האתר עצמו.
            </p>

            <h2>מידע סטטיסטי אנונימי</h2>
            <p>האתר משתמש בשירותי ניתוח וביצועים פרטיים בלבד:</p>
            <ul>
              <li>
                <strong>Umami Analytics:</strong> שירות ניתוח אנונימי לחלוטין שאוסף מידע סטטיסטי בסיסי על תנועה באתר
                (מספר צפיות בדפים, מקור התנועה, סוג מכשיר). השירות אינו משתמש ב-Cookies, אינו אוסף מידע אישי מזהה,
                ואינו עוקב אחר משתמשים בין אתרים שונים. תואם תקנת ה-GDPR ללא צורך בהסכמה מפורשת.
              </li>
              <li>
                <strong>Vercel Speed Insights:</strong> אוסף מידע אנונימי על מהירות טעינת האתר ומדדי ביצועים טכניים
                לשיפור חווית השימוש.
              </li>
            </ul>
            <p>
              שירותים אלו אינם אוספים מידע אישי מזהה ואינם משתמשים ב-Cookies למעקב. המידע משמש אך ורק למטרות
              סטטיסטיות ושיפור ביצועי האתר.
            </p>

            <h2>שירותי צד שלישי מוטמעים</h2>
            <p>האתר כולל הטמעות של שירותי צד שלישי הבאים:</p>
            <ul>
              <li>
                <strong>Google Maps:</strong> להצגת מיקום המרפאה. Google עשויה לאסוף מידע בהתאם למדיניות הפרטיות שלה.
              </li>
              <li>
                <strong>MedReviews:</strong> להצגת ביקורות. MedReviews עשויה לאסוף מידע בהתאם למדיניות הפרטיות שלה.
              </li>
            </ul>
            <p>
              שירותים אלו מנוהלים באופן עצמאי על־ידי החברות המפעילות אותם, ואנו ממליצים לקרוא את מדיניות הפרטיות 
              שלהן.
            </p>

            <h2>Cookies</h2>
            <p>
              <strong>האתר אינו משתמש ב-Cookies משלו לאיסוף או מעקב אחר מידע.</strong>
            </p>
            <p>
              שירותי צד שלישי המוטמעים באתר (Google Maps, MedReviews) עשויים להשתמש ב-Cookies משלהם. אתם יכולים 
              לנהל או לחסום Cookies אלו דרך הגדרות הדפדפן שלכם.
            </p>

            <h2>שיתוף מידע</h2>
            <p>
              מכיוון שהאתר אינו אוסף מידע אישי מזהה, אין מידע כזה לשיתוף. המידע הסטטיסטי האנונימי נשאר אצל 
              Vercel ואינו מועבר לגורמים נוספים.
            </p>

            <h2>אבטחת מידע</h2>
            <p>
              האתר משתמש בהצפנת תעבורה (HTTPS/SSL) כדי להבטיח חיבור מאובטח. מכיוון שהאתר אינו אוסף מידע אישי, 
              אין סיכון לדליפת מידע אישי דרכו.
            </p>

            <h2>זכויותיכם</h2>
            <p>בהתאם לחוק הגנת הפרטיות בישראל, יש לכם את הזכויות הבאות:</p>
            <ul>
              <li>
                <strong>זכות עיון:</strong> לבקש לקבל עותק מהמידע האישי שנמצא אצלנו עליכם.
              </li>
              <li>
                <strong>זכות תיקון:</strong> לבקש לעדכן או לתקן מידע שגוי או לא מדויק.
              </li>
              <li>
                <strong>זכות מחיקה:</strong> לבקש למחוק את המידע האישי שלכם (בכפוף לחובות משפטיות ורפואיות).
              </li>
              <li>
                <strong>זכות התנגדות:</strong> להתנגד לשימוש במידע שלכם למטרות שיווק ישיר.
              </li>
            </ul>
            <p>
              למימוש זכויות אלו, אנא פנו אלינו בפרטי הקשר המפורטים בסעיף &quot;יצירת קשר&quot; למטה.
            </p>

            <h2>כיצד אנו מתקשרים עם הגולשים באתר</h2>
            <p>
              אנו עשויים ליצור קשר איתכם בדרכים הבאות:
            </p>
            <ul>
              <li>
                <strong>מענה לפניות:</strong> תגובה לשאלות או בקשות שנשלחו דרך WhatsApp, טלפון או דוא״ל.
              </li>
              <li>
                <strong>תזכורות ועדכונים:</strong> במידה ונתתם הסכמה מפורשת, נוכל לשלוח תזכורות לתורים או עדכונים 
                רלוונטיים למרפאה.
              </li>
              <li>
                <strong>מידע חשוב:</strong> הודעות הכרחיות הנוגעות לשירותים שלנו או לשינויים באתר.
              </li>
            </ul>
            <p>
              אנו לא נשלח תכנים שיווקיים ללא הסכמתכם המפורשת, ותמיד תוכלו לבטל את ההרשמה או לבקש להפסיק קבלת 
              הודעות.
            </p>

            <h2>ביטול הסכמה ואי-הסכמה לאיסוף מידע</h2>
            <p>
              הסכמתכם לאיסוף ושימוש במידע היא וולונטרית. אתם יכולים:
            </p>
            <ul>
              <li>לבחור שלא למסור מידע אישי (אם כי זה עשוי להגביל את יכולתנו לספק שירותים מסוימים).</li>
              <li>לחסום או למחוק Cookies דרך הגדרות הדפדפן.</li>
              <li>לבקש מאיתנו להפסיק להשתמש במידע שלכם או למחוק אותו (ראו סעיף &quot;זכויותיכם&quot;).</li>
              <li>
                לבטל הסכמה לקבלת תקשורת שיווקית בכל עת, על־ידי פניה אלינו או באמצעות קישור &quot;הסר מרשימת 
                התפוצה&quot; בהודעות.
              </li>
            </ul>

            <h2>קישורים לאתרים חיצוניים</h2>
            <p>
              האתר שלנו עשוי לכלול קישורים לאתרים חיצוניים (למשל Instagram, MedReviews). אנו לא אחראים למדיניות 
              הפרטיות או לתכנים של אתרים אלה. אנו ממליצים לקרוא את מדיניות הפרטיות של כל אתר שאליו תגיעו.
            </p>

            <h2>פרטיות של קטינים</h2>
            <p>
              שירותי המרפאה ניתנים גם לילדים. במקרה של קטינים, איסוף מידע אישי יתבצע רק בידיעת ההורה או האפוטרופוס 
              החוקי. אם הנכם הורים או אפוטרופוסים ומאמינים כי קיבלנו מידע מקטין ללא הסכמתכם, אנא פנו אלינו מיד 
              ונפעל למחיקת המידע.
            </p>

            <h2>שמירה והעברת מידע בינלאומית</h2>
            <p>
              המידע שלכם מאוחסן בשרתים מאובטחים הממוקמים בישראל ו/או באזורים אחרים (באמצעות ספקי שירות כמו Vercel). 
              במקרה של העברת מידע למדינות אחרות, אנו מוודאים שהעברה זו נעשית בהתאם לדרישות הדין ובאמצעות מנגנוני 
              אבטחה מתאימים.
            </p>

            <h2>עדכונים למדיניות הפרטיות</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לשנות או לעדכן מדיניות פרטיות זו בכל עת. במקרה של שינויים מהותיים, 
              נפרסם הודעה על כך באתר ונציין את תאריך העדכון. מומלץ לחזור ולקרוא את מדיניות הפרטיות מדי פעם 
              כדי להישאר מעודכנים.
            </p>
            <p>
              כל שינוי או עדכון יכנסו לתוקף מרגע פרסומם באתר. המשך השימוש באתר לאחר שינויים אלה מהווה הסכמה 
              לתנאים המעודכנים.
            </p>

            <h2>יצירת קשר</h2>
            <p>
              אם יש לכם שאלות, הערות או בקשות בנוגע למדיניות פרטיות זו או לטיפול במידע האישי שלכם, נשמח לשמוע מכם:
            </p>
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
              נשתדל לטפל בפנייתכם בהקדם האפשרי ולספק את המידע או העזרה הדרושים.
            </p>

            <h2>תאריך עדכון</h2>
            <p>
              מדיניות פרטיות זו עודכנה לאחרונה בתאריך{" "}
              <time dateTime={new Date().toISOString()}>
                {new Date().toLocaleDateString("he-IL")}
              </time>
              .
            </p>
          </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#859a85] text-gray-900 py-8 text-center font-normal overflow-hidden relative z-30">
        <div className="container mx-auto px-4">
          <div className="footer-content opacity-100 translate-y-0 transition-all duration-700 ease-out">
            <div className="mb-2">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity duration-300 text-lg"
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
            <p>&copy; {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות. | <a href="/accessibility-declaration" className="text-gray-900 hover:text-gray-700 transition-colors duration-300">הצהרת נגישות</a> | <a href="/privacy-policy" className="text-gray-900 hover:text-gray-700 transition-colors duration-300">מדיניות פרטיות</a></p>
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

