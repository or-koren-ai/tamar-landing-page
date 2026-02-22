import { AboutExpandableText } from './AboutExpandableText'
import { AboutPhotoSlideshow } from './AboutPhotoSlideshow'

export function AboutSectionServer() {
  return (
    <section
      id="אודות"
      className="pt-4 pb-12 md:py-16 scroll-mt-24"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-4">
        <h2 id="about-title" className="text-3xl md:text-4xl font-light mb-6 md:mb-10 text-[#6b8e6b] text-center">אודות</h2>

        <div className="max-w-3xl mx-auto md:max-w-5xl md:flex md:flex-row-reverse md:gap-12 md:items-start">
          {/* Doctor Photo + Clinic Slideshow */}
          <div className="flex justify-center pb-6 md:pb-0 md:w-[380px] md:flex-shrink-0">
            <AboutPhotoSlideshow />
          </div>

          {/* Text Content */}
          <div className="md:flex-1 md:pt-1">
            <p className="mb-5 text-lg md:text-xl leading-relaxed">
              ד״ר תמר קורן היא רופאת עור פרטית בחיפה, מומחית לרפואת עור ומין ובוגרת הפקולטה לרפואה בטכניון.
              את התמחותה ברפואת עור ביצעה בין השנים 2019-2024 במרכז רפואי העמק, עפולה.
            </p>

            <p className="mb-5 text-lg md:text-xl leading-relaxed">
              ד״ר קורן היא רופאת עור מומלצת בעלת ניסיון רב בטיפול בילדים ומבוגרים וכיום עובדת כרופאה בכירה ואחראית מרפאת פסוריאזיס בבית החולים ׳העמק׳. במסגרת תפקיד זה הקימה מרפאה משותפת עם היחידה לראומטולוגיה המטפלת בחולי פסוריאזיס מורכבים.
            </p>

            <AboutExpandableText />
          </div>
        </div>
      </div>
    </section>
  )
}
