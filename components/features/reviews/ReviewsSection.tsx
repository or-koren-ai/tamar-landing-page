import React from "react"
import { reviews } from "@/lib/data/reviews"
import { SITE } from "@/lib/config/site-config"

// Star rating component
const Stars = ({ value = 5 }: { value: number }) => (
  <span className="review-stars" role="img" aria-label={`דירוג ${value} מתוך 5`}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className={`w-4 h-4 ${i < value ? 'fill-current' : 'fill-gray-200'}`}>
        <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29c.13.41.51.69.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03c-.35.26-.49.72-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1.1 1.1 0 0 0-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29c.13-.4-.01-.86-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46c.44 0 .82-.28.95-.69L9.05 2.93z"/>
      </svg>
    ))}
  </span>
);

// Helper function for initials
const initials = (name: string) => name.trim().split(/\s+/).map(w=>w[0]).slice(0,2).join('');

// Review card component
const ReviewCard: React.FC<{ review: any }> = ({ review }) => {
  return (
    <article className="review-card" dir="rtl">
      <header className="review-header">
        <div className="review-id">
          <div className="review-avatar" aria-hidden="true">{initials(review.name)}</div>
          <div className="text-right">
            <div className="review-name">{review.name}{review.city ? <span className="review-city">, {review.city}</span> : null}</div>
            <div><Stars value={Math.round(review.rating)} /></div>
          </div>
        </div>
      </header>

      <p className="review-text text-right">{review.text}</p>

      <footer className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          {review.treatment ? <span className="review-chip">{review.treatment}</span> : null}
        </div>
      </footer>
    </article>
  );
};

export function ReviewsSection() {
  return (
    <section id="ביקורות" className="py-12 md:py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-center text-[#859a85]">ביקורות מטופלים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <p className="text-sm text-center">
            לעוד ביקורות — <a href={SITE.socials.medreviews} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">MedReviews</a>
          </p>
        </div>
      </div>
    </section>
  )
}