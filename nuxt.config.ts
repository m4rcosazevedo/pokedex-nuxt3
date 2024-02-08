// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    'css': '<rootDir>/assets/css',
  },
  app: {
    head: {
      title: 'Pokedex',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
          charset: 'utf-8'
        }
      ],
      link: [
        // {
        //   rel: 'icon',
        //   type: 'image/x-icon',
        //   href: '/favicon.ico'
        // },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        }
      ]
    }
  },
  components: [
    '~/components',
    { path: '~/shared/icons', prefix: '' }
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://pokeapi.co/api/v2'
    }
  }
})
