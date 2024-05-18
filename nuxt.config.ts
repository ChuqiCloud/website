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
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Acmecloud - 新一代IDC产品软件服务提供商',
      titleTemplate: '%s - Acmecloud - 新一代IDC产品软件服务提供商',
      htmlAttrs: {
          lang: 'zh',
      },
      meta: [
          { charset: 'utf-8' },
          {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no',
          },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
  },
  plugins: ["~/plugins/preline.client.ts"],
  router: {
    options: { linkExactActiveClass: 'active' },
},
})