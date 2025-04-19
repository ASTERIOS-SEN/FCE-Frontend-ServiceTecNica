export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  build: {
    transpile: ['@headlessui/vue']
  },
  compatibilityDate: '2025-04-18',
  modules: ['@nuxtjs/tailwindcss']
})