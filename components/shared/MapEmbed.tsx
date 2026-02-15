"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { SITE } from "@/lib/config/site-config";

type MapState = "facade" | "loading" | "loaded";

export default function MapEmbed() {
  const [state, setState] = useState<MapState>("facade");
  const containerRef = useRef<HTMLDivElement>(null);

  // Preconnect to Google Maps when user scrolls near the map
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const hints = [
            "https://maps.google.com",
            "https://maps.gstatic.com",
          ];
          hints.forEach((href) => {
            if (!document.querySelector(`link[href="${href}"]`)) {
              const link = document.createElement("link");
              link.rel = "preconnect";
              link.href = href;
              document.head.appendChild(link);
            }
          });
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleLoadMap = useCallback(() => {
    setState("loading");
  }, []);

  const handleIframeLoad = useCallback(() => {
    setState("loaded");
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {/* Static map image (always rendered for smooth transition) */}
      {state !== "loaded" && (
        <Image
          src={SITE.map.staticImage}
          alt={`מפת הקליניקה — ${SITE.address.streetAddress}, ${SITE.address.locality}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      )}

      {/* Facade overlay with load button */}
      {state === "facade" && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={handleLoadMap}
            aria-label="הצגת מפה אינטראקטיבית של מיקום הקליניקה"
            className="flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)] active:scale-95"
          >
            <svg
              className="size-5 text-[var(--accent-strong)]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            הצגת מפה
          </button>
        </div>
      )}

      {/* Loading spinner */}
      {state === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm text-gray-500 shadow-lg backdrop-blur-sm">
            <svg
              className="size-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            טוען מפה...
          </div>
        </div>
      )}

      {/* Interactive iframe (only rendered after user clicks) */}
      {state !== "facade" && (
        <iframe
          title={`מפת הקליניקה — ${SITE.address.streetAddress}, ${SITE.address.locality}`}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            state === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          src={SITE.map.embedSrc}
          style={{ border: 0 }}
          allowFullScreen={false}
          onLoad={handleIframeLoad}
        />
      )}
    </div>
  );
}
