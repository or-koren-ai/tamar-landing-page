'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { SITE } from '@/lib/site-config'

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="אודות" 
      className={`py-12 md:py-16 transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ willChange: isVisible ? 'auto' : 'opacity, transform' }}
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/doctor-photo.jpg"
            alt={SITE.hero.title}
            width={400}
            height={600}
            className="rounded-3xl shadow-lg w-full max-w-md mx-auto"
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

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ willChange: isExpanded ? 'auto' : 'max-height, opacity' }}>
            <p className="mb-6 text-xl leading-relaxed text-right">
              בעלת פרסום מאמרים מדעיים ברפואת עור, עוסקת בהדרכת סטודנטים לרפואה בטכניון ובהתנדבות בעמותת 'למענם׳ המסייעת לניצולי שואה בקבלת מענה רפואי בביתם. כמו כן בוגרת קורס עיוני ומעשי לאסתטיקה רפואית, חברה באיגוד הישראלי לרפואת עור ומין ובחברה הישראלית לכירורגיה דרמטולוגית.
            </p>
            <p className="mb-6 text-xl leading-relaxed text-right">
              ד״ר קורן מאמינה באבחון מדויק והתאמת טיפול אישי לכל מטופל/ת, תוך הקפדה על מקצועיות, מתן הסבר מפורט בגובה העיניים וגישה אנושית ואמפתית.
            </p>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#6b8e6b] hover:text-[#859a85] transition-colors duration-200 underline text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#859a85] rounded"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'הראה פחות' : 'קרא עוד'}
          </button>
        </div>
      </div>
    </section>
  )
}