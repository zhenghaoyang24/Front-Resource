import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Front-Resource",
  description: "Collect high-quality resources related to the front-end.",
  themeConfig: {
    outline: {
      level:[2,3],
      label:'本页标题'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '总览', link: '/introduce/start' },
      { text: '框架 / 库',
      items: [
        { text: 'JavaScript库', link: '/framework/Development' },
        { text: 'CSS', link: '/framework/CSS' },
        { text: '状态管理库', link: '/framework/StateManagement' },
      ]}
    ],
    sidebar:{
      'introduce': [
        {
          text: '总览',
          items: [
            { text: '介绍', link: '/introduce/start' },
            { text: '信息', link: '/introduce/information' }
          ],
        }
      ],
      '/framework/':[
        {
          text:"框架 / 库",
          items: [
            { text: 'JavaScript库', link: '/framework/Development' },
            { text: 'CSS', link: '/framework/CSS' },
            { text: '状态管理库', link: '/framework/StateManagement' },
          ],
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhenghaoyang24/Front-Resource' }
    ]
  }
})
