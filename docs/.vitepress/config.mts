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
        { text: 'JavaScript库', link: '/framework/javascript' },
        { text: 'CSS', link: '/framework/css' },
      ]},
      { text: 'UI / 组件',
        items: [
          { text: 'UI 库', link: '/ui-component/ui-web' },
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
            { text: 'JavaScript库', link: '/framework/javascript' },
            { text: 'CSS', link: '/framework/css' },
          ],
        }
      ],
      '/ui-component/':[
        {
          text:"UI / 组件",
          items: [
            {
              text: 'UI 库',
              collapsed: false,
              items: [
                {text: 'web 端', link: '/ui-component/ui-web'},
                {text: '移动端', link: '/ui-component/ui-mobile'},
              ]
            }
          ],
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhenghaoyang24/Front-Resource' }
    ]
  }
})
