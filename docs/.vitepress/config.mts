import {defineConfig} from 'vitepress'
import {nav} from './nav'
import {sidebar} from './sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Front-Resource",
    description: "Collect high-quality resources related to the front-end.",
    themeConfig: {
        logo: '/logo.svg',
        outline: {
            level: [2, 3],
            label: '本页标题'
        },
        nav,
        sidebar,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/zhenghaoyang24/Front-Resource'}
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present <a target="_blank" href="https://github.com/zhenghaoyang24">zhenghaoyang24</a>'
        }
    }
})
