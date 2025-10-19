"use client";

import { SITE } from '@/lib/config/site-config';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking/analytics';

export default function ServiceCTAButtons() {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-3">
      <a
        href={SITE.clinicPhone.link}
        onClick={() => trackPhoneClick('service-page')}
        className="h-12 w-full inline-flex items-center justify-center rounded-full bg-[var(--accent-strong)] text-white hover:text-white text-base font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] whitespace-nowrap"
      >
        <span className="text-base">התקשרו למרפאה</span>
      </a>

      <a
        href={SITE.whatsapp.link}
        onClick={() => trackWhatsAppClick('service-page')}
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-full mt-3 sm:mt-0 inline-flex items-center justify-center rounded-full border border-[var(--accent-strong)] text-[var(--accent-strong)] text-base font-medium hover:bg-[var(--bg-tint)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] whitespace-nowrap"
      >
        <span className="text-base">קביעת תור ב-WhatsApp</span>
      </a>
    </div>
  );
}
