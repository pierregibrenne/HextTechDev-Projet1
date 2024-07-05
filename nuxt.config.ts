export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
  ],

  pwa: {
    manifest: {
      name: 'Driver',
      short_name: 'Drive',
      lang: 'en',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#4DBA87',
      icons: [
        {
          src: './public/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './public/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://my-api.example.com/.*',
          handler: 'NetworkFirst',
          method: 'GET'
        }
      ]
    }
  },

  compatibilityDate: '2024-07-05'
})