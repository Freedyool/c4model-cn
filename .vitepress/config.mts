import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "C4-Model-zh",
  description: "C4-Model 中文文档",
  ignoreDeadLinks: 'localhostLinks',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Api', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '首页', link: '/home' },
          { text: '介绍', link: '/introduction' },
          {
            text: '分层抽象',
            base: '/abstractions',
            link: '/',
            items: [
              { text: '1. 系统', link: '/01-software-system' },
              { text: '2. 容器', link: '/02-container' },
              { text: '3. 组件', link: '/03-component' },
              { text: '4. 代码', link: '/04-code' },
              { text: '微服务', link: '/11-microservices' },
              { text: '队列和主题', link: '/12-queues-and-topics' },
              { text: '常见问题', link: '/99-faq' }
            ]
          },
          {
            text: '分层框图',
            base: '/diagrams',
            link: '/',
            items: [
              { text: '1. 系统上下文框图', link: '/01-system-context' },
              { text: '2. 容器框图', link: '/02-container' },
              { text: '3. 组件框图', link: '/03-components' },
              { text: '4. 代码框图', link: '/04-code' },
              { text: '系统全景图', link: '/05-system-landscape' },
              { text: '动态图', link: '/06-dynamic' },
              { text: '部署图', link: '/07-deployment'},
              { text: '符号', link: '/11-notation' },
              { text: '审查清单', link: '/12-checklist' },
              { text: '示例', link: '/19-example' },
              { text: '常见问题', link: '/99-faq' }
            ]
          },
          { text : '使用工具', link: '/tooling' },
          { text : '常见问题', link: '/faq' },
          { text : '更多', link: '/more' },
          { text : '许可证', link: '/license' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Freedyool/c4model-cn' }
    ],

    editLink: {
      pattern: 'https://github.dev/Freedyool/c4model-cn/blob/master/:path'
    },
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      link: '/'
    },

    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        sidebar: [
          {
            text: '',
            base: '/en/',
            items: [
              { text: 'Home', link: 'home' },
              { text: 'Introduction', link: 'introduction' },
              {
                text: 'Abstractions',
                base: '/en/abstractions/',
                link: '/',
                items: [
                  { text: '1. Software system', link: '01-software-system' },
                  { text: '2. Container', link: '02-container' },
                  { text: '3. Component', link: '03-component' },
                  { text: '4. Code', link: '04-code' },
                  { text: 'Microservices', link: '11-microservices' },
                  { text: 'Queues and topics', link: '12-queues-and-topics' },
                  { text: 'FAQ', link: '99-faq' }
                ]
              },
              {
                text: 'Diagrams',
                base: '/en/diagrams/',
                link: '/',
                items: [
                  { text: '1. System context diagram', link: '01-system-context' },
                  { text: '2. Container diagram', link: '02-container' },
                  { text: '3. Component diagram', link: '03-components' },
                  { text: '4. Code diagram', link: '04-code' },
                  { text: 'System landscape diagram', link: '05-system-landscape' },
                  { text: 'Dynamic diagram', link: '06-dynamic' },
                  { text: 'Deployment diagram', link: '07-deployment'},
                  { text: 'Notation', link: '11-notation' },
                  { text: 'Review checklist', link: '12-checklist' },
                  { text: 'Example', link: '19-example' },
                  { text: 'FAQ', link: '99-faq' }
                ]
              },
              { text : 'Tooling', link: 'tooling' },
              { text : 'FAQ', link: 'faq' },
              { text : 'More information', link: 'more' },
              { text : 'License', link: 'license' }
            ]
          }
        ]
      }
    }
  }
})
