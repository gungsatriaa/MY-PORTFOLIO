import test from 'node:test'
import assert from 'node:assert/strict'
import { resolveSiteUrl, profileSchema, seoTags } from '../scripts/seo.mjs'
import { profile } from '../src/data/portfolio.js'

test('production URL uses the explicit domain before the stable Vercel domain', () => {
  assert.equal(resolveSiteUrl({}), null)
  assert.equal(
    resolveSiteUrl({ VERCEL_PROJECT_PRODUCTION_URL: 'portfolio.vercel.app' }),
    'https://portfolio.vercel.app/',
  )
  assert.equal(
    resolveSiteUrl({
      SITE_URL: 'https://portfolio.test',
      VERCEL_PROJECT_PRODUCTION_URL: 'preview.vercel.app',
    }),
    'https://portfolio.test/',
  )
  for (const SITE_URL of [
    'javascript:alert(1)',
    'https://user:pass@portfolio.test/',
    'https://portfolio.test/path',
    'https://portfolio.test/?q=1',
    'https://portfolio.test/#x',
    'not-a-url',
  ]) {
    assert.throws(() => resolveSiteUrl({ SITE_URL }))
  }
})

test('profile markup uses supplied identity and does not invent a portrait or ratings', () => {
  const schema = profileSchema(null)
  assert.equal(schema.mainEntity.name, profile.fullName)
  assert.deepEqual(schema.mainEntity.sameAs, [
    profile.linkedin,
    profile.instagram,
  ])
  assert.equal(schema.url, undefined)
  assert.equal(schema.mainEntity.image, undefined)
  assert.equal(schema.aggregateRating, undefined)
})

test('metadata uses absolute production links, and preview builds are noindex', () => {
  const tags = seoTags('https://portfolio.test/', true)
  assert.equal(
    tags.find((tag) => tag.attrs?.rel === 'canonical').attrs.href,
    'https://portfolio.test/',
  )
  assert.equal(
    tags.find((tag) => tag.attrs?.property === 'og:image').attrs.content,
    'https://portfolio.test/og-image-hero.jpg',
  )
  assert.equal(
    tags.find((tag) => tag.attrs?.name === 'robots').attrs.content,
    'noindex,follow',
  )
  assert.equal(
    tags.find((tag) => tag.attrs?.property === 'og:image:type').attrs.content,
    'image/jpeg',
  )
  assert.equal(
    tags.find((tag) => tag.attrs?.name === 'twitter:image').attrs.content,
    'https://portfolio.test/og-image-hero.jpg',
  )
  const local = seoTags(null)
  assert.ok(!local.some((tag) => tag.attrs?.rel === 'canonical'))
  assert.ok(!local.some((tag) => tag.attrs?.property === 'og:image'))
  assert.doesNotThrow(() =>
    JSON.parse(tags.find((tag) => tag.tag === 'script').children),
  )
})
