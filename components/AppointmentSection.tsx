"use client";

import dynamic from "next/dynamic";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-config";

const MapEmbed = dynamic(() => import("./MapEmbed"), { ssr: false });

export default function AppointmentSection() {
  return (
    <section id="קביעת-תור" dir="rtl" className="pt-10 pb-20 bg-[#dce7dc] bg-opacity-60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-6 text-[#859a85]">
          קביעת תור
        </h2>

        <div className="mx-auto max-w-[720px] rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 md:p-7 text-right">
          {/* INFO */}
          <div className="sm:flex sm:items-start sm:gap-8 text-right">
            {/* Right column (address + hours) */}
            <ul className="space-y-3 sm:flex-1">
              <li className="flex items-center gap-2 text-[15px]">
                <MapPin className="size-4 text-[var(--accent-strong)]" aria-hidden />
                <address className="not-italic">{SITE.address.streetAddress}, {SITE.address.locality}</address>
              </li>
              <li className="flex items-center gap-2 text-[15px]">
                <Clock className="size-4 text-[var(--accent-strong)]" aria-hidden />
                <span>ימי שלישי 13:00–19:00</span>
              </li>
            </ul>

            {/* Vertical divider on desktop */}
            <div className="hidden sm:block w-px bg-black/10 self-stretch" aria-hidden />

            {/* Left column (phone/WA/mail) */}
            <ul className="mt-4 sm:mt-0 space-y-3 sm:flex-1">
              <li className="flex items-center gap-2 text-[15px]">
                <Phone className="size-4 text-[var(--accent-strong)]" aria-hidden />
                <a href={SITE.clinicPhone.link} className="underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
                  {SITE.clinicPhone.display}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[15px]">
                <MessageCircle className="size-4 text-[var(--accent-strong)]" aria-hidden />
                <a href={SITE.whatsapp.link} target="_blank" rel="nofollow noopener noreferrer" className="underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
                  {SITE.whatsapp.display}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[15px]">
                <Mail className="size-4 text-[var(--accent-strong)]" aria-hidden />
                <a href={`mailto:${SITE.clinicEmail}`} className="underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
                  {SITE.clinicEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <hr className="mt-4 mb-5 border-black/5" />

          <div className="sm:grid sm:grid-cols-2 sm:gap-3">
            <a
              href={SITE.clinicPhone.link}
              aria-label="התקשרות למרפאה"
              className="h-12 w-full inline-flex items-center justify-center rounded-full bg-[var(--accent-strong)] text-white text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] whitespace-nowrap"
            >
              התקשרו למרפאה
            </a>

            <a
              href={SITE.whatsapp.link}
              target="_blank" rel="nofollow noopener noreferrer"
              aria-label="קביעת תור ב-WhatsApp"
              className="h-12 w-full mt-3 sm:mt-0 inline-flex items-center justify-center rounded-full border border-[var(--accent-strong)] text-[var(--accent-strong)] text-sm font-medium hover:bg-[var(--bg-tint)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] whitespace-nowrap"
            >
              קביעת תור ב-WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Full-width map below */}
      <div className="mt-10 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div className="h-[380px] md:h-[450px] xl:h-[520px] w-full">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}