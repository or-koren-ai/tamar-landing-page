# SEO Improvement Plan — drkoren.skin

## Context

After analyzing competitors drferaru.co.il and dr-stark.co.il, and deeply reviewing the existing drkoren.skin codebase, here's what's clear:

**What drkoren.skin already does well:**
- Service pages are genuinely rich (sections, FAQs, treatment processes, cross-links)
- Excellent structured data (4 JSON-LD schemas — far better than competitor who has zero)
- Proper meta tags, canonical URLs, heading hierarchy
- Fast Next.js performance vs competitor's bloated WordPress
- Good internal linking between services via `relatedServices`

**What the competitor does differently (not necessarily better):**
- 40+ individual pages, each targeting ONE specific condition keyword
- Hebrew in URL slugs alongside English
- Before/after photo gallery
- .co.il domain (inherent local trust signal vs .skin TLD)

**The core strategic question:** Your "dermatology" page lists psoriasis, atopic dermatitis, rosacea, etc. as bullets inside a comprehensive page. drferaru.co.il has a separate `/פסוריאזיס-psoriasis/` page. When someone Googles "פסוריאזיס טיפול חיפה", Google will match the competitor's dedicated page (it's in the title, URL, H1, and meta description) over a general dermatology page where psoriasis is one bullet among many.

This ISN'T about content quality — yours is better. It's about **keyword-to-page matching precision**.

---

## Competitor Analysis: dr-stark.co.il (Dr. Paula Stark)

**Key finding:** dr-stark.co.il ranks well for local dermatology queries despite having only 2-3 indexed pages (homepage, about, contact) and no technical SEO sophistication whatsoever. Her title tag is a straightforward exact-match for "מרפאה לעור ומין בחיפה". The site has no structured data, no blog, no condition pages, and minimal content.

**Her real moat is entirely off-page:**

