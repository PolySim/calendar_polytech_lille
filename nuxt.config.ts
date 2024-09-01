// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxt/icon"],
  runtimeConfig: {
    BASE_URL: process.env.BASE_URL,
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
});
