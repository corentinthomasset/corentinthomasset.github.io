import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    scripts: {
      registry: {
        umamiAnalytics: {
          scriptInput: {
            src: 'https://telemetry.corentinthomasset.com/script.js',
          },
          websiteId: '079d5604-e5c8-47b8-b059-3c0a46552223',
        },
      },
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  routeRules: {
    '/demo/**': { prerender: false },
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/scripts',
  ],
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