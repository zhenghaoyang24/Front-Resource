export const sidebar = {
    'about': [
        {
            text: '了解一下',
            items: [
                {text: '介绍', link: '/about/introduce'},
            ],
        }
    ],
    '/framework/': [
        {
            text: "框架 / 库",
            items: [
                {text: 'JavaScript库', link: '/framework/javascript'},
                {text: 'CSS', link: '/framework/css'},
            ],
        }
    ],
    '/ui-component/': [
        {
            text: "UI / 组件",
            items: [
                {
                    text: 'UI 库',
                    collapsed: false,
                    items: [
                        {text: 'web 端', link: '/ui-component/ui-web'},
                        {text: '移动端', link: '/ui-component/ui-mobile'},
                    ]
                },
                {
                    text: '组件',
                    collapsed: false,
                    items: [
                        {text: '图表组件', link: '/ui-component/component-charts'},
                        {text: '音频/视频组件', link: '/ui-component/component-media'},
                        {text: '图片组件', link: '/ui-component/component-image'},
                        {text: '上传组件', link: '/ui-component/component-upload'},
                        {text: '拖拽组件', link: '/ui-component/component-drag'},

                    ]
                }
            ],
        }
    ],
    'design': [
        {
            text: '设计资源',
            items: [
                {text: '图标', link: '/design/icon'},
                {text: '动画', link: '/design/animate'},
                {text: '字体', link: '/design/fonts'},
                {text: '配色', link: '/design/color'},
                {text: '灵感', link: '/design/inspiration'},
            ]
        }
    ],
    'tools-plugin': [
        {
            text: '工具 / 插件',
            items: [
                {text: '工具', link: '/tools-plugin/tools'},
                {text: '插件', link: '/tools-plugin/plugin'},
            ]
        }
    ],
    'project':[
        {
            text: '开源项目',
            items: [
                {text: '博客主题', link: '/project/blog'},
            ]
        }
    ],
    'study':[
        {
            text: '学习进步',
            items: [
                {text: '社区 / 论坛', link: '/study/forum'},
            ]
        }
    ]
}
