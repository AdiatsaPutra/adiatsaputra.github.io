// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   baseURL: "/",
  //   buildAssetsDir: "assets",
  // },
  devtools: { enabled: true },

  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@vueuse/motion/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Poppins: [400, 700],
    },
    display: "swap",
    download: false,
  },
});
