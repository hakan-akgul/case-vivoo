import secret from "./configs/secret"

export default {
  head: {
    title: 'vivoo shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/logo.svg' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" }
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
    '/api': {
      target: 'https://ookprgdhd9.execute-api.us-west-2.amazonaws.com/hakanakgul3f4ab84f',
      pathRewrite: { '^/api': '' },
      headers: { SHOP_SK: secret.SHOP_SK }
    }
  },

  axios: {
    proxy: true
  }
}
