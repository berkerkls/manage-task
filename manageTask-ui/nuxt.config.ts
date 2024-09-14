// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@vesp/nuxt-fontawesome",
    "@pinia/nuxt",
    "@vueuse/motion/nuxt",
  ],

  compatibilityDate: "2024-09-14",
});