import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Decentralchain + Nuxt 3',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@unocss/nuxt'],
  unocss: {
    preflight: true,
    uno: true,
    icons: {
      scale: 1.3,
    },
    shortcuts: [],
    rules: [],
  },
});
