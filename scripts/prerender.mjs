import { readFile, writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer, loadEnv } from 'vite'
import { resolveSiteUrl } from './seo.mjs'

const env = { ...loadEnv('production', process.cwd(), ''), ...process.env }
const siteUrl = resolveSiteUrl(env)
const preview = env.VERCEL_ENV === 'preview'
const vite = await createServer({
  mode: 'production',
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const { default: Projects } = await vite.ssrLoadModule(
    '/src/components/Projects.jsx',
  )
  const { projects } = await vite.ssrLoadModule('/src/data/portfolio.js')
  let markup = renderToString(
    createElement(App, { staticProjects: createElement(Projects) }),
  )
  const manifest = JSON.parse(
    await readFile('dist/.vite/manifest.json', 'utf8'),
  )
  // SSR loads source asset URLs; production HTML must use Vite's hashed files.
  for (const [source, asset] of Object.entries(manifest)) {
    if (source.startsWith('src/'))
      markup = markup.replaceAll(`/${source}`, `/${asset.file}`)
  }
  let html = await readFile('dist/index.html', 'utf8')
  assert.ok(
    html.includes('<div id="root"></div>'),
    'Prerender root placeholder tidak ditemukan.',
  )
  html = html.replace(
    '<div id="root"></div>',
    () => `<div id="root">${markup}</div>`,
  )
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    'Halaman harus memiliki tepat satu h1.',
  )
  assert.ok(
    html.includes('Anak Agung Gede Satria Putra Wibawa'),
    'Profil harus tersedia di HTML awal.',
  )
  for (const project of projects)
    assert.ok(
      markup.includes(project.title),
      `Proyek tidak ter-render: ${project.title}`,
    )
  assert.ok(
    !html.includes('/src/assets/'),
    'Asset prerender harus memakai URL produksi.',
  )
  await writeFile('dist/index.html', html)
  const sitemap =
    siteUrl && !preview
      ? `Sitemap: ${new URL('sitemap.xml', siteUrl).href}\n`
      : ''
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${sitemap}`)
  if (siteUrl && !preview) {
    const escapedUrl = siteUrl
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
    await writeFile(
      'dist/sitemap.xml',
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapedUrl}</loc></url></urlset>\n`,
    )
  }
  console.log(
    `Prerender selesai: profil dan ${projects.length} proyek tersedia di HTML awal.`,
  )
  if (!siteUrl)
    console.log(
      'Domain belum diatur: canonical, URL share image, dan sitemap menunggu SITE_URL atau domain produksi Vercel.',
    )
} finally {
  await vite.close()
}
