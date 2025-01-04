export const sidebar = {
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
                },
                {
                    text: '组件',
                    collapsed: false,
                    items: [
                        {text: '图表组件', link: '/ui-component/component-charts'},
                    ]
                }
            ],
        }
    ]
}
