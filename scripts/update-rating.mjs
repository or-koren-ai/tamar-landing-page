#!/usr/bin/env node
/**
 * Fetches the latest rating data from MedReviews and updates site-config.ts.
 * Designed to run in a GitHub Action on a weekly schedule.
 *
 * Usage: node scripts/update-rating.mjs
 */

const MEDREVIEWS_URL = 'https://www.medreviews.co.il/provider/dr-koren-tamar'
const CONFIG_PATH = 'lib/config/site-config.ts'

async function fetchRating() {
  const res = await fetch(MEDREVIEWS_URL)
  if (!res.ok) throw new Error(`Failed to fetch MedReviews: ${res.status}`)
  const html = await res.text()

  // Extract JSON-LD structured data
  const ldMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i)
  if (!ldMatch) throw new Error('No JSON-LD found on MedReviews page')

  let ld = JSON.parse(ldMatch[1])
  // JSON-LD can be an array — find the entry with aggregateRating
  if (Array.isArray(ld)) {
    ld = ld.find(item => item.aggregateRating) || ld[0]
  }
  const rating = ld.aggregateRating
  if (!rating) throw new Error('No aggregateRating in JSON-LD')

  const value = Math.round(rating.ratingValue * 10) / 10 // round to 1 decimal
  const count = parseInt(rating.reviewCount, 10)

  if (isNaN(value) || isNaN(count)) throw new Error(`Invalid rating data: ${value}, ${count}`)

  console.log(`Fetched rating: ${value}/5 from ${count} reviews`)
  return { value, count }
}

async function updateConfig({ value, count }) {
  const fs = await import('fs/promises')

  const content = await fs.readFile(CONFIG_PATH, 'utf-8')

  // Replace the rating values using regex
  let updated = content.replace(
    /value:\s*[\d.]+,\s*\n\s*count:\s*\d+,/,
    `value: ${value},\n    count: ${count},`
  )

  if (updated === content) {
    console.log('No changes needed — rating is already up to date.')
    return false
  }

  await fs.writeFile(CONFIG_PATH, updated, 'utf-8')
  console.log(`Updated site-config.ts: rating=${value}, count=${count}`)
  return true
}

async function main() {
  try {
    const { value, count } = await fetchRating()
    const changed = await updateConfig({ value, count })
    process.exit(changed ? 0 : 0)
  } catch (err) {
    console.error('Rating update failed:', err.message)
    process.exit(1)
  }
}

main()
