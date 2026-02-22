'use client'

import { useState } from 'react'

export function AboutExpandableText() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
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
          <p className="mb-5 text-lg md:text-xl leading-relaxed">
            בעלת פרסום מאמרים מדעיים ברפואת עור, עוסקת בהדרכת סטודנטים לרפואה בטכניון ובהתנדבות בעמותת 'למענם׳ המסייעת לניצולי שואה בקבלת מענה רפואי בביתם. כמו כן בוגרת קורס עיוני ומעשי לאסתטיקה רפואית, חברה באיגוד הישראלי לרפואת עור ומין ובחברה הישראלית לכירורגיה דרמטולוגית.
          </p>
          <p className="mb-5 text-lg md:text-xl leading-relaxed">
            המרפאה הפרטית נמצאת בחיפה ומשרתת תושבים מכל אזור הצפון כולל קריית אתא, קריית מוצקין, קריית ביאליק, עמק יזרעאל, יוקנעם והסביבה. המרפאה מציעה זמינות גבוהה לתור דחוף ברפואת עור.
          </p>
          <p className="mb-5 text-lg md:text-xl leading-relaxed">
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
  )
}
