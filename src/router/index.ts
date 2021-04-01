import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home/index.vue'),
	},
	// https://github.com/vuejs/rfcs/pull/227 这是一个<script setup>写法示例
	{
		path: '/setup',
		name: 'Setup-Page',
		component: () => import('@/views/SetupLayout/index.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('@/components/layout/404.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.VUE_APP_BASE_PATH),
	routes,
})

export default router
