import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/1600.css',
    '~/assets/fonts/stylesheet.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/owl.js', ssr: false },
    { src: '~/plugins/flip.js', ssr: false },
    { src: '~plugins/jwt.js', ssr: false },
    { src: '~plugins/vue-suggestion.js', ssr: false },
    { src: '~/plugins/auth.js', ssr: true },
    '~/plugins/modals.js',
    '~/plugins/VMask.js',
    { src: '~/plugins/slick.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt'
  ],

  auth: {
    token: {
      prefix: 'token.'
    },

    redirect: {
      login: '',
      logout: '',
      callback: '/auth',
      home: ''
    },

    strategies: {
      facebook: {
        client_id: '2711119502546915',
        userinfo_endpoint:
          'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email'],
        token_type: ''
      },

      google: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
        userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scope: ['openid', 'profile', 'email'],
        access_type: undefined,
        access_token_endpoint: undefined,
        response_type: 'token',
        token_type: '',
        redirect_uri: undefined,
        client_id:
          '874488421977-aap77ogid64ksfmne1htife1b8dfagki.apps.googleusercontent.com',
        token_key: 'id_token',
        state: 'UNIQUE_AND_NON_GUESSABLE'
      },

      test: {
        client_id: '2711119502546915',
        userinfo_endpoint:
          'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email'],
        token_type: ''
      },

      vk: {
        // _scheme: 'oauth3',
        // authorization_endpoint: 'https://oauth.vk.com/authorize',
        // response_type: 'token',
        // token_type: '',
        // client_id: '7508182',
        display: 'popup',
        client_id: '7508182',
        authorization_endpoint: 'https://oauth.vk.com/authorize',
        scope: ['email'],
        token_type: ''
      }
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://istokhome.ru/api'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  server: {
    host: '0.0.0.0'
  }
}
