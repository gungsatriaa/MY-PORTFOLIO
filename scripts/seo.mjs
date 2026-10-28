import { profile } from '../src/data/portfolio.js'

export const seo = {
  title: 'Gung Satria | Web & Software Developer di Bali',
  description:
    'Portofolio Gung Satria, Web Developer dan Software Developer di Ubud, Bali. Kenali proyek, pengalaman, serta keahlian PHP, Laravel, dan Flutter.',
}

export function resolveSiteUrl(env) {
  const raw =
    env.SITE_URL ||
    (env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
      : '')
  if (!raw) return null
  const url = new URL(raw)
  if (
    !['https:', 'http:'].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== '/'
  ) {
    throw new Error(
      'SITE_URL harus berupa URL root HTTP/HTTPS, tanpa path, query, kredensial, atau fragment.',
    )
  }
  return url.href
}

export function profileSchema(siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: seo.title,
    description: seo.description,
    inLanguage: 'id-ID',
    ...(siteUrl ? { url: siteUrl } : {}),
    mainEntity: {
      '@type': 'Person',
      name: profile.fullName,
      alternateName: profile.name,
      description:
        'Web Developer dan Software Developer, mahasiswa Software Engineering di Universitas Telkom, serta Founder CEO PT. Digisite Kreatif Indonesia. Berfokus pada pengembangan web dan perangkat lunak dengan PHP, Laravel, dan Flutter.',
      ...(siteUrl ? { url: siteUrl } : {}),
      sameAs: [profile.linkedin, profile.instagram],
      knowsAbout: profile.skills,
      homeLocation: { '@type': 'Place', name: profile.location },
    },
  }
}

export function seoTags(siteUrl, preview = false) {
  const meta = (name, content, property = false) => ({
    tag: 'meta',
    attrs: { [property ? 'property' : 'name']: name, content },
    injectTo: 'head',
  })
  const tags = [
    { tag: 'title', children: seo.title, injectTo: 'head' },
    meta('description', seo.description),
    meta('author', profile.fullName),
    meta(
      'robots',
      preview ? 'noindex,follow' : 'index,follow,max-image-preview:large',
    ),
    meta('og:title', seo.title, true),
    meta('og:description', seo.description, true),
    meta('og:type', 'website', true),
    meta('og:locale', 'id_ID', true),
    meta('og:site_name', 'Gung Satria', true),
    meta('twitter:card', siteUrl ? 'summary_large_image' : 'summary'),
    meta('twitter:title', seo.title),
    meta('twitter:description', seo.description),
    {
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      children: JSON.stringify(profileSchema(siteUrl)).replace(/</g, '\\u003c'),
      injectTo: 'head',
    },
  ]
  if (siteUrl) {
    const image = new URL('og-image-hero.jpg', siteUrl).href
    tags.push(
      {
        tag: 'link',
        attrs: { rel: 'canonical', href: siteUrl },
        injectTo: 'head',
      },
      meta('og:url', siteUrl, true),
      meta('og:image', image, true),
      meta('og:image:width', '1200', true),
      meta('og:image:height', '630', true),
      meta('og:image:type', 'image/jpeg', true),
      meta(
        'og:image:alt',
        'Gung Satria — Web Developer dan Software Developer di Bali',
        true,
      ),
      meta('twitter:image', image),
      meta('twitter:image:alt', 'Portofolio profesional Gung Satria'),
    )
  }
  return tags
}
