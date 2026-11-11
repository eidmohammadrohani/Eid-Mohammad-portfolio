import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { seoPlugin } from './plugins/seo.js'
import { profile, seo } from './src/data/profile.js'
import { confirmedSocialLinks } from './src/data/socialLinks.js'

export default defineConfig(({ mode }) => {
  // VITE_SITE_URL comes from the ".env" file (see .env.example).
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [
      react(),
      seoPlugin({
        siteUrl: env.VITE_SITE_URL,
        profile,
        seo,
        sameAs: confirmedSocialLinks.map((link) => link.url),
      }),
    ],
  }
})
