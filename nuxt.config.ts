// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ['./assets/css/main.css'],

  runtimeConfig: {
    public: {
      figmaFileKey: process.env.FIGMA_FILE_KEY,
      figmaApiKey: process.env.FIGMA_API_KEY,
      mcpServerUrl: 'http://localhost:7777'
    }
  },

  app: {
    head: {
      title: '101tokyo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '探索最新的設計與開發資源' }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },

  // 設置路由規則
  router: {
    options: {
      strict: true
    }
  },

  compatibilityDate: '2025-04-02',

  // 強制使用 node-server preset（避免 Zeabur 自動偵測問題）
  nitro: {
    preset: 'node-server'
  }
})