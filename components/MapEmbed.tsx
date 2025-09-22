"use client";

import { SITE } from "@/lib/site-config";

export default function MapEmbed() {
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