1. **15+ medical directory citations** with consistent NAP (שד' מוריה 40, חיפה) across: d.co.il, doctorim.co.il, medico.co.il, infomed.co.il, beok.co.il, findoctor.co.il, easy.co.il, phoneindex.co.il, rofim.org.il, doctors.co.il, doctorinfo.co.il, b144.co.il, bizly.co.il
2. **Hospital affiliation backlink** from b-zion.org.il (Bnei Zion Medical Center) — a .org.il domain with extremely high authority for medical queries
3. **Domain age** — established .co.il domain with years of backlink accumulation
4. **Google Business Profile** — well-established listing that dominates the Maps pack for local queries

**What this means for drkoren.skin:** The on-page improvements from the drferaru.co.il analysis (condition pages, keyword matching) are necessary but not sufficient. Without matching the off-page authority signals that dr-stark.co.il has built, even perfect on-site SEO will struggle to compete for local dermatology queries. The off-page work outlined below should run in parallel with the on-site changes.

---

## SHOULD DO (Recommended Changes)

### 1. Create Dedicated Pages for High-Volume Conditions

**Why this matters:** Not to add content (you already have it), but to give Google a precise page to serve for each high-volume condition query. This is the single biggest lever.

**Key principle:** Only create pages for conditions Dr. Koren actually treats and can write authoritatively about. Quality over quantity — 10 excellent pages beats 40 thin ones.

**Recommended first batch (highest Hebrew search volume for dermatology):**

| Condition | Target Query | Currently Lives In |
|---|---|---|
| Psoriasis | פסוריאזיס טיפול | `/services/dermatology` (bullet) |
| Atopic Dermatitis | אטופיק דרמטיטיס / אסתמה של העור | `/services/dermatology` (bullet) |
| Rosacea | רוזציאה טיפול | `/services/dermatology` (bullet) |
| Seborrheic Dermatitis | סבוריאה טיפול | `/services/dermatology` (bullet) |
| Botox | בוטוקס חיפה | `/services/pigmentation` (section) |
| Melanoma Screening | בדיקת מלנומה | `/services/mole-check` (paragraph) |

**What each page needs:**
- Dedicated H1 with the condition name in Hebrew
- 400-600 words of focused content (extract and expand what's already in the parent service page)
- 3-5 condition-specific FAQs
- Link back to parent service page + link to related conditions
- CTA to book appointment
- JSON-LD `MedicalCondition` schema

**What each page does NOT need:**
- Full treatment process (that stays on the parent service page)
- Duplicate content from parent — these should complement, not copy
- Content for conditions Dr. Koren doesn't specialize in

**Implementation:** New route `app/conditions/[slug]/page.tsx` with a new data file `lib/data/conditions.ts`. Reuse existing patterns (FAQ component, CTA, breadcrumbs, structured data).

**URL format:** Use clean English-only slugs:
```
/conditions/psoriasis/
/conditions/atopic-dermatitis/
/conditions/rosacea/
/conditions/seborrheic-dermatitis/
```

**Why English-only (not bilingual):**
- No SEO ranking benefit from Hebrew in URLs — Google's John Mueller confirmed keywords in URLs are a "very, very lightweight factor" and URL language doesn't affect ranking
- Hebrew characters get percent-encoded when shared on WhatsApp/social (e.g., `%D7%A4%D7%A1%D7%95%D7%A8%D7%99%D7%90%D7%96%D7%99%D7%A1`) — looks broken and unprofessional
- Medical terms are internationally recognized — Israeli users understand English medical terms in URLs
- Consistent with major Israeli medical sites (Sheba, Ichilov) and existing drkoren.skin patterns (`/services/acne`, not `/services/acne-אקנה`)

**Critical:** Each condition page must link to its parent service page AND the parent service page must link down to its condition pages. This creates a hub-and-spoke model:
```
/services/dermatology (hub)
  ├── /conditions/psoriasis/
  ├── /conditions/atopic-dermatitis/
  ├── /conditions/rosacea/
  └── /conditions/seborrheic-dermatitis/
```

**Critical:** When adding a new condition page, you MUST also:
1. Add the condition to `lib/data/conditions.ts` (auto-added to sitemap and API)
2. Link from the parent service page bullet → condition page (add `{ text, conditionSlug }` to the service's `bullets` in `lib/data/services.ts`)
3. The `/services` index page (`app/services/page.tsx`) automatically renders all conditions from the `conditions` array — no manual update needed

---

### 2. Add Condition Links FROM Existing Service Pages

**Why:** Your existing service pages mention conditions as bullet text but don't link to them. Once condition pages exist, turn those bullet points into clickable links. This strengthens the internal linking mesh and helps Google discover and weight the condition pages.

**Example in dermatology page:** Change "פסוריאזיס וסבוראיק דרמטיטיס" from plain text bullet → link to `/conditions/psoriasis/` and `/conditions/seborrheic-dermatitis/`.

**Implementation:** Add an optional `conditionSlug` field to bullet items in the service data, and render them as `<Link>` when present.

---

### 3. Improve Meta Descriptions on Existing Service Pages

**Current gap:** Some service pages have empty or very short descriptions:
- `nails-fungus`: description is `""` (empty!)
- `dermatology`: generic "אבחון מקצועי ומדויק של מחלות עור שונות והתאמת טיפול אישי"
- `acne`: "טיפול באקנה והתאמת שגרת טיפוח יומיומית"

**Recommended fix:** Each description should be 140-160 chars, include the condition name, location (חיפה), and a differentiator. Example for nails:
```
מחלות ושינויים בציפורניים - אבחון וטיפול מקצועי ע״י ד״ר תמר קורן, מומחית עור בחיפה. פטרת ציפורניים, ציפורן חודרנית ועוד.
```

**Effort:** 30 minutes. Update descriptions in `lib/data/services.ts`.

---

### 4. Before/After Results Gallery (If Photos Exist)

**Why:** This is unique, original content that Google cannot find anywhere else. It's the strongest E-E-A-T signal possible — proof of actual expertise. The competitor has this and it generates additional indexed pages.

**Only pursue this if Dr. Koren has real patient photos with consent.**

**Implementation:** New route `app/results/page.tsx` — a simple gallery organized by condition, with lazy-loaded before/after image pairs and brief Hebrew descriptions.

---

### 5. Add a Proper Services Index Page

**Current state:** `/services` is in the sitemap with priority 0.8, but there's no actual page for it (it doesn't resolve to a real route). This is a wasted opportunity and a broken link in the sitemap.

**Fix:** Create `app/services/page.tsx` — a hub page listing all services with descriptions and links. Once condition pages exist, list those too organized by category. This becomes a topical authority hub.

---

## SHOULD NOT DO

### 1. Don't Create 40 Condition Pages Just to Match the Competitor
Their page count looks impressive but many are thin (~500 words of generic medical info). Google's Helpful Content Update penalizes this. Create only pages where Dr. Koren can provide genuine expert insight. 6-10 excellent pages > 40 mediocre ones.

### 2. Don't Change Existing Service Page URLs
Moving `/services/acne` to `/services/acne-אקנה` would break indexed URLs and any backlinks. Keep existing URLs stable. Use clean English-only slugs for all pages (existing and new).

### 3. Don't Add a Blog Without Real Commitment
A blog only helps if it has genuine, regularly updated Hebrew content reviewed by Dr. Koren (2-4 posts/month minimum). The competitor's 6 English auto-generated blog posts are SEO dead weight. An abandoned blog signals neglect.

### 4. Don't Keyword-Stuff Titles
The competitor's title tag is ~250 characters of keyword spam. Google increasingly penalizes this. Keep clean titles under 60 chars.

### 5. Don't Add Pages for Untreated Conditions
E-E-A-T for medical content (YMYL) requires authentic expertise. If Dr. Koren doesn't treat a condition, don't make a page for it.

### 6. Don't Over-Optimize at the Cost of UX
The site's clean design and fast performance are competitive advantages. Don't add heavy widgets, popups, or sidebars just for SEO. The competitor's WordPress/Elementor bloat is their weakness.

---

## IMPORTANT: Factors You Can't Fix With Code

Be aware that some ranking factors are NOT addressable through site changes. Based on analyzing both competitors, these off-page factors likely account for 50%+ of the ranking gap — especially for local queries.

### 1. Domain TLD
`.co.il` inherently gets more local trust signal in Israeli Google than `.skin`. This is baked into the domain choice and can't be changed without a migration (which would be far more disruptive than beneficial).

### 2. Citation/Directory Listings (Actionable — off-site task)

This is the single most actionable off-page item. Dr. Stark appears on 15+ medical directories with perfectly consistent NAP data. Each listing acts as a trust signal telling Google "this is a real, established medical practice at this address."

**Directories to submit drkoren.skin to (check which are already present):**

| Directory | URL | Notes |
|---|---|---|
| d.co.il | d.co.il | Major Israeli business directory |
| doctorim.co.il | doctorim.co.il | Doctors-specific directory |
| medico.co.il | medico.co.il | Medical professionals |
| infomed.co.il | infomed.co.il | Medical information portal |
| beok.co.il | beok.co.il | Health directory |
| findoctor.co.il | findoctor.co.il | Doctor finder |
| easy.co.il | easy.co.il | Business directory |
| phoneindex.co.il | phoneindex.co.il | Phone directory |
| rofim.org.il | rofim.org.il | Doctors directory |
| doctors.co.il | doctors.co.il | Doctors directory |
| doctorinfo.co.il | doctorinfo.co.il | Doctor information |
| b144.co.il | b144.co.il | Major Israeli yellow pages |
| bizly.co.il | bizly.co.il | Business listings |

**Critical rules:**
- **NAP consistency is everything.** Use the exact same name, address, and phone number across ALL listings. Even small variations (e.g., "ד״ר" vs "דר'" or "רח' " vs "רחוב") confuse Google's entity matching.
- drkoren.skin already appears on medreviews.co.il — audit which of the above directories already have listings and which are missing
- When submitting, always include: specialty (רפואת עור ומין), Haifa location, phone number, and link to drkoren.skin

### 3. Hospital Affiliation Backlink

Dr. Stark gets a backlink from b-zion.org.il (Bnei Zion Medical Center). Hospital .org.il domains carry extremely high authority for medical queries because Google treats them as highly trustworthy sources in the YMYL (Your Money Your Life) category.

**Action items:**
- Check if Dr. Koren has a staff/doctor profile page on Emek Medical Center's website or Clalit Health Services' website
- If yes — ensure it links to drkoren.skin (not just lists her name)
- If no — request one. Hospital staff pages are standard and the hospital benefits from having complete staff listings
- Any .org.il or .ac.il backlink (medical centers, university affiliations, medical associations) is extremely valuable

### 4. Google Business Profile (Highest-Impact Off-Page Item)

For local searches like "רופא עור בחיפה", the Google Maps pack (3 results with map) appears ABOVE organic results. This means GBP optimization may have more impact than any on-site change. Dr. Stark's established GBP is likely her strongest ranking factor.

**GBP optimization checklist:**
- **Categories:** Primary = "Dermatologist" (רופא עור), add secondary categories: "Skin Care Clinic", "Medical Clinic"
- **Photos:** Upload 10+ high-quality photos (office exterior, interior, waiting room, treatment rooms). Add new photos monthly — Google favors active listings
- **Google Posts:** Publish a post every 1-2 weeks (seasonal skin care tips, availability updates, new services). Posts appear in the listing and signal activity
- **Reviews:** Actively encourage satisfied patients to leave Google reviews. Respond to EVERY review (positive and negative) promptly and professionally. Review count and recency are major ranking factors
- **Q&A:** Seed the Q&A section with common patient questions and answers
- **Attributes:** Fill in all available attributes (accessibility, payment methods, languages spoken, etc.)
- **Hours:** Keep hours accurate and up-to-date, including holiday hours
- **Website link:** Ensure it points to drkoren.skin (not a social media page)

### 5. Domain Age & Backlink Profile

An older domain with more backlinks will rank higher regardless of on-site SEO quality. Beyond directories and hospital links, additional backlink opportunities:
- Press coverage (the site already has press mentions — ensure those publications link to drkoren.skin)
- Medical association memberships (Israeli Dermatology Society, etc.)
- Guest articles on health portals
- Local Haifa business/health directories

---

## Priority Execution Order

### On-Site Changes (require code)

| # | What | Impact | Effort | Dependencies |
|---|---|---|---|---|
| 1 | Fix empty/short meta descriptions on existing pages | Medium | 30 min | None |
| 2 | Create condition page infrastructure (route, template, data) | Foundation | 1-2 days | None |
| 3 | First 3 condition pages (Psoriasis, Atopic Dermatitis, Rosacea) | High | 1-2 days | #2 |
| 4 | Create services index page | Medium | 0.5 day | None |
| 5 | Add condition links from parent service pages | High | 0.5 day | #3 |
| 6 | Next 3 condition pages (Seborrheic Dermatitis, Botox, Melanoma Screening) | High | 1-2 days | #2 |
| 7 | Before/after gallery (if photos available) | Medium-High | 1 day | Photos from Dr. Koren |

### Off-Page Actions (no code required — can run in parallel)

| # | What | Impact | Effort | Dependencies |
|---|---|---|---|---|
| OFF-1 | Submit to all 13+ medical directories with consistent NAP | Very High | 2-3 hours | None |
| OFF-2 | Verify/request hospital affiliation backlink (Emek/Clalit) | High | 30 min | None |
| OFF-3 | Optimize Google Business Profile (photos, posts, categories, Q&A) | Very High | 1 hour + ongoing | None |
| OFF-4 | Audit existing press mentions for backlinks to drkoren.skin | Medium | 1 hour | None |

**Note:** OFF-1 through OFF-3 should be started immediately — they require no technical work and arguably have higher impact than any on-site change for local search queries. The dr-stark.co.il analysis proves that off-page authority alone can outrank technically superior sites.

---

## Files to Modify/Create

**Modify:**
- `lib/data/services.ts` — fix empty descriptions, add `conditionSlug` to bullets
- `app/sitemap.ts` — add condition pages to sitemap
- `lib/seo/structured-data.ts` — add `MedicalCondition` schema generator
- `app/services/[slug]/page.tsx` — render linked bullets where `conditionSlug` exists
- `types/index.ts` — add condition types

**Create:**
- `app/conditions/[slug]/page.tsx` — condition page template
- `lib/data/conditions.ts` — condition content data
- `app/services/page.tsx` — services index page
- `app/results/page.tsx` — before/after gallery (if photos available)
