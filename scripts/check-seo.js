/**
 * Validates the exported HTML in `out/` against the SEO rules we target:
 * title 40-60 chars, description 140-160 chars, keywords + canonical present,
 * and exactly one <h1> per page.
 *
 * Usage: npm run build && node scripts/check-seo.js
 */
const fs = require('fs')
const path = require('path')

const OUT_DIR = path.join(__dirname, '..', 'out')
const TITLE_MIN = 40
const TITLE_MAX = 60
const DESC_MIN = 140
const DESC_MAX = 160

const SKIP = new Set(['/404/index.html', '/404.html'])

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return htmlFiles(full)
    return entry.name.endsWith('.html') ? [full] : []
  })
}

function decode(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
}

function meta(html, name) {
  const match = html.match(
    new RegExp(`<meta name="${name}" content="([^"]*)"`, 'i')
  )
  return match ? decode(match[1]) : null
}

if (!fs.existsSync(OUT_DIR)) {
  console.error('No out/ directory. Run `npm run build` first.')
  process.exit(1)
}

let failures = 0

for (const file of htmlFiles(OUT_DIR).sort()) {
  const route = '/' + path.relative(OUT_DIR, file).replace(/\\/g, '/')
  if (SKIP.has(route)) continue

  const html = fs.readFileSync(file, 'utf8')

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i)
  const title = titleMatch ? decode(titleMatch[1]) : ''
  const description = meta(html, 'description') || ''
  const keywords = meta(html, 'keywords') || ''
  const hasCanonical = /rel="canonical"/i.test(html)
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length

  const problems = []
  if (title.length < TITLE_MIN || title.length > TITLE_MAX) {
    problems.push(`title ${title.length} chars (want ${TITLE_MIN}-${TITLE_MAX}): "${title}"`)
  }
  if (description.length < DESC_MIN || description.length > DESC_MAX) {
    problems.push(`description ${description.length} chars (want ${DESC_MIN}-${DESC_MAX})`)
  }
  if (!keywords) problems.push('missing keywords')
  if (!hasCanonical) problems.push('missing canonical')
  if (h1Count !== 1) problems.push(`${h1Count} <h1> tags (want exactly 1)`)

  if (problems.length) {
    failures += 1
    console.log(`FAIL ${route}`)
    problems.forEach((problem) => console.log(`     - ${problem}`))
  } else {
    console.log(`ok   ${route}  title=${title.length}  desc=${description.length}`)
  }
}

if (failures) {
  console.log(`\n${failures} page(s) failed SEO checks.`)
  process.exit(1)
}
console.log('\nAll pages pass SEO checks.')
