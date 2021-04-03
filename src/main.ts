import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store } from '@/store'
import Antd from 'ant-design-vue'

// 引入全局样式
import 'normalize.css'
import 'ant-design-vue/dist/antd.less'
import '@/assets/styles/index.less'

const app = createApp(App)

app
	.use(router)
	.use(store)
	.use(Antd)

app.mount('#app')
