"use client";

import { ArrowUpRight } from "lucide-react";
import { pressItems } from "@/lib/data/press";

export default function PressSection() {
  return (
    <section dir="rtl" aria-labelledby="press-title" className="py-12 sm:py-16 bg-[var(--bg-tint)]/40">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="press-title" className="text-3xl sm:text-4xl font-light text-center mb-8 text-[#859a85]">
          כתבות ופרסומים
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pressItems.map((item) => (
            <li key={item.href} className="group">
              <a
                href={item.href}
                target="_blank"
                rel="noopener nofollow"
                className="flex flex-col h-full rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-5 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-black/60">{item.source}</span>
                  <ArrowUpRight className="size-4 text-[var(--accent-strong)] opacity-70 group-hover:opacity-100" aria-hidden />
                </div>

                <h3 className="text-[var(--heading)] text-lg leading-snug line-clamp-2">
                  {item.title}
                </h3>

                {item.summary ? (
                  <p className="mt-2 text-[15px] text-black/70 line-clamp-3">{item.summary}</p>
                ) : null}

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <time className="text-xs text-black/50">
                    {item.date ? new Date(item.date).toLocaleDateString("he-IL") : ""}
                  </time>
                  <span className="text-[13px] text-[var(--accent-strong)] underline-offset-2 group-hover:underline">
                    לקריאה
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}