import pkg from './package';

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0' },

  /*
  ** Global CSS
  */
  css: [
  ],

  router: {
    middleware: ['clearValidationMiddleware']
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/mixins/user',
    '@/plugins/mixins/validation',
    '@/plugins/axios',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth'
  ],
  
  axios: {
    baseURL: 'http://127.0.0.1:8000/api',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: { url: 'logout', method: 'post' },
        },
      },
    },
    redirect: {
      login: '/auth/login',
      home: '/',
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
