module.exports = {
  base: '/rj1901-ac-docs/',
  title: '软件 1901 文档',
  description: '软件 1901 文档',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/favicon.png'
      }
    ]
  ],
  dest: '.vuepress/dist',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    logo: '/hero.png',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '简介', link: '/guide/', icon: 'reco-tag' },
      {
        text: '信息速查',
        items: [
          { text: '班级课表', link: '/class/class_table' },
          { text: '教学作息时间表', link: '/class/time_table' },
          { text: '考试时间', link: '/class/examination_time' },
          { text: '学院校历', link: '/class/school_calendar' }
        ],
        icon: 'reco-message'
      },
      {
        text: '考前复习',
        items: [
          {
            text: 'Java开源框架',
            items: [
              { text: '题目', link: '/test/java-framework/subject' },
              { text: '答案', link: '/test/java-framework/answer' }
            ]
          },
          {
            text: 'PHP程序设计',
            items: [
              { text: '题目', link: '/test/programming-php/subject' },
              { text: '答案', link: '/test/programming-php/answer' }
            ]
          },
          {
            text: '计算机实用工具软件',
            items: [
              {
                text: '第三季',
                link: '/test/computer-utility-software/season_3'
              },
              {
                text: '额外1-题目',
                link: '/test/computer-utility-software/extra_1_subject'
              },
              {
                text: '额外1-答案',
                link: '/test/computer-utility-software/extra_1_answer'
              },
              {
                text: '额外2-题目',
                link: '/test/computer-utility-software/extra_2_subject'
              },
              {
                text: '额外2-答案',
                link: '/test/computer-utility-software/extra_2_answer'
              }
            ]
          },
          {
            text: '多媒体技术',
            items: [
              { text: '题目', link: '/test/multimedia-technology/subject' }
            ]
          },
          {
            text: 'Android应用开发',
            items: [
              {
                text: '大纲',
                link: '/test/android-application-development/outline'
              }
            ]
          }
        ],
        icon: 'reco-document'
      },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
    ],
    startYear: '2021',
    author: 'tlyboy',
    logo: '/head.png',
    authorAvatar: '/avatar.png',
    noFoundPageByTencent: false,
    sidebarDepth: 2,
    sidebar: {
      '/test/java-framework/': ['subject', 'answer'],
      '/test/programming-php/': ['subject', 'answer'],
      '/test/computer-utility-software/': [
        'season_3',
        'extra_1_subject',
        'extra_1_answer',
        'extra_2_subject',
        'extra_2_answer'
      ]
    },
    subSidebar: 'auto',
    lastUpdated: '上次更新',
    repo: 'tlyboy/rj1901-ac-docs',
    repoLabel: 'GitHub',
    docsRepo: 'tlyboy/rj1901-ac-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true
  }
}
