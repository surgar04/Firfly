import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "流萤-Bot使用文档",
  description: "A VitePress Site",
  base: '/',
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2,6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档首页', link: '/' },
      { text: '哔哩哔哩', link: 'https://space.bilibili.com/1277575300' }
    ],
    seacrch: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "好像没有这个哦＞﹏＜",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    sidebar: [
      {
        text: '分区总览',
        items: [
          { text: '原神文档 Genshin Impact', link: '/markdown-examples' },
          { text: '星铁文档 Star Rail', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/surgar04?tab=repositories' }
    ]
  }
})
