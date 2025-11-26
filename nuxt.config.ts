import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  routeRules: {
    '/demo/**': { prerender: false },
  },
  modules: ['@nuxt/icon', '@nuxt/ui', '@nuxt/image', '@vueuse/motion/nuxt', '@vueuse/nuxt', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    clientBundle: {
      scan: true,
    },
  },
  colorMode: {
    preference: 'dark',
  },
})
