import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { resolveSiteUrl, seoTags } from './scripts/seo.mjs'

export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env }
  const siteUrl = resolveSiteUrl(env)
  return {
    build: { manifest: true },
    plugins: [
      react(),
      {
        name: 'portfolio-seo',
        transformIndexHtml() {
          return seoTags(siteUrl, env.VERCEL_ENV === 'preview')
        },
      },
    ],
  }
})
