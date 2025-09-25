'use client'

import { useState } from 'react'
import Image from 'next/image'
import DoctorPhoto from '@/public/doctor-photo-large.jpg'
import { SITE } from '@/lib/site-config'

export function AboutSectionServer() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section
      id="אודות"
      className="py-12 md:py-16"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={DoctorPhoto}
            alt={SITE.hero.title}
            placeholder="blur"
            sizes="(min-width: 768px) 400px, 88vw"
            className="rounded-3xl shadow-lg w-full max-w-lg mx-auto md:max-w-md"
            priority
            fetchPriority="high"
          />
        </div>
        <div className="md:w-1/2 md:pr-8">
          <h2 id="about-title" className="text-3xl md:text-4xl font-light mb-8 text-[#6b8e6b] text-center md:text-right">אודות</h2>

          <p className="mb-6 text-xl leading-relaxed text-right">
            ד״ר תמר קורן היא מומחית לרפואת עור ומין, בוגרת הפקולטה לרפואה בטכניון.
            את התמחותה ברפואת עור ביצעה בין השנים 2019-2024 במרכז רפואי העמק, עפולה.
          </p>

          <p className="mb-6 text-xl leading-relaxed text-right">
            ד״ר קורן היא בעלת ניסיון רב בטיפול בילדים ומבוגרים וכיום עובדת כרופאה בכירה ואחראית מרפאת פסוריאזיס בבית החולים ׳העמק׳. במסגרת תפקיד זה הקימה מרפאה משותפת עם היחידה לראומטולוגיה המטפלת בחולי פסוריאזיס מורכבים.
          </p>

          <div>
            {!isExpanded && (
              <button
                className="text-[#6b8e6b] hover:text-[#859a85] transition-colors duration-200 underline text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85] rounded"
                onClick={() => setIsExpanded(true)}
              >
                קרא עוד
              </button>
            )}

            <div className={`overflow-hidden transition-all duration-500 ease-out ${
              isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className={`mt-4 transition-all duration-500 ease-out ${
                isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <p className="mb-6 text-xl leading-relaxed text-right">
                  בעלת פרסום מאמרים מדעיים ברפואת עור, עוסקת בהדרכת סטודנטים לרפואה בטכניון ובהתנדבות בעמותת 'למענם׳ המסייעת לניצולי שואה בקבלת מענה רפואי בביתם. כמו כן בוגרת קורס עיוני ומעשי לאסתטיקה רפואית, חברה באיגוד הישראלי לרפואת עור ומין ובחברה הישראלית לכירורגיה דרמטולוגית.
                </p>
                <p className="mb-6 text-xl leading-relaxed text-right">
                  ד״ר קורן מאמינה באבחון מדויק והתאמת טיפול אישי לכל מטופל/ת, תוך הקפדה על מקצועיות, מתן הסבר מפורט בגובה העיניים וגישה אנושית ואמפתית.
                </p>
                <button
                  className="text-[#6b8e6b] hover:text-[#859a85] transition-colors duration-200 underline text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85] rounded"
                  onClick={() => setIsExpanded(false)}
                >
                  הראה פחות
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}