export default {
  head: {
    title: 'pishop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  env: {
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  build: {
  },

  proxy: {
    '/api': { target: 'https://ookprgdhd9.execute-api.us-west-2.amazonaws.com/hakanakgul3f4ab84f', pathRewrite: { '^/api': '' } }
  },

  axios: {
    proxy: true
  }
}
