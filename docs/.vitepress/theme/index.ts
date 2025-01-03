import DefaultTheme from 'vitepress/theme'
import PCIcon from './components/PCIcon.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // 注册全局组件
        app.component('PCIcon', PCIcon)
    }
}
