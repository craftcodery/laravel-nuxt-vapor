require('dotenv').config({ path: '../.env' });
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  srcDir: __dirname + '/src',

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s - ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    htmlAttrs: {
      class: ['antialiased'],
    },
  },

  buildModules: ['@nuxt/typescript-build'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-i18n',
  ],

  axios: {
    debug: process.env.APP_DEBUG === 'true',
    proxyHeaders: false, // Recommended when using CloudFlare
  },

  publicRuntimeConfig: {
    apiUrl: process.env.APP_URL + '/api',
    appDebug: process.env.APP_DEBUG || '',
    appName: process.env.APP_NAME || '',
    appLocale: process.env.APP_LOCALE || 'en',
    appUrl: process.env.APP_URL || '',
    axios: {
      debug: process.env.APP_DEBUG === 'true',
      browserBaseURL: process.env.APP_CLIENT_URL,
    },
    clientUrl: process.env.APP_CLIENT_URL || '',
    cdnUrl: process.env.APP_CDN_URL || process.env.APP_URL || '',
  },

  privateRuntimeConfig: {
    axios: {
      debug: process.env.APP_DEBUG === 'true',
      baseURL: process.env.APP_CLIENT_URL,
    },
  },

  auth: {
    redirect: {
      callback: '/login',
      home: '/home',
      logout: '/',
    },
    strategies: {
      laravelPassport: {
        provider: 'laravel/passport',
        url: process.env.APP_URL,
        endpoints: {
          userInfo: process.env.APP_URL + '/api/users/auth',
        },
        user: {
          property: 'data',
        },
        token: {
          maxAge: 60 * 60,
        },
        refreshToken: {
          maxAge: 60 * 60 * 24 * 7,
        },
        clientId: process.env.PASSPORT_CLIENT_ID,
        clientSecret: process.env.PASSPORT_CLIENT_SECRET,
      },
    },
  },

  i18n: {
    baseUrl: process.env.APP_CLIENT_URL,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
    ],
    defaultLocale: 'en',
    vueI18n: '~/plugins/i18n.ts',
  },

  build: {
    extractCSS: true,
    extend(config) {
      config.module.rules.push({
        test: resolve(__dirname, '../resources/lang/index.js'),
        loader: '@kirschbaum-development/laravel-translations-loader/php?parameters={$1}',
      });
    },
  },

  render: {
    compressor: false,
  },
};
