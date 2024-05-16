// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: ["~/plugins/preline.client.ts"],
  router: {
    options: { linkExactActiveClass: 'active' },
},
})