import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Easy AI Docs',
  description: 'API 文档站点',
  themeConfig: {
    socialLinks: []
  },
  locales: {
    root: {
      label: '简体中文',
      link: '/',
      lang: 'zh-CN',
      title: 'Easy AI Docs',
      description: 'API 文档站点',
      themeConfig: {
        nav: [
          { text: '快速开始', link: '/' },
          { text: 'FAQ', link: '/faq' }
        ],
        sidebar: [
          {
            text: '入门',
            items: [{ text: '快速开始', link: '/' }]
          },
          {
            text: '代理客户端配置',
            link: '/proxy-client-config',
            items: [
              { text: 'Claude Code', link: '/proxy-client-config/claude-code' },
              { text: 'Codex', link: '/proxy-client-config/codex' },
              { text: 'Factory Droid', link: '/proxy-client-config/factory-droid' },
              { text: 'OpenCode', link: '/proxy-client-config/opencode' },
              { text: 'Cursor', link: '/proxy-client-config/cursor' }
            ]
          },
          {
            text: 'FAQ',
            link: '/faq',
            items: [
              { text: '最新消息', link: '/faq/latest-news' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      link: '/en/',
      lang: 'en-US',
      title: 'Easy AI Docs',
      description: 'API documentation site',
      themeConfig: {
        nav: [
          { text: 'Quick Start', link: '/en/' },
          { text: 'FAQ', link: '/en/faq' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [{ text: 'Quick Start', link: '/en/' }]
          },
          {
            text: 'Proxy Client Configuration',
            link: '/en/proxy-client-config',
            items: [
              { text: 'Claude Code', link: '/en/proxy-client-config/claude-code' },
              { text: 'Codex', link: '/en/proxy-client-config/codex' },
              { text: 'Factory Droid', link: '/en/proxy-client-config/factory-droid' },
              { text: 'OpenCode', link: '/en/proxy-client-config/opencode' },
              { text: 'Cursor', link: '/en/proxy-client-config/cursor' }
            ]
          },
          {
            text: 'FAQ',
            link: '/en/faq',
            items: [
              { text: 'Latest News', link: '/en/faq/latest-news' }
            ]
          }
        ]
      }
    }
  }
})
