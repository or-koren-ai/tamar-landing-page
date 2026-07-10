import { SITE } from '@/lib/config/site-config'
import { services } from '@/lib/data/services'
import { conditions } from '@/lib/data/conditions'

// llms.txt — markdown site guide for AI agents (https://llmstxt.org)
// Generated from the same data as the sitemap so it never drifts.
export async function GET() {
  const base = SITE.baseUrl

  const body = `# ד״ר תמר קורן | Dr. Tamar Koren — Dermatologist in Haifa, Israel

> Private dermatology clinic of Dr. Tamar Koren (ד״ר תמר קורן), specialist in dermatology and venereology (מומחית לרפואת עור ומין) in Haifa, Israel. Senior physician and head of the psoriasis clinic at HaEmek Medical Center (Clalit). Treats infants, children and adults. Site content is in Hebrew.

- Phone: ${SITE.clinicPhone.display} (${SITE.clinicPhone.e164})
- WhatsApp: ${SITE.whatsapp.display} (${SITE.whatsapp.e164})
- Address: ${SITE.address.streetAddress}, ${SITE.address.locality} (Moriya 84, Haifa), Israel
- Hours: Tuesdays 13:00–19:00, by appointment only; high availability for urgent appointments
- Booking: by phone or WhatsApp — no referral needed
- Service area: Haifa, Krayot (Kiryat Ata, Kiryat Motzkin, Kiryat Yam), Acre, North Israel
- Languages: Hebrew, English

## Machine-readable data

- [Practice information (JSON)](${base}/api/practice-info): complete structured practice data — practitioner, credentials, services, conditions, hours, contact, location
- [Sitemap](${base}/sitemap.xml)

## Services (שירותי המרפאה)

${services.map((s) => `- [${s.title}](${base}/services/${s.slug}): ${s.description}`).join('\n')}

## Conditions (מצבים רפואיים)

${conditions.map((c) => `- [${c.hebrewName} (${c.englishName})](${base}/conditions/${c.slug}): ${c.metaDescription}`).join('\n')}

## Legal

- [הצהרת נגישות (Accessibility declaration)](${base}/accessibility-declaration)
- [מדיניות פרטיות (Privacy policy)](${base}/privacy-policy)
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
