export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxt/content', '@nuxt/image'],

  compatibilityDate: '2024-12-06',
  routeRules: {},
  // debug: process.env.NODE_ENV === "test",

  sitemap: {
    sitemaps: {
      pages: {
        includeAppSources: true,
        exclude: ['/posts/**', '/tags/**', '/test'],
      },
      posts: {
        includeAppSources: true,
        include: ['/posts/**'],
      },
    },
  },
})