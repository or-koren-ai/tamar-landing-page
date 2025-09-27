"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/site-config";

export default function MapEmbed() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const reviewsSection = document.querySelector('#ביקורות');
    if (!reviewsSection) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px 0px 0px 0px', // Start loading 200px before reviews section is visible
        threshold: 0
      }
    );

    observer.observe(reviewsSection);

    return () => observer.disconnect();
  }, []);

  if (!shouldLoad) {
    return (
      <div className="h-full w-full rounded-xl md:rounded-none bg-gray-100 animate-pulse flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <div className="w-8 h-8 mx-auto mb-2 opacity-50">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <span className="text-sm">טוען מפה...</span>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title={`מפת הקליניקה — ${SITE.address.streetAddress}, ${SITE.address.locality}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-full w-full rounded-xl md:rounded-none"
      src={SITE.map.embedSrc}
      style={{ border: 0 }}
      allowFullScreen={false}
    />
  );
}