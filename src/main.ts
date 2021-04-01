import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store } from '@/store'

// 引入全局样式
import 'normalize.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
