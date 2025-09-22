"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import { pressItems } from "@/lib/press";

export default function PressCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Initially scroll to show the first slide (Ynet לאשה) properly
    el.scrollTo({ left: 0, behavior: "auto" });
    
    const onScroll = () => {
      const mid = el.scrollLeft + el.clientWidth / 2;
      let idx = 0, best = 1e9;
      el.querySelectorAll<HTMLElement>("[data-slide]").forEach((s, i) => {
        const c = s.offsetLeft + s.offsetWidth / 2;
        const d = Math.abs(c - mid);
        if (d < best) { best = d; idx = i; }
      });
      setActive(idx);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { el.removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); };
  }, []);

  const go = (i: number) => {
    const el = ref.current;
    const list = el?.querySelectorAll<HTMLElement>("[data-slide]");
    if (!el || !list) return;
    const last = list.length - 1;
    const t = Math.max(0, Math.min(i, last));
    
    setActive(t);
    
    // First slide: align to right edge (RTL)
    if (t === 0) {
      return el.scrollTo({ left: 0, behavior: "smooth" });
    }
    
    // Last slide: align to left edge (RTL)
    if (t === last) {
      return el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" });
    }

    // Middle slides: center the slide
    const s = list[t];
    const targetLeft = s.offsetLeft - (el.clientWidth - s.clientWidth) / 2;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  return (
    <section id="כתבות-ופרסומים" dir="rtl" aria-labelledby="press-title" className="py-12 sm:py-16 bg-[var(--bg-tint)]/40">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="press-title" className="text-3xl sm:text-4xl font-light text-center mb-6 text-[#859a85]">
          כתבות ופרסומים
        </h2>

        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            aria-label="לכתבה הקודמת"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            className="p-2 rounded-full ring-1 ring-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <ChevronRight className="size-5" />
          </button>
          <button
            aria-label="לכתבה הבאה"
            onClick={() => go(active + 1)}
            disabled={active === pressItems.length - 1}
            className="p-2 rounded-full ring-1 ring-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="size-5" />
          </button>
        </div>

        <div ref={ref} className="relative -mx-4 px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--bg-tint)]/40 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0  w-12 bg-gradient-to-r from-[var(--bg-tint)]/40 to-transparent" />

          <ul className="flex gap-4 items-stretch">
            {pressItems.map((it, i) => (
              <li key={it.href} data-slide
                  className={`snap-center shrink-0 basis-[85%] sm:basis-[70%] md:basis-[55%] lg:basis-[45%] transition-transform duration-300 ease-out
                  ${i === active ? "scale-[1.05]" : "scale-100"}`}>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener nofollow"
                  className={`block h-full rounded-2xl bg-white p-5 shadow-sm transition
                    ${i === active
                      ? "ring-1 ring-black/5 shadow-[inset_0_0_0_2px_rgba(94,127,105,0.45)]"
                      : "ring-1 ring-black/5 opacity-60 hover:opacity-80"}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-black/60">{it.source}</span>
                    <ArrowUpRight className="size-4 text-[var(--accent-strong)] opacity-70" />
                  </div>
                  <h3 className="text-[var(--heading)] text-lg leading-snug line-clamp-3">{it.title}</h3>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <time className="text-xs text-black/50">
                      {it.date ? new Date(it.date).toLocaleDateString("he-IL") : ""}
                    </time>
                    <span className="text-[13px] text-[var(--accent-strong)] underline-offset-2">לקריאה</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {pressItems.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`לשקופית ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-[var(--accent-strong)]" : "w-3 bg-black/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}