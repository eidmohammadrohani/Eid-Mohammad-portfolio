// Builds the SEO <head> tags, Schema.org Person data, sitemap.xml and robots.txt
// from the same data files the website uses, so nothing has to be typed twice.

const escapeHtml = (text) =>
  String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export function seoPlugin({ siteUrl, profile, seo, sameAs = [] }) {
  const base = (siteUrl || '').trim().replace(/\/+$/, '')

  // Tags that work without a domain.
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="author" content="${escapeHtml(profile.name)}" />`,
    '<meta name="theme-color" content="#070b1a" />',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${escapeHtml(profile.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:card" content="${base ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
  ]

  // Tags that need a real, absolute address.
  if (base) {
    tags.push(
      `<link rel="canonical" href="${base}/" />`,
      `<meta property="og:url" content="${base}/" />`,
      `<meta property="og:image" content="${base}/og-image.png" />`,
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      `<meta property="og:image:alt" content="${escapeHtml(seo.imageAlt)}" />`,
      `<meta name="twitter:image" content="${base}/og-image.png" />`,
    )
  }

  // Schema.org Person. Only real, confirmed facts are included.
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.pashtoName,
    jobTitle: profile.title,
    description: seo.description,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.city,
      addressRegion: profile.region,
      addressCountry: 'AF',
    },
    affiliation: { '@type': 'CollegeOrUniversity', name: profile.university },
    knowsAbout: seo.knowsAbout,
  }
  if (base) person.url = `${base}/`
  if (sameAs.length > 0) person.sameAs = sameAs

  // "<" is escaped so the JSON can never close the <script> tag early.
  const jsonLd =
    '<script type="application/ld+json">' +
    JSON.stringify(person).replace(/</g, '\\u003c') +
    '</script>'

  return {
    name: 'portfolio-seo',

    transformIndexHtml(html) {
      return html.replace('<!--SEO_TAGS-->', tags.join('\n    ')).replace('<!--JSON_LD-->', jsonLd)
    },

    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /']
      if (base) robots.push('', `Sitemap: ${base}/sitemap.xml`)
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n' })

      if (base) {
        const today = new Date().toISOString().slice(0, 10)
        const sitemap =
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          `  <url>\n    <loc>${base}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n` +
          '</urlset>\n'
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
      }
    },
  }
}
