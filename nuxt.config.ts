export default defineNuxtConfig({
  modules: [    
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vite-pwa/nuxt',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
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
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      globPatterns: [
        '**/*.{js,css,html,png,svg,jpg,json,webmanifest}'
      ],    },
    devOptions:{
      enabled:true,
      type:"module"
    }
  },

  compatibilityDate: '2024-07-05'
})