import test from 'node:test'
import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

test('portfolio prerenders Font Awesome SVG icons instead of emoji glyphs', async () => {
  const vite = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  })
  try {
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
    const { default: Projects } = await vite.ssrLoadModule('/src/components/Projects.jsx')
    const html = renderToStaticMarkup(
      createElement(App, { staticProjects: createElement(Projects) }),
    )
    assert.doesNotMatch(html, /[↗↓✳⌖↴×▧●]/u)
    for (const name of ['arrow-up-right-from-square', 'asterisk', 'github', 'instagram', 'location-dot']) {
      assert.ok(html.includes(`data-icon="${name}"`), `Missing icon: ${name}`)
    }
    const icons = html.match(/<svg\b[^>]*>[\s\S]*?<\/svg>/g) ?? []
    assert.ok(icons.length > 20)
    for (const icon of icons) {
      assert.match(icon, /aria-hidden="true"/)
      assert.match(icon, /focusable="false"/)
      assert.match(icon, /<path /)
    }
    assert.ok(html.includes('Lihat website'))
    assert.ok(html.includes('Tutup modal'))
    assert.equal((html.match(/aria-label="Lihat gambar /g) ?? []).length, 3)
    assert.equal((html.match(/<dialog\b/g) ?? []).length, 2)
    assert.ok(html.includes('Gambar proyek'))
  } finally {
    await vite.close()
  }
})
