// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/icon",
    "shadcn-nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './src/components/ui'
  },
  runtimeConfig: {
    BASE_URL: process.env.BASE_URL,
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
});