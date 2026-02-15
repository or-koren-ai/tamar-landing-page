import { AboutExpandableText } from './AboutExpandableText'

export function AboutSectionServer() {
  return (
    <section
      id="אודות"
      className="pt-4 pb-12 md:py-16 scroll-mt-24"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 id="about-title" className="text-3xl md:text-4xl font-light mb-6 md:mb-12 text-[#6b8e6b] text-center">אודות</h2>

          <p className="mb-6 text-xl leading-relaxed text-right">
            ד״ר תמר קורן היא רופאת עור פרטית בחיפה, מומחית לרפואת עור ומין ובוגרת הפקולטה לרפואה בטכניון.
            את התמחותה ברפואת עור ביצעה בין השנים 2019-2024 במרכז רפואי העמק, עפולה.
          </p>

          <p className="mb-6 text-xl leading-relaxed text-right">
            ד״ר קורן היא רופאת עור מומלצת בעלת ניסיון רב בטיפול בילדים ומבוגרים וכיום עובדת כרופאה בכירה ואחראית מרפאת פסוריאזיס בבית החולים ׳העמק׳. במסגרת תפקיד זה הקימה מרפאה משותפת עם היחידה לראומטולוגיה המטפלת בחולי פסוריאזיס מורכבים.
          </p>

          <AboutExpandableText />
        </div>
      </div>
    </section>
  )
}
