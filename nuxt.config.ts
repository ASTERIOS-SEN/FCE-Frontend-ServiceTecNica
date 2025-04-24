export default defineNuxtConfig({
    css: ['@/assets/css/tailwind.css'],
    ssr: false,
    devtools: { enabled: true },
    compatibilityDate: '2025-04-18',
    modules: ['@nuxtjs/tailwindcss']
})