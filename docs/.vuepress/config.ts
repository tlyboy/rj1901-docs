import { defineConfig } from 'vuepress/config'

export default defineConfig({
  title: '软件 1901 文档',
  description: '这是我们软件 1901 的文档',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '软件 1901 文档',
      description: '这是我们软件 1901 的文档'
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文档简介',
        link: '/guide/'
      },
      {
        text: '信息速查',
        items: [
          {
            text: '班级课表',
            link: '/class/class-table'
          },
          {
            text: '教学作息时间表',
            link: '/class/time-table'
          },
          {
            text: '考试时间',
            link: '/class/examination-time'
          },
          {
            text: '学院校历',
            link: '/class/school-calendar'
          }
        ]
      },
      {
        text: '考前复习',
        items: [
          {
            text: 'Java 开源框架',
            link: '/test/java-framework/subject'
          },
          {
            text: 'PHP 程序设计',
            link: '/test/programming-php/subject'
          },
          {
            text: '计算机实用工具软件',
            link: '/test/computer-utility-software/season-3'
          },
          {
            text: '多媒体技术',
            link: '/test/multimedia-technology/subject'
          },
          {
            text: 'Android 应用开发',
            link: '/test/android-application-development/outline'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [''],
      '/test/java-framework/': ['subject', 'answer'],
      '/test/programming-php/': ['subject', 'answer'],
      '/test/computer-utility-software/': [
        'season-3',
        'extra-1-subject',
        'extra-1-answer',
        'extra-2-subject',
        'extra-2-answer'
      ]
    },
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    repo: 'tlyboy/rj1901-docs',
    docsRepo: 'tlyboy/rj1901-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
  markdown: {
    lineNumbers: true
  }
})
